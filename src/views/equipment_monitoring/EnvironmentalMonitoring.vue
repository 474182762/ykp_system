<template>
    <div class="EnvironmentalMonitoring">
        <div class="area_list">
            <h2>区域选择</h2>
            <el-tree :data="data" :default-expanded-keys="[2, 4]" :props="defaultProps"></el-tree>
        </div>
        <div class="home_info">
            
        </div>
    </div>
</template>




<script>
export default { 
    name: 'PowerDistributionMonitoring',
    data(){
        return {
            data: [{
                label: '一级 1',
                children: [{
                    label: '二级 1-1',
                    children: [{
                        label: '三级 1-1-1',
                        children: [{
                            label: '四级 1-1-1',
                        }],
                        children: [{
                            label: '四级 2-1-1',
                        }]
                    }]
                }]
                },{
                label: '一级 2',
                children: [{
                    label: '二级 2-1',
                    children: [{
                    label: '三级 2-1-1'
                    }]
                }, {
                    label: '二级 2-2',
                    children: [{
                    label: '三级 2-2-1'
                    }]
                }]
                }, {
                label: '一级 3',
                children: [{
                    label: '二级 3-1',
                    children: [{
                    label: '三级 3-1-1'
                    }]
                }, {
                    label: '二级 3-2',
                    children: [{
                    label: '三级 3-2-1'
                    }]
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    },
    mounted(){
        let This = this;
        console.log(ajax)
    },
    methods:{

    }
}

</script>

<style scoped>
.EnvironmentalMonitoring{

}
.EnvironmentalMonitoring .area_list{
    width: 295px;
    background: #fff;
    padding: 20px
}
.area_list h2{
    font-size: 16px;
    color:#2274A4;
}


</style>
