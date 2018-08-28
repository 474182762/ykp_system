<template>
    <div class="metermon_content">
        <h2>表计读数</h2>
        <div class="metermon_info">
            <div class="info_list_warp">
                <ul class="left">
                    <li>正常</li>
                    <li>中断</li>
                </ul>
                <ul class="right">
                    <li>在线率10%以下</li>
                    <li>在线率10%~20%</li>
                    <li>在线率20%~80%</li>
                    <li>在线率80%~90%</li>
                    <li>在线率90%以上</li>
                </ul>
            </div>
            <div class="metermon_list_img">
                <div class="top_img">
                    <img src="../../assets/meter2.png" alt="">
                    <!-- <div class="line" v-if="meterMonitor.length==1" :class="'line'+(index+1)" :style="{left:'50%'}" ></div> -->
                    <div class="line" :class="'line'+(index+1)" :style="{left:((2*index+1)/(2*meterMonitor.length))*100+'%'}" v-for='(item , index) in meterMonitor' :key = 'index'></div>
                </div>
                <div class="metermon_warp">
                     <div class="metermon_left" :class="'metermon_left'+index" :style="{left:index==0?0+'px':(item.coms.length*274)*(index)+'px'}" v-for='(item,index) in meterMonitor' :key='item.collectorId'>
                        <div class="left_top">
                            <span>{{item.collectorCode}}#</span>
                            <img src="../../assets/meter1.png" alt="">   
                            <div class="line" :class="'line_'+(index1+1)" :style="{left:((2*index1+1)/(2*item.coms.length))*100+'%'}"  v-for="(ele,index1) in item.coms" :key='ele.comId'></div>
                        </div>
                        <div class="left_list_warp" :style="{width:item.coms.length*274+'px'}">
                             <dl :class="'list'+(index1+1)" class="left_list" v-for="(ele,index1) in item.coms" :key='ele.comId' >
                                <dt>{{ele.comName}}<br/>电表</dt>
                                  <dd v-for="(item2) in ele.branches" :key='item2.branchId'>
                                    <div class="home_num home">{{item2.branchValue}}</div>
                                    <div class="home_percent home">{{item2.onlineRate}}%</div>
                                    <div class="home_info">{{item2.branchName}}</div>
                                </dd>  
                            </dl> 
                            <!-- <dl class="left_list list2">
                                <dt>COM2<br/>电表</dt>
                                <dd>
                                    <div class="home_num home">300</div>
                                    <div class="home_percent home">95%</div>
                                    <div class="home_info">B1喷淋泵消火栓</div>
                                </dd>
                                <dd>
                                    <div class="home_num home">300</div>
                                    <div class="home_percent home">95%</div>
                                    <div class="home_info">B1喷淋泵消火栓</div>
                                </dd>
                                <dd>
                                    <div class="home_num home">300</div>
                                    <div class="home_percent home">95%</div>
                                    <div class="home_info">B1喷淋泵消火栓</div>
                                </dd>
                                <dd>
                                    <div class="home_num home">300</div>
                                    <div class="home_percent home">95%</div>
                                    <div class="home_info">B1喷淋泵消火栓</div>
                                </dd>
                            </dl>
                            <dl class="left_list list3">
                                <dt>COM3<br/>电表</dt>
                                <dd>
                                    <div class="home_num home">300</div>
                                    <div class="home_percent home">95%</div>
                                    <div class="home_info">B1喷淋泵消火栓</div>
                                </dd>
                                <dd>
                                    <div class="home_num home">300</div>
                                    <div class="home_percent home">95%</div>
                                    <div class="home_info">B1喷淋泵消火栓</div>
                                </dd>
                                <dd>
                                    <div class="home_num home">300</div>
                                    <div class="home_percent home">95%</div>
                                    <div class="home_info">B1喷淋泵消火栓</div>
                                </dd>
                            </dl>
                            <dl class="left_list list4">
                                <dt>COM4<br/>电表</dt>
                                <dd>
                                    <div class="home_num home">300</div>
                                    <div class="home_percent home">95%</div>
                                    <div class="home_info">B1喷淋泵消火栓</div>
                                </dd>
                            </dl> -->
                        </div>
                    </div>
                    <!-- <div class="metermon_left metermon_right">
                        <div class="left_top">
                            <span>4#</span>
                            <img src="../../assets/meter1.png" alt="">
                            <div class="line_1 line"></div>
                            <div class="line_2 line"></div>
                            <div class="line_3 line"></div>
                            <div class="line_4 line"></div>
                        </div>
                        <div class="left_list_warp">
                            <dl class="left_list list1">
                                <dt>COM1<br/>电表</dt>
                                <dd>
                                    <div class="home_num home">300</div>
                                    <div class="home_percent home">95%</div>
                                    <div class="home_info">B1喷淋泵消火栓</div>
                                </dd>
                            </dl>
                            <dl class="left_list list2">
                                <dt>COM2<br/>电表</dt>
                                <dd>
                                    <div class="home_num home">300</div>
                                    <div class="home_percent home">95%</div>
                                    <div class="home_info">B1喷淋泵消火栓</div>
                                </dd>
                                <dd>
                                    <div class="home_num home">300</div>
                                    <div class="home_percent home">95%</div>
                                    <div class="home_info">B1喷淋泵消火栓</div>
                                </dd>
                                <dd>
                                    <div class="home_num home">300</div>
                                    <div class="home_percent home">95%</div>
                                    <div class="home_info">B1喷淋泵消火栓</div>
                                </dd>
                                <dd>
                                    <div class="home_num home">300</div>
                                    <div class="home_percent home">95%</div>
                                    <div class="home_info">B1喷淋泵消火栓</div>
                                </dd>
                            </dl>
                            <dl class="left_list list3">
                                <dt>COM3<br/>电表</dt>
                                <dd>
                                    <div class="home_num home">300</div>
                                    <div class="home_percent home">95%</div>
                                    <div class="home_info">B1喷淋泵消火栓</div>
                                </dd>
                                <dd>
                                    <div class="home_num home">300</div>
                                    <div class="home_percent home">95%</div>
                                    <div class="home_info">B1喷淋泵消火栓</div>
                                </dd>
                                <dd>
                                    <div class="home_num home">300</div>
                                    <div class="home_percent home">95%</div>
                                    <div class="home_info">B1喷淋泵消火栓</div>
                                </dd>
                            </dl>
                            <dl class="left_list list4">
                                <dt>COM4<br/>电表</dt>
                                <dd>
                                    <div class="home_num home">300</div>
                                    <div class="home_percent home">95%</div>
                                    <div class="home_info">B1喷淋泵消火栓</div>
                                </dd>
                            </dl>
                        </div>
                    </div>   -->
                </div>
            </div>
        </div>
        <!-- <el-dialog :visible.sync="dialogTableVisible" title="1#采集器历史数据" class="metermon_dialog">
            <div class="dialog_info_list">
                <ul class="left">
                    <li class="acdate">今天</li>
                    <li>两天内</li>
                    <li>三天内</li>
                </ul>
               <div class="right"><span>优化建议：</span>设备一天内在线率为98%，处于正常状态</div> 
            </div>
            <el-table :data="gridData" stripe header-row-class-name='metermon_table_header'>
                <el-table-column property="date" label="日期" width="150"></el-table-column>
                <el-table-column property="name" label="姓名" width="200"></el-table-column>
                <el-table-column property="address" label="地址"></el-table-column>
            </el-table>
            <div class="dialog_info_close">
                <el-button size="mini" round>关闭</el-button>
            </div>
        </el-dialog> -->
        <el-dialog :visible.sync="dialogTableVisible" title="1#采集器历史数据" class="metermon_dialog">
            <div class="dialog_info_list">
                <ul class="left">
                    <li  :class="{acdate:item.active}" @click = 'getMeterDetails(item,index)' v-for = "(item,index) in timelist" :key = "index">{{item.time}}</li>
                </ul>
               <!-- <div class="right"><span>优化建议：</span>{{suggestion}}</div>  -->
            </div>
            <el-table :data="meterDetail" stripe header-row-class-name='metermon_table_header'>
                <el-table-column property="branchValue" label="表计读数(kWh)" ></el-table-column>
                <el-table-column property="status" label="表计状态"></el-table-column>
                <el-table-column property="reportTime" label="报告生成时间"></el-table-column>
            </el-table>
            <div class="dialog_info_close">
                <el-button size="mini" round>关闭</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
/*待封装函数*/
/*前天/昨天/今天*/
function getTime(time){
    let day1 = new Date();
    let date =null;
    day1.setTime(day1.getTime()-time);
    date = day1.getFullYear()+"-" + (day1.getMonth()+1) + "-" + day1.getDate();
    return date
}
import ajax  from '../../axios/axios'
import {meterMonitor} from '../../axios/datalist'
export default { 
    name: 'PowerDistributionMonitoring',
    data(){
        return{
            timelist:[{time:'今天',active:true,date:getTime(0)},{time:'两天内',active:false,date:getTime(24*60*60*1000)},{time:'三天内',active:false,date:getTime(24*60*60*1000*2)}],
            meterDetail: [],
            meterMonitor:[],
            gridData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }],
            dialogTableVisible: false
        }
    },
    mounted(){
        let This =this;
        // This.getMeterDetails(This.timelist[0],0)
        This.getMeterMonitor()
    },
    methods:{
         /*获取表计数据*/
        getMeterMonitor(){
            let This = this;
             ajax.get('http://localhost:8080',{pmId:1}).then((res) => {
                 let code = 200
                 if(code==200){
                     This.meterMonitor = meterMonitor.data;
                    // This.meterMonitor = res.data
                 }else{
                     This.$message.error(res.msg);
                 }
                 
             })
        },
        /*获取历史数据*/
        getMeterDetails(item,index){
            let This = this;
            let config = {
                    method: 'GET',
                    url: '/api/admin/monitor/getMeterDetails',
                    data: {
                        date: item.date,
                    },
                };
            This.timelist.forEach((ele,index)=>{

                ele.active =false;
                
            })

            item.active =true;

            This.$axios.ajax(config).then((res) => {
                 if(res.code==200){

                    res.data.forEach((item,index) => {

                        if(item.status){
                            item.status ='正常'
                        }else{
                            item.status ='中断'
                        } 
                    });

                    This.meterDetail =  res.data
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
/*弹框*/
.metermon_dialog{
    
}
.metermon_dialog .dialog_info_close{
    padding-top: 50px;
    text-align: center;
}
.metermon_dialog .dialog_info_list{
    width: 100%;
    display: box;
    display: -webkit-box;
    display: flex;
    margin-bottom: 22px;
}
.dialog_info_list .left{
    width:185px;
    height:28px;
    background:#fff;
    border:1px solid #C3C9D5;
    border-radius:14px;
    display: box;
    display: -webkit-box;
    display: flex;
    overflow: hidden;
   
}
.dialog_info_list .left li{
    -webkit-box-flex: 1;
    flex:1;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
}
.dialog_info_list .left .acdate{
    color:#fff;
    background: #188FBF;
}
.dialog_info_list .left li:nth-of-type(1),
.dialog_info_list .left li:nth-of-type(2){
    border-right:1px solid #C3C9D5;
}

.dialog_info_list .right{
    -webkit-box-flex: 1;
    flex:1;
    text-align: right;
    color:#3a3a3a; 
}
.dialog_info_list .right span{
    color:#188FBF
}
.metermon_content {
    background: #fff;
    height: 100%;
}
.metermon_content h2{
    height: 36px;
    line-height: 36px;
    background:rgba(245,249,249,1);
    border:1px solid #E5EEF3;
    font-size:16px;
    color:rgba(34,116,164,1); 
    padding-left: 27px;
}
.metermon_info{
    padding: 24px 30px;
    min-height:600px;
    position: relative;
}
.metermon_info .info_list_warp{
    font-size:14px;
    color:rgba(58,58,58,1);
    display: box;
    display: -webkit-box;
    display: flex;
}
.metermon_info .left {
    margin-right: 20px;
}
.metermon_info .left li,
.metermon_info .right li{
    position: relative;
    padding-left: 20px;
    height: 28px;
    line-height: 28px;
}
.metermon_info .right li{
    padding-left: 34px;
}
.metermon_info .left li:after{
    content: '';
    display: block;
    width:14px;
    height:14px;
    background:rgba(75,196,132,1);
    border-radius: 50%;
    position: absolute;
    left:0;
    top:50%;
    margin-top: -7px;
}
.metermon_info .right li:after{
    content: '';
    display: block;
    width:23px;
    height:9px;
    border:2px solid #F71C1C;
    border-radius: 7px;
    position: absolute;
    left:0;
    top:50%;
    margin-top: -7px;
}
.metermon_info .left li:last-child:after{
    background:#F57272;
}
.metermon_info .right li:nth-of-type(2):after{
    border-color: #DE7E0D;
}
.metermon_info .right li:nth-of-type(3):after{
    border-color: #664DE6;
}
.metermon_info .right li:nth-of-type(4):after{
    border-color: #1780D9;
}
.metermon_info .right li:nth-of-type(4):after{
    border-color: #3FBC7A;
}
/*关系列表图*/
.metermon_info .metermon_list_img{
    width: 100%;
    position: absolute;
    top:27px;
    height: 600px;
    overflow-x: auto;
}
.metermon_list_img .top_img{
    width: 248px;
    /* margin: 0 auto; */
    position: absolute;
    left:50%;
    transform: translateX(-50%);
}
.metermon_list_img .top_img .line{
    /* content:'';
    display: block; */
    width: 2px;
    height: 80px;
    background: #2274A4;
    position: absolute;
    /* left: 97px; */
    top: 39px;

}
/* .metermon_list_img .top_img:after{
    content:'';
    display: block;
    width: 2px;
    height: 39px;
    background: #2274A4;
    position: absolute;
    left: 97px;
    top: 39px;

} */
 /* .metermon_list_img .top_img:before{
    content:'';
    display: block;
    width: 2px;
    height: 39px;
    background: #2274A4;
    position: absolute;
    right: 89px;
    top: 39px;
} */
 .metermon_list_img .metermon_warp{
     width: 100%;
     position: absolute;
    top: 118px;
    border-top:2px solid #2274A4;
 }
/*左侧模块*/
.metermon_left{
    position: absolute;
    /* left: 50%;
    transform: translateX(-50%); */
    top:60px;
}
.metermon_left .left_top{
    position: absolute;
    left: 50%;
    transform: translate(-50%);
}
.metermon_left .left_top span{
    position: absolute;
    left:50%;
    top:-16px;
    transform: translateX(-50%);
    color:#DE5959;
    font-size: 14px;

}
.metermon_left .left_top:after{
    content:'';
    display: block;
    width: 2px;
    height: 62px;
    background: #2274A4;
    position: absolute;
    right: 12px;
    top: -60px;
}
/* .metermon_left .left_top:before{
    content:'';
    display: block;
    width: 494px;
    height: 2px;
    background: #2274A4;
    position: absolute;
    left: 82px;
    top: -38px;
} */
.metermon_left  .left_top .line{
    width: 2px;
    background: #3FBC7A;
    position: absolute;
    top: 29px;
    height: 30px;
}
/* .metermon_left  .left_top .line_1{
    height: 22px;
    right: 45px;
}
.metermon_left  .left_top .line_2{
    height: 30px;
    right: 35px;
}
.metermon_left  .left_top .line_3{
    height: 30px;
    right: 25px;
}
.metermon_left  .left_top .line_4{
    height: 22px;
    right: 15px;
} */
/*列表样式*/
.metermon_left .left_list_warp{
    display: -webkit-box;
    display: -webkit-flex;
    margin-top: 58px;
}
.metermon_left .left_list{
    width: 274px;
    font-size: 12px;
    border-left:2px solid #3FBC7A;
    padding-top: 30px;
    border-top:2px solid #3FBC7A;
    
    /* position: absolute; */
    
}
/* .metermon_left .list1{
    width: 274px;
    left: 40px;
    top: 13px;
    
} */
/* .metermon_left .list2{
    width: 274px;
    left: 320px;
    top: 21px;
}
.metermon_left .list3{
    width: 248px;
    left: 648px;
    top: 21px;
}
.metermon_left .list4{
    width: 469px;
    left: 900px;
    top: 13px;  
} */
/* .metermon_left .left_list:after{
    content:'';
    display: block;
    height: 2px;
    background: #3FBC7A;
    position: absolute;
    left: 0px;
    top: 0px;
}
.metermon_left .list1:after{
    width: 359px;
}
.metermon_left .list2:after{
    width: 90px;
}
.metermon_left .list3:after{
    width:228px;
    left: -228px;
}
.metermon_left .list4:after{
    width:469px;
    left: -469px;
} */
.metermon_left .left_list dt{
    color:#2274A4;
    font-size: 14px;
    padding-left: 12px;
    margin-bottom: 6px;
}
.metermon_left .left_list dd{
     display: box;
    display: -webkit-box;
    display: flex;
    margin-bottom: 12px;
}
.metermon_left .left_list .home{
    width: 60px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    border-radius: 12px;
}
.metermon_left .left_list .home_num{
    background: #3FBC7A;
    border:1px solid #3FBC7A;
    color: #fff;
}
.metermon_left .left_list .home_percent{
    border:1px solid #3FBC7A;
    color: #3FBC7A;
    background: #fff;
}
.metermon_left .left_list .home_info{
    height: 24px;
    line-height: 24px;
    color:#3A3A3A;
    font-size: 14px;
    margin-left: 10px;
}
.metermon_right{

}

.metermon_right .left_top:after{
    left: 30px
}
.metermon_right .left_top:before{
    width: 567px;
    left: -535px;
}

</style>
<style>
.metermon_dialog .el-dialog__header{
    padding:0;
    height:40px;
    line-height:40px;
    background:rgba(24,129,191,1);
    /* border-radius:5px 5px 0px 0px; */
    padding-left:29px;
    position: relative;
    
    
}
.metermon_dialog .el-dialog__header .el-dialog__title{
    color:#fff;
    font-size: 16px;
}
.metermon_dialog .el-dialog__header  .el-dialog__headerbtn{
    top:50%;
    transform: translateY(-50%);
 
}
.metermon_dialog  .el-dialog__headerbtn .el-dialog__close{
    font-size: 12px;
    color:#fff;
    cursor: pointer;
    padding:2px;
    border:1px solid #fff;
    border-radius:50%;
}
.metermon_dialog  .metermon_table_header th{
    background:rgba(241,241,241,1);
    font-size: 14px;
    color:#3a3a3a;
}
.metermon_dialog .el-table--striped .el-table__body tr.el-table__row--striped td{
    background: #F7FBFC;
    /* border:none; */
}
.metermon_dialog .el-table td{
    /* border:none; */
}
.metermon_dialog .el-button--mini{
    width:90px;
    font-size: 14px;
}
</style>


