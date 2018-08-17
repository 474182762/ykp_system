<template>
    <div class="EnvironmentalMonitoring">
        <div class="area_list">
            <h2>区域选择</h2>
            <el-tree :data="data" :default-expanded-keys="[0, 2]"  node-key="id" :props="defaultProps" class="environment_tree"></el-tree>
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
                        },{
                            label: '四级 2-1-1',
                        }
                        ],
                    },
                    {
                        label: '三级 2-1-1',
                        children: [{
                            label: '四级 2-2-1',
                        },{
                            label: '四级 2-2-2',
                        }
                        ],
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
    margin-bottom: 16px;
}
</style>
<style>
.environment_tree{

}
.environment_tree > .el-tree-node:nth-of-type(n){
    position: relative;
    background:url(../../assets/icon3.png) 11px 0px repeat-y;
}
.environment_tree .el-tree-node .el-tree-node__children{
      background:url(../../assets/icon3.png) 48px 0px repeat-y;
}
.environment_tree .el-tree-node__children > .el-tree-node{
      background:url(../../assets/icon3.png) 68px  0px repeat-y;
}
.environment_tree .el-tree-node:after{
     /* content:'';
    display: block;
    width: 0;
     height: 20px; 
    border:1px dashed #D2D2D2;
    position: absolute;
    left: 11px;
    top: 13px;  */
}
.environment_tree .el-icon-caret-right{
    background-color: #fff;
}
.environment_tree .el-icon-caret-right:before {
    display: block;
    width: 12px;
    height: 12px;
    content:'';
    background:url(../../assets/icon1.png) 0 0 no-repeat;
    background-size: 100% 100%; 
}

.environment_tree .el-tree-node__expand-icon.is-leaf:before{
     background:none;
} 
.environment_tree .el-tree-node__expand-icon.is-leaf{
     background:none;
}
.environment_tree  .is-expanded .expanded:before{
    display: block;
    width: 12px;
    height: 12px;
    content:'';
    background:url(../../assets/icon2.png) 0 0 no-repeat;
    background-size: 100% 100%; 
}
.environment_tree  .el-tree-node__expand-icon.expanded{
        transform: rotate(0deg);
}
.environment_tree .el-tree-node__label{
    /* padding-left:13px; */
    display: block;
    height: 26px;
    line-height: 26px;
     background-color: #fff;
}
.environment_tree .el-tree-node__content:hover,
.environment_tree .el-tree-node:focus>.el-tree-node__content{
    background-color: transparent;
    
}
.environment_tree .el-tree-node>.el-tree-node__children{
    overflow:auto;
}
.environment_tree .el-tree-node__label{
    /* padding-left:13px; */
}
/* .environment_tree .el-tree-node__children .el-tree-node__content >.el-tree-node__label{
      padding-left:6px;  
} */
.environment_tree .el-tree-node__children .is-leaf+ .el-tree-node__label{
    padding-left:20px; 
    position: relative;
}
.environment_tree .el-tree-node__children .is-leaf+ .el-tree-node__label:after{
    content:'';
    display: block;
    width: 27px;
    height: 1px;
    background:url(../../assets/icon4.png) 0 0 repeat-x;
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    left:-9px;
}
</style>
