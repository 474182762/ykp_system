<template>
    <div class="power_content">
        <h2>低压配电系统图 <span v-if="connectStatus=='1'">Opc连接成功</span><span class="error" v-else>Opc连接失败</span></h2>
        <div class="power_info_warp">
            <div class="header_info clearfix">
                <div class="left">{{distributionBranch.powerDescription}}</div>
                <div class="middle">
                    <ul class="clearfix">
                        <li :class='{power_active:item.active,dot:item.alertStatus}' @click='getPowerBranch(item, index)' v-for ='(item, index) in powerNameList' :key = 'index'>{{item.code}}</li>
                    </ul>
                    <div class="title">{{distribution}}低压配电系统图</div>
                </div>
                <ul class="temperature ">
                    <li>室内环境温度：{{distributionBranch.temperature}}</li>
                    <li>相对湿度：{{distributionBranch.humidity}}</li>
                </ul>
            </div>
            <div class="power_info_list" :style="{width:lineWidth+62+'px'}">
                <div class="line" :style="{width:lineWidth-108+'px'}"></div>
                <div class="left_img" ref="left_img">
                    <div class="img_list"><span>1111</span><img src="../../assets/power1.png" alt=""></div>
                    <div class="img_list"><span>2222</span><img src="../../assets/power2.png" alt=""></div>
                    <div class="img_list"><span>3333</span><img src="../../assets/power3.png" alt=""></div>
                    
                    <div class="temperature_list">
                        <ul class="left list">
                            <li v-for="(item,index) in distributionBranch.factors" :key = "index"><span>{{item.name}}</span>{{item.data}}</li>
                        </ul>
                        <ul class="right list">
                            <li v-for="(item,index) in distributionBranch.temperatures" :key = "index"><span>{{item.name}}</span>{{item.data}}</li>
                        </ul>
                    </div>
                </div>
                <ul class="right_img" ref="rightBranch">
                    <li v-for="(item, index) in distributionBranch.branchList" :key='index'>
                        <div class="warp">
                            <div class="img_list" v-for="(ele,index1) in item.branchInfos" :key ='index1'><span>{{ele.branchOrder}}</span><img src="../../assets/power4.png" alt=""></div>
                        </div>
                    </li>
                    
                </ul>
            </div>
            <div class="power_info_table clearfix">
                <dl class="left_power_name">
                    <dt>支路名称</dt>
                    <dd v-for = '(item,index) in left_power_name' :key = 'index'>{{item}}</dd>
                </dl>
                <el-table :data="tableData" style="width: 100%" header-row-class-name = 'table_header'  stripe row-class-name ='table_row'>
                    <!-- <el-table-column  prop="powername" label="我的"></el-table-column> -->
                    <el-table-column v-for="(item,index) in tableHeader" :prop="'powername'+(index+1)" :label="item.branchName" :key = 'index'></el-table-column>
                </el-table>
            </div>
           
        </div>
         <!-- 右下角框 -->
         <div class="fixed_power_list">
             <div class="power_warp">
                <div class="power_info_list " :style="{width:lineWidth+62+'px'}">
                    <div class="line" :style="{width:lineWidth-108+'px'}"></div>
                    <div class="left_img" ref="left_img">
                        <div class="img_list"><span>1111</span><img src="../../assets/power1.png" alt=""></div>
                        <div class="img_list"><span>2222</span><img src="../../assets/power2.png" alt=""></div>
                        <div class="img_list"><span>3333</span><img src="../../assets/power3.png" alt=""></div>
                        
                        <div class="temperature_list">
                            <ul class="left list">
                                <li v-for="(item,index) in distributionBranch.factors" :key = "index"><span>{{item.name}}</span>{{item.data}}</li>
                            </ul>
                            <ul class="right list">
                                <li v-for="(item,index) in distributionBranch.temperatures" :key = "index"><span>{{item.name}}</span>{{item.data}}</li>
                            </ul>
                        </div>
                    </div>
                    <ul class="right_img" ref="rightBranch">
                        <li v-for="(item, index) in distributionBranch.branchList" :key='index'>
                            <div class="warp">
                                <div class="img_list" v-for="(ele,index1) in item.branchInfos" :key ='index1'><span>{{ele.branchOrder}}</span><img src="../../assets/power4.png" alt=""></div>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div class="case"></div>
            <div class="hidden_btn" @click="bottomHidden"><img :src="bottomvalue.src" alt="" width='100%' height="100%"></div>
        </div>
    </div>
</template>

<script>
import ajax  from '../../axios/axios'
import {getDistributionSelection,getDistributionBranch,getBranchParams} from '../../axios/url'
import {distributionSelection,distributionBranch,branchParams} from '../../axios/datalist'

export default { 
    name: 'PowerDistributionMonitoring',
    data(){
        return{
            powerNameList:[
                { name:'1#',active:false,dot:false},
                { name:'2#',active:true,dot:true},
                { name:'3#',active:false,dot:false},
                { name:'4#',active:false,dot:false},
                { name:'5#',active:false,dot:true}
            ],
            distribution:'大商业1-2#',
            lineWidth:'100%',
            connectStatus:'', /*连接状态*/
            left_power_name:[],
            BranchParams:[], /*支路参数列表*/
            tableHeader:[], 

            bottomvalue:{
                src:require('../../assets/bottom1.png'),
                state:true
            },
            distributionBranch:{}, /*支路信息列表*/
            tableData: [
                    {powername1: '325', powername2: '65',  powername3: '-'},
                    {powername1: '2727',powername2: '7272', powername3: '424'},
                    {powername1: '-', powername2: '65',  powername3: '552'},
                    {powername1: '-',powername2: '-', powername3: '424'},
                    {powername1: '-', powername2: '65',  powername3: '552'},
                    {powername1: '2727',powername2: '7272', powername3: '424'},
                    {powername1: '-', powername2: '65',  powername3: '552'},
                    {powername1: '2727',powername2: '7272', powername3: '424'},
                    {powername1: <el-button size="mini" round>用能趋势</el-button>, powername2: <el-button size="mini" round>用能趋势</el-button>,powername3: <el-button size="mini" round>用能趋势</el-button>}
                ]
        }
    },
    mounted(){
        let This = this;
        This.getDistributionSelection();
        // This.tableData[0]
    },
    methods:{
        /*bottom收起与扩展*/
        bottomHidden(){
            let This = this;
            if(This.bottomvalue.state){
                This.bottomvalue.state =false;
                This.bottomvalue.src=require('../../assets/bottom2.png')
            }else{
                 This.bottomvalue.state =true;
                This.bottomvalue.src=require('../../assets/bottom1.png')
            }
        },
        /*切换支路*/
        getPowerBranch(item, index){
            let This = this;
            This.powerNameList.forEach((ele,index)=>{
                ele.active=false;
            })
            item.active=true;
            This.getBranchParamsList(item.id);
            This.getDistributionBranch(item.id);
            This.connectStatus = item.connectStatus;
        },
        /*获取支路参数信息 ?distributionId=1*/
        getBranchParamsList(id){
            let This = this;
            // url:getBranchParams
            ajax.get('http://localhost:8080',{distributionId:id}).then((res) => {
                let code =200;
                if(code==200){
                    This.left_power_name=[];
                    branchParams.data.forEach((item,index)=>{
                        This.left_power_name.push(item.paramName)
                    })
                    This.left_power_name.push('用能趋势')
                    // This.BranchParams = res.data;
                }else{
                     This.$message.error(res.msg);
                }
                // This.BranchParams.forEach((item,index)=>{
                //  This.tableHeader.push(item.branchName);  
                // })
                // console.log(This.tableHeader)
            }).catch((error) => {
                console.log(error);
            });
            
        },
        /*获取支路信息列表 ?distributionId=1*/
        getDistributionBranch(id){
            let This= this;
            // url:distributionBranch
            ajax.get('http://localhost:8080',{distributionId:id}).then((res) => {
                let code =200
                let oTimer = null;
                   
                if(code==200){
                     
                    This.distributionBranch = distributionBranch.data;
                    clearTimeout(oTimer)
                    oTimer=setTimeout(function(){
                        This.lineWidth = This.$refs.left_img.offsetWidth+This.$refs.rightBranch.offsetWidth
                    },100)
                    This.tableHeader =[];
                    distributionBranch.data.branchList.forEach((item)=>{
                        item.branchInfos.forEach((ele)=>{
                            This.tableHeader.push(ele)
                        })
                    })
                    // This.distributionBranch = res.data;
                }else{
                    This.$message.error(res.msg);
                }
            }).catch((error) => {
                console.log(error);
            });
        },
        /*获取配电箱列表 ?pmId=1*/
        getDistributionSelection(){
            let This = this;
            // url:getDistributionSelection
            ajax.get('http://localhost:8080',{pmId:1}).then((res) => {
                let code = 200;
                //res.code
                if(code==200){ 
                    distributionSelection.data.forEach((item,index)=>{
                        if(index==0){
                            item.active = true;
                            This.distribution=item.name;
                            This.getBranchParamsList(item.id);
                            This.getDistributionBranch(item.id);
                            This.connectStatus = item.connectStatus  
                        }else{
                            item.active = false;
                        }
                        if(item.alertStatus){
                            item.alertStatus = true
                        }else{
                            item.alertStatus = false
                        }
                    })
                    
                    This.powerNameList = distributionSelection.data;
                    // This.powerNameList = res.data;
                }else{
                    This.$message.error(res.msg);
                }
            }).catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>
<style scoped>

    .power_content{
    }
    .power_content h2{
        width: 100%;
        padding: 0 25px;
        height: 36px;
        line-height: 36px;
        color:#2274A4;
        font-size:16px;
        background:rgba(245,249,249,1);
        border: 1px solid #E5EEF3;
    }
    .power_content h2 span{
        color: #3A3A3A;
        float: right;
        font-size:16px;
        position: relative;
    }
    .power_content h2 span:after{
        content: '';
        display: block;
        width:14px;
        height:14px;
        background:rgba(75,196,132,1);
        border-radius: 50%;
        position: absolute;
        top:50%;
        margin-top: -7px;
        left: -18px;
    }
     .power_content h2 .error:after{
         background:#E76666;
     }
    .power_info_warp{
        width: 100%;
        height: 100%;
        background: #ffffff;
        padding: 20px 24px;
        overflow-x: hidden;
    }
    .power_info_warp .header_info{
        position: relative;
        margin-bottom: 5px;
    }
    .power_info_warp .header_info .left{
        width:134px;
        height:41px;
        font-size:12px;
        color:rgba(103,103,103,1);
        line-height:14px;
        float: left;
    }
     .power_info_warp .header_info  .middle{
         max-width: 424px;
         margin:  0 auto;
     }
     .header_info .middle ul{
        background:#fefefc;
        border-radius:14px;
        float: left;
        /* border:1px solid #CBD0DC; */
     }
     .header_info .middle .title{
        float: left;
        height: 30px;
        line-height: 30px;
        color: #3A3A3A;
        font-size: 16px;
        margin-left: 16px;
     }
     /* .header_info .middle ul li:nth-of-type(1){
     } */
     .header_info .middle ul li{
         min-width: 40px;
         height: 28px;
         line-height: 28px;
         padding: 0 6px;
        text-align: center; 
         float: left;
         color:#65676B;
         font-size: 14;
         border-left:1px solid #CBD0DC;
         border-top:1px solid #CBD0DC;
         border-bottom:1px solid #CBD0DC;
         position: relative;
         cursor: pointer;
     }
     .header_info .middle ul .dot{
          padding: 0 6px 0 14px;
          text-align: left; 
     }
     .header_info .middle ul .dot:after{
        content: '';
        display: block;
        width:6px;
        height:6px;
        background:#D16062;
        border-radius: 50%;
        position: absolute;
        top:50%;
        margin-top: -3px;
        left: 5px;
     }
     .header_info .middle ul li:first-child{
          border-radius:14px 0 0 14px 
     }
     .header_info .middle ul li:last-child{
         border-right: none;
         border-radius:0 14px 14px 0;
     }
    .header_info .middle .power_active{
        background:#1881BF;
        color:#fff;
        border-color: #1881BF;
    }
    .header_info .temperature{
        position: absolute;
        right: 0px;
        top:86px;
        display: box;
        display: -webkit-box;
        display: flex;
        font-size: 12px;
        color:#676767;
        
    }
    .header_info .temperature li{
        margin-right: 27px;
    }
    /*配电箱图例信息*/
    .power_info_list{
        width: 300000px;
        display: box;
        display: -webkit-box;
        display: flex;
        padding:4px 10px 22px 30px;
        position: relative;
        left:0px;
    }
    .power_info_list .line{
        width: 100%;
        height:5px;
        background:rgba(112,112,112,1);
        position: absolute;
        top: 76px;
        left: 148px;
    }
   
    .power_info_list .left_img{
        position: relative;
        display: box;
        display: -webkit-box;
        display: flex; 
    }
    .power_info_list .left_img .img_list{
        position: relative;
    }
    .power_info_list .left_img .img_list span{
        display: block;
        width: 56px;
        height: 17px;
        font-size:12px;
        color:rgba(58,58,58,1);
        text-align: center;
        line-height: 17px;
         background-color: #F6DCC9;
        border:1px solid #E76666; 
        position: absolute;
        top: 126px;
        left: 2px;
        z-index: 2;
    }
    .power_info_list .left_img .img_list:nth-of-type(1) span{
        left: 150px;
    }
    .power_info_list .left_img .img_list:nth-of-type(2) span{
        left: 27px;
    }
    .power_info_list .left_img .img_list:nth-of-type(3) span{
        left: 12px;
    }
    .power_info_list .left_img .img_list:nth-of-type(2) img{
        margin-top:126px;
    }
    .power_info_list .left_img .img_list:nth-of-type(3) img{
        margin-top:38px;
    }
    .power_info_list .left_img .temperature_list{
        display: box;
        display: -webkit-box;
        display: flex;
        position: absolute;
        top:0px;
        right:70px;
    }
    
    .power_info_list .temperature_list .list{
        margin-right: 6px;
    }
    .power_info_list .temperature_list .list li{
        min-width: 98px;
        border-radius: 7px;
        padding-right: 4px;
        border: 1px solid #E76666;
        margin-bottom: 5px;
        color: #474747;
        font-size: 10px;
        overflow: hidden;
    }
    .power_info_list .temperature_list .list li span{
        background-color: #E76666;
        padding: 2px 4px;
        color: #fff;
        margin-right: 10px;
    }
    .power_info_list .right_img{
        position: relative;
        margin-left: 20px;
        display: box;
        display: -webkit-box;
        display: flex;
    }
    .power_info_list .right_img li{
        /* width:230px; */
        /* position: absolute;
        bottom:7px; */
        padding:7px;
        border:1px solid #92BAD1;
        margin: 100px 3px 0 3px;
    }
    .power_info_list .right_img .warp{
        border-top:3px solid #707070;
        position: relative;
        display: box;
        display: -webkit-box;
        display: flex;
    }
    .power_info_list .right_img .img_list{
        position: relative;
    }
    .power_info_list .right_img .img_list span{
        display: block;
        width: 56px;
        height: 17px;
        font-size:12px;
        color:rgba(58,58,58,1);
        text-align: center;
        line-height: 17px;
        background-color: #F6DCC9;
        border:1px solid #E76666;
        position: absolute;
        top: 15px;
        left: 2px;
        z-index: 2;
    }
    .power_info_list .right_img .warp:after{
        content: '';
        display: block;
        width:2px;
        height:38px;
        background: #707070;
        position: absolute;
        left:50%;
        /* transform: translateX(-50%); */
        margin-left: -4px;
        top:-38px;
        z-index: 22;
    }
    .power_info_list .right_img li img{
        display: block;
        padding: 0 2px;
        position: relative;
    }
    .power_info_list .right_img li img::before{
        content: '';
        display: block;
        width:28px;
        height:3px;
        background: red;
        position: absolute;
        left:0;
        top:0;
        z-index: 222;
    }

    /*支路信息*/
    .power_info_table{
        display: box;
        display: -webkit-box;
    }
    .power_info_table .left_power_name{
        width:99px;
        color:#252525;
        font-size: 12px;
        border-radius:3px 3px 0px 0px;
        border:1px solid #DADADA;
        text-align: center;
        margin:0 13px 0 46px;
        background:rgba(247,251,252,1);
    }
    .power_info_table .left_power_name dt{
        height:34px;
        line-height: 34px;
        background:rgba(241,241,241,1);
        border-radius:3px 3px 0px 0px;
    }
    .power_info_table .left_power_name dd{
         height:28px;
         line-height: 28px;
       
    }
    .power_info_table .el-button--mini{
            padding: 4px 9px;
    }
    /*右下角狂*/
    .fixed_power_list{
        width: 400px;
        height: 210px;;
        position: fixed;
        right:20px;
        bottom: 10px;
        z-index: 22;
        background-color: #fff;
        cursor: pointer;
    }
    .fixed_power_list .power_warp {
        width:100% !important;
        height: 120px !important;
        transform: scale(0.28,0.3);
        position: absolute;
        left: -100px; 
    }
    .fixed_power_list .case{
        width: 320px;
        height: 139px;
        border:1px solid #3FBC7A;
        position: absolute;
        left:20px;
        top: 28px;
        z-index: 23;
    }
    .fixed_power_list .hidden_btn{
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background-color: #3FBC7A;
         position: absolute;
        right:10px;
        bottom: 10px;
        z-index: 23;
    }
 </style>
 <style>
    .power_info_table .table_header{
        height:34px;
        line-height: 34px;
        font-size:12px;
        color:#3A3A3A;
    }
    .power_info_table .table_header th{
          background:#F1F1F1;
          padding:0;
          text-align: center;
    }
     .power_info_table .table_row td{
         color:#252525;
         font-size: 12px;
         padding:3px 0 2px;
        text-align: center;
     }
 </style>





 




