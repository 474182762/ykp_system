<template>
    <el-table :data="tableData" style="width: 100%" stripe size="mini" :header-cell-style="{background:'#f1f1f1'}" :cell-style="cell">
        <el-table-column prop="name" :label="sectionName" width="150">
        </el-table-column>
        <el-table-column prop="id" :label="ActualEnergy" width="140">
        </el-table-column>
        <el-table-column prop="amount3" :label="QuotaPoor" width="100" sortable>
        </el-table-column>
        <el-table-column prop="amount1" :label="percentage" width="120" sortable>
        </el-table-column>
        <el-table-column prop="amount2" :label="basis" width="120" sortable>
        </el-table-column>
        <el-table-column prop="amount3" :label="chain" width="120" sortable>
        </el-table-column>
    </el-table>
</template>
<script>
export default {
    data() {
        return {
            sectionName: '名称',
            ActualEnergy: '实际能耗（kWh）',
            QuotaPoor: '定额差',
            percentage: '百分比',
            basis: '同比',
            chain: '环比',
            tableData: [{
                id: '12987122',
                name: '口腔医院',
                amount1: '234',
                amount2: '3.2',
                amount3: 10
            }, {
                id: '12987123',
                name: '口腔医院',
                amount1: '165',
                amount2: '4.43',
                amount3: 12
            }, {
                id: '12987124',
                name: '口腔医院',
                amount1: '324',
                amount2: '1.9',
                amount3: 9
            }, {
                id: '12987125',
                name: '口腔医院',
                amount1: '621',
                amount2: '2.2',
                amount3: 17
            }, {
                id: '12987125',
                name: '口腔医院',
                amount1: '621',
                amount2: '2.2',
                amount3: 17
            }, {
                id: '12987125',
                name: '口腔医院',
                amount1: '621',
                amount2: '2.2',
                amount3: 17
            }, {
                id: '12987126',
                name: '口腔医院',
                amount1: '539',
                amount2: '4.1',
                amount3: 15
            }]
        }
    },
    methods: {
        cell(row, column, rowIndex, columnIndex) {

            if (row.columnIndex == 2) {
                return 'background:#EEFCFF'
            }
            if (row.rowIndex == 0) {
                return 'height:30px'
            }
        }

    }
}

</script>
<style>
.el-table__header-wrapper {
    height: 40px !important;
    color: red;
}

</style>
