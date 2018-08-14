<template>
    <div class="PopupPage">
        <el-button type="text" style="background:#1881BF;width:84px;height:24px;line-height:24px;border-radius:15px;color:#fff;position: absolute;top:5px;right:10px;" @click="centerDialogVisible = true"><span class="quotaset"><i class="el-icon-edit-outline"></i>定额设置</span></el-button>
        <el-dialog title="口腔门外定额详情" :visible.sync="centerDialogVisible" width="957px" :before-close="handleClose" center>
            <div class="quotatool clear">
                <div class="leftItemBox fl">定额时间 :
                    <select name="" id="">
                        <option value="">2018</option>
                    </select>
                </div>
                <div class="rightItemBox fr clear">
                    <span style="border-right: 1px #1881BF solid" class="fl"><i class="el-icon-download"></i>导入定额</span>
                    <span class="fr"><i class="el-icon-upload2"></i>导出定额</span>
                </div>
            </div>
            <div class="quotaSetList">
                <el-table
                    :data="tableData"
                    stripe
                    :cell-class-name="fstyle"
                    @cell-dblclick="doublecl"
                    style="width: 100%">
                    <el-table-column v-for="(tit,index) in tableTit" :key="index"
                                     :prop="tit.field"
                                     :label="tit.name"
                                     :width="tit.width?tit.width:''">
                    </el-table-column>
                </el-table>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="saveSet">保 存</el-button>
                <el-button @click="cancelClose">取 消</el-button>
            </span>
            <span style="position: absolute;bottom: 26px;right: 26px;color: #D16062">* 双击数字可修改定额</span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        name: 'popupbox',
        components: {

        },
        data() {
            return {
                centerDialogVisible: this.isPopupShow,
                dialogVisible: false
            }
        },
        props: {
            isPopupShow: {
                type: Boolean,
                default: false
            },
            tableTit: {
                type: Array,
                default: function() {
                    return []
                }
            },
            tableData: {
                type: Array,
                default: function() {
                    return []
                }
            }
        },
        methods: {
            handleClose(done) {
                this.$confirm('确认关闭吗？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            cancelClose() {
                this.$confirm('确认取消吗？')
                    .then(_ => {
                        this.centerDialogVisible = false;
                    })
                    .catch(_ => {});
            },
            saveSet() {
                this.$confirm('确认保存吗？')
                    .then(_ => {
                        let data = document.querySelectorAll(".quotaSetList tbody tr");
                        let postData = {
                            electricity: [],
                            water: [],
                            air: []
                        }
                        let dateName = ["electricity", "water", "air"]
                        data.forEach(function(v, i) {
                            v.childNodes.forEach(function(val, index) {
                                if (index != 0 && index != 13) {
                                    postData[dateName[i]].push(val.firstChild.innerHTML)
                                }
                            })
                        })
                        this.$emit("posdata", postData)
                        this.centerDialogVisible = false;
                    })
                    .catch(_ => {});
            },
            doublecl(row, column, cell, event) {
                if (column.label != "月份" && column.label != "合计") {
                    let value_event = cell.firstChild.innerHTML
                    let cellInput = document.createElement("input");
                    cellInput.value = value_event;
                    cellInput.setAttribute("class", "input_sty")
                    cellInput.setAttribute("type", "text");
                    cellInput.style.border = 'none';
                    cellInput.style.outline = 'none';
                    cellInput.style.textAlign = 'center';
                    cellInput.style.textDecoration = 'underline';
                    cellInput.style.width = "100%";
                    cellInput.style.height = "100%";
                    cellInput.style.position = "absolute";
                    cellInput.style.top = "0";
                    cellInput.style.left = "0";
                    var cellabc = cell
                    console.log(cellabc);
                    cellabc.appendChild(cellInput);
                    cellInput.focus()
                    cellInput.onblur = function() {
                        cell.removeChild(cellInput);
                        cell.firstChild.innerHTML = cellInput.value;
                        let data = cell.parentNode;
                        let total = 0;

                        data.childNodes.forEach(function(val, index) {
                                  if (index != 0 && index != 13) {
                                      total += parseInt(val.firstChild.innerHTML);
                                  }
                              })


                        data.childNodes[13].firstChild.innerHTML = total;


                    };
                }
            },
            fstyle(i) {
                if (i.columnIndex == 0) {
                    return "lee";
                }

            }
        },
        watch:{
            isPopupShow:{
                handler:function (newval, oldval) {
                    this.centerDialogVisible = newval;
                }
            },
            deep: true
        }

    }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .PopupPage {}

    .PopupPage .quotaset {
        position: relative;
        top: -2px;
        font-size: 12px;
    }

    .PopupPage .el-dialog__title {
        color: #fff;
    }

    .PopupPage .el-dialog__header {
        color: #fff;
        background: #1881BF;
        padding: 0;
        height: 36px;
        line-height: 36px;
        text-align: left;
        padding-left: 30px;
    }

    .PopupPage .el-dialog__headerbtn {
        top: 11px;
    }

    .PopupPage .el-dialog__headerbtn i {
        color: #fff;
    }

    .PopupPage .el-dialog__headerbtn:hover i {
        color: #fff;
    }

    .PopupPage .quotatool .leftItemBox {
        color: #3A3A3A;
        font-size: 14px;
    }

    .PopupPage .quotatool .leftItemBox select {
        border: 1px #1881BF solid;
        width: 80px;
        height: 24px;
        border-radius: 15px;
        padding-left: 10px;
        color: #1881BF;
        font-size: 14px;
        outline: none;
        cursor: pointer;
    }

    .PopupPage .quotatool .rightItemBox span {
        width: 49%;
        display: block;
        padding-left: 10px;
        box-sizing: border-box;
        cursor: pointer;
    }

    .PopupPage .quotatool .rightItemBox {
        width: 200px;
        border: 1px #1881BF solid;
        border-radius: 15px;
        color: #1881BF;
        font-size: 15px;
    }

    .el-table td,
    .el-table th.is-leaf {
        border: none;
    }

    .el-table td {
        font-size: 12px;
        color: #838383;
        position: relative;
    }

    .el-table th.is-leaf {
        background: rgba(241, 241, 241, 1);
        font-size: 14px;
        font-weight: normal;
        color: #252525;
    }

    .PopupPage .quotaSetList {
        padding-top: 50px;
    }

    .PopupPage .el-table .cell {
        padding-left: 0;
        padding-right: 0;
        text-align: center;
    }

    .PopupPage .lee div {
        font-size: 12px;
        color: #252525;
        font-weight: bold;
        text-align: left !important;
        padding-left: 20px !important;
    }

    .PopupPage .el-button--small {
        padding: 0;
        height: 24px;
        width: 79px;
        line-height: 23px;
        border-radius: 15px;
        font-size: 14px;
    }

    .PopupPage .el-button+.el-button {
        margin-left: 46px;
    }

</style>
