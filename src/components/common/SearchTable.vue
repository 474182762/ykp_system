<template>
    <div class="searchtableBox">
        <div class="searchtoolBox clear">

            <div class="batchtoignore">
                <div><i class="el-icon-info"></i>批量忽略</div>
            </div>
        </div>
        <div class="container">
            <DataTable></DataTable>
        </div>
    </div>
</template>
<script>
    import DataTable from "../../components/common/DataTable"
export default {
    name: 'basetable',
    components: {
        DataTable
    },
    props: {
        searTool: {
            type: Object,
            default: function () {
                return {
                    generalSearch:true
                }
            }
        },
     },
    data() {
        return {
            pickerOptions2: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            value7:"",

        }
    },
    created() {

    },
    computed: {

    },
    methods: {
    }
}

</script>
<style scoped>
    .searchtableBox{

    }
    .searchtoolBox{

        padding-bottom: 24px;
        padding-left: 27px;
        padding-right: 38px;
        font-size: 16px;
    }
    .generalSearch{
        font-size: 14px;
        padding-top: 24px;
        margin-right: 20px;
    }
    .generalSearch div{
        border: 1px #828282 solid;
        line-height: 24px;
        height: 24px;
        border-radius: 15px;
        overflow: hidden;
    }
    .generalSearch span{
        display: inline-block;
        height: 100%;
        color: #3a3a3a;
        font-weight: bold;
        line-height: 26px;
    }
    .generalSearch input{
        border: none;
        float: left;
        height: 24px;
        width: 205px;
    }
    .generalSearch button{
        background: #FFF;
        float: left;
        width: 30px;
        height: 24px;
        outline: none;
        font-weight: bold;
        border:none;
        border-left: 1px #ccc solid;
    }
    .generalSearch button i{
        font-weight: bold;
    }

    .searchItem{
        height: 24px ;
        line-height: 24px;
        font-size: 14px;
        padding-top: 24px;
        float: left;
        margin-right: 45px;
    }
    .searchItem span{
        display: inline-block;
        color: #838383;
        font-weight: bold;
        height: 24px;
        line-height: 24px;
    }
    .searchItem select{
        height: 24px;
        line-height: 24px;
        border: 1px #838383 solid;
        font-size: 14px;
        font-weight: bold;
        border-radius: 15px;
        color: #3A3A3A;
        padding: 0 5px 0 13px;
    }
    .submitSearch button i{margin-right: 5px}
    .submitSearch{
        float: left;
        padding-top: 24px;
    }
    .submitSearch button {
        cursor: pointer;
        display: inline-block;
        height: 24px;
        line-height: 24px;
        padding: 0 15px 0 12px;
        font-size: 14px;
        color: #fff;
        border-radius: 15px;
        outline: none;
        border: none;
        background: #1683be;
    }
    .searchtableBox .batchtoignore div i{margin-right: 10px}
    .searchtableBox .batchtoignore{
        float: right;
        padding-top: 24px;
    }
    .searchtableBox .batchtoignore div{
        cursor: pointer;
        display: inline-block;
        height: 24px;
        line-height: 24px;
        padding: 0 15px 0 12px;
        font-size: 14px;
        color: #fff;
        border-radius: 15px;
        outline: none;
        border: none;
        background: #1881BF;
    }
    .container{
        border: none;
        padding: 5px 30px 30px 30px;
    }


</style>
<style>
    .el-range-editor--small.el-input__inner{
        height: 24px;
    }
    .el-range-editor--small.el-input__inner{
        line-height: 17px;
    }
    .el-range-editor--small .el-range-separator{
        line-height: 16px;
    }
    .el-input__inner{
        border-color: #838383;
    }
</style>
