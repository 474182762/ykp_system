<style>


</style>
<template>
    <div>
        <div class="table">
            <el-table :data="tableData" style="width: 100%;text-align: center;" stripe :header-cell-style="{background:'#f1f1f1',textAlign:'center'}">
                <el-table-column v-for="(item,index) in tableKey" :key="index" :prop="item.name" :label="item.value"></el-table-column>
            </el-table>
        </div>
        <div class="pagination">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentPage: 1,
            tableData: [{
                id: '12987122',
                name: '实际能耗（kWh）',
                amount1: '234',
                amount2: '3.2',
                amount3: 10
            }, {
                id: '12987123',
                name: '能耗基准（kWh）',
                amount1: '165',
                amount2: '4.43',
                amount3: 12
            }, {
                id: '12987124',
                name: '节能量（kWh）',
                amount1: '324',
                amount2: '1.9',
                amount3: 9
            }, {
                id: '12987125',
                name: '可用率',
                amount1: '621',
                amount2: '2.2',
                amount3: 17
            }, {
                id: '12987125',
                name: '可挖掘率',
                amount1: '621',
                amount2: '2.2',
                amount3: 17
            }],
            tableKey: [{
                    name: 'name',
                    value: '名称',
                },
                {
                    name: 'id',
                    value: '1月',
                },
                {
                    name: 'amount1',
                    value: '2月',
                },
                {
                    name: 'amount2',
                    value: '3月',
                },
                {
                    name: 'amount3',
                    value: '4月',
                },
                {
                    name: 'amount1',
                    value: '5月',
                },
                {
                    name: 'amount2',
                    value: '6月',
                },
                {
                    name: 'amount3',
                    value: '7月',
                },
                {
                    name: 'id',
                    value: '8月',
                }
            ]
        }
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
}

</script>
