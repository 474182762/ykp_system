<template>
    <div class="EnvironmentalMonitoring">
        <div class="area_list">
            <h2>区域选择</h2>
            <el-tree :data="data" :default-expanded-keys="[0, 2]"  node-key="id" :props="defaultProps" class="environment_tree"></el-tree>
            <!-- <el-tree :data="regionTree" :default-expanded-keys="[0, 2]"  node-key="id" :props="defaultProps" class="environment_tree"></el-tree> -->
        </div>
        <div class="home_info">
            <h2>环境监测</h2>
            <div class="home_warp">
                <h3 @click = 'homeDialog'>住院部北楼1F</h3>
                <ul class=home_state>
                    <li>正常</li>
                    <li>异常</li>
                </ul>
                <div class="home_image" id="home_image">
                    <img src="../../assets/home.png" alt="">
                </div>
            </div>
        </div>

        <el-dialog :visible.sync="dialogTableVisible" title="116号房间逐时曲线" class="environment_dialog" width='66%'>
            <div class="dialog_info_list">
               <el-form :inline="true" :model="formInline" class="home_from">
                    <el-form-item label="参数选择：">
                        <el-select v-model="formInline.paramType" placeholder="选择类型" size='small'>
                            <el-option v-for="(item) in MonitorParamTypes" :label="item.name" :value="item.code" :key="item.code"></el-option> 
                        </el-select>
                    </el-form-item>
                    <el-form-item label="时间粒度：">
                        <el-select v-model="formInline.timeUnit" placeholder="选择时间" size='small'> 
                            <el-option label="时" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="活动时间">
                        <el-col :span="11">
                            <el-date-picker v-model="formInline.startTime" value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="选择日期时间" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">至</el-col>
                        <el-col :span="11">
                            <el-date-picker v-model="formInline.endTime" type="datetime" placeholder="选择日期时间" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size='mini' @click="onDataSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
                <div class="home_chart" ref="homeChart" id = "home_chart"></div>
            </div>
        </el-dialog>
    </div>
</template>




<script>
 var echarts = require('echarts');
 import ajax  from '../../axios/axios'
 import {getMonitorParamTypes} from '../../axios/url'
 import {environmentParams,chartData} from '../../axios/datalist'
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
            },
            formInline: {
                paramType: '',
                timeUnit:'',
                startTime: '',
                endTime: ''
            },
            MonitorParamTypes:null,/*参数列表*/
            MonitorChartData:null,
            dialogTableVisible: false
        }
    },
    mounted(){
        let This = this;
        This.getRegionTree()
        This.getEnvironmentParams()
    },
    methods:{
        /*获取参数列表*/
        getEnvironmentParams(){
            let This = this;
             ajax.get('http://localhost:8080').then((res) => {
                let code = 200;
                if(code==200){
                  This.MonitorParamTypes = environmentParams.data
                }else{
                     This.$message.error(res.msg);
                }

             })
        },
        homeDialog(){
            let This = this;
            let oTimer = null;
            This.dialogTableVisible = true;
            clearTimeout(oTimer)
            /*初始状态曲线数据*/
            let Xdata =[];
            let Ydata = [];
         
            chartData.data.forEach((item,index)=> {
                Xdata.push(item.time);
                Ydata.push(item.value);
            });
            oTimer=setTimeout(function() {
                This.getHomeLine(Xdata,Ydata);
            }, 200);
          
        },
        getHomeLine(xdata,ydata){
            let This = this;
            let home_chart = document.getElementById('home_chart');
            console.log(this.$refs.homeChart)
            let myChart = echarts.init(home_chart)
            let option = {
                title: {
                    text: 'CO2浓度逐时曲线',
                    left: 'center'
                },
                xAxis: {
                    type: 'category',
                    name : '时',
                    axisLine:{
                        lineStyle:{
                            color:'rgba(241,241,241,1)',
                            width:1
                        }
                    },
                    nameTextStyle:{
                        color:'rgba(58,58,58,1)',
                        fontSize:14
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: 'rgba(58,58,58,1)'
                        },
                        fontSize:14
                    },
                    axisTick: {
                        alignWithLabel: true
                    },
                    data: xdata
                },
                yAxis: {
                    type: 'value',
                    name : 'kWh',
                    axisLine:{
                        lineStyle:{
                            color:'rgba(241,241,241,1)',
                            width:1,
                        }
                    },
                    nameTextStyle:{
                        color:'rgba(58,58,58,1)',
                        fontSize:14
                        // align:'left'
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: 'rgba(58,58,58,1)'
                        },
                        fontSize:14
                    }
                },
                series: [{
                    data: ydata,
                    type: 'line',
                    smooth: true,
                    lineStyle:{
                        color:'rgba(236,21,255,1)'
                    }
                }]
            };
            myChart.setOption(option)
            
        },
        getRegionTree(){
            let This = this;
            let config = {
                    method: 'GET',
                    url: '/api/admin/monitor/getRegionTree',
                    data: {
                        pmId: 1,
                    },
                };
            This.$axios.ajax(config).then((res) => {
        
                if(res.code==200){

                    This.regionTree = res.data
                    console.log(This.regionTree)
                }else{

                    This.$message.error(res.msg);
                }
                 
            })
        },
        /*数据提交*/
        onDataSubmit(){
            let This = this;
             let oTimer = null;
            console.log(This.formInline)
             ajax.get('http://localhost:8080').then((res) => {
                let code = 200;
                if(code==200){
                    let Xdata =[];
                    let Ydata = [];
                    clearTimeout(oTimer)
                    chartData.data.forEach((item,index)=> {
                        Xdata.push(item.time-1);
                        Ydata.push(item.value-20);
                    });
                    This.getHomeLine(Xdata,Ydata)
                //   This.MonitorChartData = chartData.data
                //   console.log(chartData.data)
                }else{
                     This.$message.error(res.msg);
                }

             })
        }
    }
}

</script>

<style scoped>
.dialog_info_list .home_chart{
    width: 100%;
    height: 550px;
}
.dialog_info_list .home_from{
    text-align: center;
}
.EnvironmentalMonitoring{
    display: box;
    display: -webkit-box;
    display: flex;
}
.EnvironmentalMonitoring .home_info{
    box-flex:1;
    flex: 1;
    -webkit-box-flex: 1;
    background-color: #fff;
    margin-left: 12px;
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
.EnvironmentalMonitoring .home_info h2{
    font-size: 16px;
    color:#2274A4;
    height:36px;
    line-height: 36px;
    background:rgba(245,249,249,1);
    padding-left: 34px;
}
.home_info .home_warp {
    padding: 27px;
}
.home_info .home_warp h3{
    text-align: center;
    font-size: 20px;
    color:#3a3a3a;
    font-weight: normal;
}
.home_info .home_warp .home_state{
    display: box;
    display: -webkit-box;
    display: flex;
}
.home_warp .home_state li{
    color: #3a3a3a;
    font-size: 14px;
    margin-left: 40px;
    position: relative;
    left:60%;
}
.home_warp .home_state li:after{
    content:'';
    display: block;
    width:12px;
    height:12px;
    border-radius: 50%;
    position: absolute;
    top:50%;
    left:-20px;
    transform: translateY(-50%);
    background-color: #4BC484; 
}
.home_warp .home_state li:last-child:after{
    background-color: #F57272; 
}
.home_warp .home_image{
    margin-top: 34px;
}
</style>
<style>
.environment_dialog .el-dialog{
    min-width:960px;
}
.environment_dialog .el-dialog__header {
    padding: 0;
    height: 40px;
    line-height: 40px;
    background: rgba(24,129,191,1);
    /* border-radius: 5px 5px 0px 0px; */
    padding-left: 29px;
    position: relative;
}
.environment_dialog .el-dialog__header .el-dialog__title {
    color: #fff;
    font-size: 16px;
}
.environment_dialog .el-dialog__header  .el-dialog__headerbtn{
    top:50%;
    transform: translateY(-50%);
 
}
.environment_dialog  .el-dialog__headerbtn .el-dialog__close{
    font-size: 12px;
    color:#fff;
    cursor: pointer;
    padding:2px;
    border:1px solid #fff;
    border-radius:50%;
}
.environment_dialog .el-select{
    width: 90px;
}

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
