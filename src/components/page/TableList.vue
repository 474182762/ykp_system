<template>
    <el-table :data="tableData" stripe :cell-class-name="fstyle" style="width: 100%">
        <el-table-column v-for="(tit,index) in tableTit" :key="index" :prop="tit.field" :label="tit.name" :width="tit.width?tit.width:''">
        </el-table-column>
    </el-table>
</template>
<script>
export default {
    data() {
        return {}
    },
    props: {
        tableTit: {
            type: Array,
            default: function() {
                return [{
                    name: '日期',
                    field: "date"
                }, {
                    name: '姓名',
                    field: "name"
                }, {
                    name: '地址',
                    field: "address"
                }]
            }
        },
        tableData: {
            type: Array,
            default: function() {
                return [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        }
    },
    methods: {
        fstyle(i) {
            if (i.columnIndex == 0) {
                return "lee";
            }

        }
    }
}

</script>
<style>
.lee div {
    font-size: 12px;
    color: #252525;
    font-weight: bold;
}

</style>
