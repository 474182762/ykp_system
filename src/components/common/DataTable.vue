<template>
    <div class="dataTableBox">
        <el-table :data="tableData.tData" stripe
                  :header-cell-style="headercellstyle"
                  :row-class-name="rowclassname"
                  :header-cell-class-name="headercellclassname"
                  :cell-class-name="cellclassname"
                  :row-style="rowstyle"
                  :cell-style="cellstyle" style="width: 100%"
                  @selection-change="selectionChange">
            <el-table-column v-if="tableData.isMultiple"
                             type="selection"
                             width="55">
            </el-table-column>

            <el-table-column v-if="tableData.isRank" type="index" align="center" width="80" label="序号"
                             :index="numerical">
            </el-table-column>
            <el-table-column v-for="(tit,index) in tableData.tHead"
                             :key="index"
                             :prop="tit.field"
                             :label="tit.name"
                             :width="tit.width?tit.width:''"
                             :formatter="formatter"
                             v-if="!tit.isHide">
            </el-table-column>
            <el-table-column v-if="tableData.actionBtns" label="操作"
                             :width="tableData.actionBtWidth ? tableData.actionBtWidth :'' ">
                <template slot-scope="scope">
                    <template v-for="btn of tableData.actionBtns">
                        <template v-if="btn.filter != undefined && btn.filter != null">
                            <el-button type="text"
                                       v-if="btn.filter.needel.indexOf(scope.row[btn.filter.field])>-1"
                                       @click="allClick(btn.type, scope.row)">
                                <span v-html="btn.label"></span>
                            </el-button>
                            <el-button v-else type="text" style="width:30px">
                                -
                            </el-button>
                        </template>
                        <template v-else>
                            <el-button type="text"
                                       @click="allClick(btn.type, scope.row)">
                                <span v-html="btn.label"></span>
                            </el-button>
                        </template>
                    </template>
                </template>
            </el-table-column>
        </el-table>
        <div class="paginationBox clear">
            <span class="pageTotal fl">共有记录：<span>{{tableData.total}}</span>条</span>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="ajax.data.pageNum"
                :page-sizes="[15, 30, 50, 100]"
                :page-size="ajax.data.pageSize"
                layout="sizes,jumper, prev, pager, next"
                :total="tableData.total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                ajax: this.inAjax,
                tableData: this.inTableData,
                serachFilte: this.inSerachFilte,
                headercellstyle: {background: "rgba(241,241,241,1)", fontSize: "14px", color: "#3A3A3A"},
                cellstyle: {background: "transparent", border: "none", fontSize: "12px"},
                rowstyle: {height: "30px"},

            }
        },
        props: {
            flush: '',
            inSerachFilte: {},
            inAjax: {
                type: Object,
                default: function () {
                    return {
                        url: 'http://192.168.1.21:8080/api/admin/admin/getAdminList',
                        method: "post",
                        data: {
                            pageNum: 1,
                            pageSize: 15
                        },
                    }
                }
            },
            inTableData: {
                type: Object,
                default: function () {
                    return {
                        tHead: [{
                            name: '主键',
                            field: "id",
                            width: 100,
                            isHide: true
                        }, {
                            name: '用户名',
                            field: "username"
                        }, {
                            name: '真实姓名',
                            field: "realname"
                        }, {
                            name: '状态',
                            field: "status"
                        }],
                        tData: [],
                        total: 0,
                        actionBtWidth: "",
                        actionBtns: [
                            {
                                type: 'info',
                                label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>详情</span>",
                                filter: {
                                    field: 'id',
                                    needel: [1, 2, 3, 4, 5]
                                }
                            },
                            {
                                type: 'hulve',
                                label: "<span style='color: #1881BF;font-size: 12px;text-decoration: underline'>忽略</span>"
                            },
                            {
                                type: 'del',
                                label: "<span style='color: #24D330;font-size: 12px;text-decoration: underline'>转为工单</span>",
                                filter: {
                                    field: 'id',
                                    needel: [2, 3, 4, 5]
                                }
                            }
                        ],
                    }
                }
            },
            formatter: {},
            headercellclassname: {},
            cellclassname: {},
        },
        mounted() {
            this.getList();
        },
        methods: {
            numerical(i) {
                return (this.ajax.data.pageNum - 1) * this.ajax.data.pageSize + i + 1;
            },
            getList() {
                let data = Object.assign({}, this.ajax.data, this.serachFilte);

                if (this.ajax.method == "get") {
                    this.$axios.get(this.ajax.url, data).then((res) => {
                        this.tableData.tData = res.data.list;
                        this.tableData.total = res.data.total;
                    }).catch((error) => {
                        console.log(error);
                    })
                }
                if (this.ajax.method == "post") {
                    this.$axios.post(this.ajax.url, data).then((res) => {
                        let data = res.data;
                        if (this.ajax.resData != undefined && this.ajax.resData.length > 0) {
                            for (let key of this.ajax.resData) {
                                data = data[key];
                            }
                        }
                        this.tableData.tData = data.list;
                        this.tableData.total = data.total;
                    }).catch((error) => {
                        console.log(error);
                    })
                }
            },
            allClick(type, row) {
                const outData = {
                    type: type,
                    rowData: row
                };
                this.$emit("rowClick", outData);
                console.log('表格栏点击事件------' + type);
                console.log(row);
            },
            selectionChange(selection) {
                this.$emit("selection", selection);
            },
            handleSizeChange(val) {
                this.ajax.data.pageSize = val;
                this.getList();
            },
            handleCurrentChange(val) {
                this.ajax.data.pageNum = val;
                this.getList();
            },
            rowclassname(row) {
                if ((++row.rowIndex % 2) == 0) {
                    return "rowstylebg";
                }
            },
        },
        watch: {
            inSerachFilte: {
                handler(newData, oldData) {
                    this.serachFilte = newData;
                    this.getList();
                },
                deep: true
            },
            flush: {
                handler(newData, oldData) {
                    this.getList();
                },
            },
        }
    }

</script>
<style scoped>
    .dataTableBox {
        width: 100%;
        height: 100%;
    }
</style>
<style>
    .dataTableBox .rowstylebg {
        background: rgba(247, 251, 252, 1) !important;
    }

    .dataTableBox .fontRed {
        color: #ff4848;
    }

    .dataTableBox .fontGreen {
        color: #36b888;
    }

    .dataTableBox .fontGray {
        color: #a4a4a4;
    }

    .dataTableBox .fontBlack {
        color: #353535;
        font-weight: bold;
    }

    .dataTableBox .pl10 {
        padding-left: 10px;
    }

    .dataTableBox .pl20 {
        padding-left: 20px;
    }

    .dataTableBox .pl30 {
        padding-left: 30px;
    }

    .dataTableBox .pr20 {
        padding-right: 20px;
    }

    .dataTableBox .pr30 {
        padding-right: 30px;
    }

    .dataTableBox .pr40 {
        padding-right: 40px;
    }

    .dataTableBox .el-checkbox__inner {
        width: 15px;
        height: 15px;
        border-color: #a5b3bc;
        border-radius: 0;
    }

    .dataTableBox .el-table::before {
        background: #ccc;
    }

    .dataTableBox .operationTit div {
        padding-left: 27%
    }

    .dataTableBox .operationbts div button {
        font-size: 14px;
        font-weight: bold;
    }

    .el-button + .el-button {
        padding-left: 1.5%;
    }

    .dataTableBox .pageTotal {
        padding-left: 20px;
        height: 31px;
        line-height: 31px;
        font-size: 14px;
        color: #838383;
    }

    .dataTableBox .pageTotal span {
        color: #3a3a3a;
    }

    .el-input__inner {
        border-radius: 15px;
    }

    .dataTableBox .setPagesize .el-input--small .el-input__inner {
        height: 25px;
        line-height: 25px;
    }

    .dataTableBox .setPagesize .el-input__inner {
        border-color: #838383;
    }

    .dataTableBox .paginationBox {
        padding-top: 14px;
        position: relative;
    }

    .dataTableBox .paginationBox .el-pagination {
        float: right;
    }

    .dataTableBox .paginationBox .el-pagination .btn-next .el-icon, .el-pagination .btn-prev .el-icon {
        font-size: 19px;
        position: relative;
        top: -3px
    }

    .dataTableBox .paginationBox .el-pager li {
        margin: 0 8px;
        border-radius: 3px;
        height: 24px;
        line-height: 24px;
        min-width: 20px;
    }

    .dataTableBox .paginationBox .el-pager li.active {
        background: #1881BF !important;
    }

    .dataTableBox .paginationBox .el-pagination__jump {
        margin-right: 20px;
        font-size: 14px;
        color: #838383;
    }

    .dataTableBox .paginationBox .el-pagination__jump .pagination__editor {
        margin-right: 20px;
    }

    .dataTableBox .paginationBox .el-pagination__jump .el-pagination__editor.el-input {
        width: 28px;
    }

    .dataTableBox .paginationBox .el-pagination__jump .el-input__inner {
        box-sizing: border-box;
        width: 100%;
        color: #3A3A3A;
        font-size: 14px;
        border-color: #838383;
        height: 24px;
        line-height: 24px;
        border-radius: 3px;
    }

    .dataTableBox .paginationBox .el-pagination__sizes {
        position: absolute;
        top: 14px;
        left: 150px;
    }

    .dataTableBox .paginationBox .el-pagination .el-select .el-input .el-input__inner {
        border-radius: 15px;
        font-size: 14px;
        border-color: #838383;
    }
</style>
