<template>
    <div class="power_content">
        <h2>低压配电系统图 <span>Opc连接成功</span></h2>
        <div class="power_info_warp">
            <div class="header_info clearfix">
                <div class="left">引自高压AH9柜#3变压器SCB10-1600KVA/10KV</div>
                <div class="middle">
                    <ul class="clearfix">
                        <li :class='{power_active:item.active,dot:item.dot}' v-for ='(item, index) in powerNameList' :key = 'index'>{{item.name}}</li>
                    </ul>
                    <div class="title">大商业1-2#低压配电系统图</div>
                </div>
            </div>
            <div class="power_info_list">
                <div class="left_img">
                    <img src="../../assets/power1.png" alt="">
                    <img src="../../assets/power2.png" alt="">
                    <img src="../../assets/power3.png" alt="">
                </div>
                <ul class="right_img">
                    <li>
                        <div class="warp">
                            <img src="../../assets/power4.png" alt="">
                            <img src="../../assets/power4.png" alt="">
                            <img src="../../assets/power4.png" alt="">
                            <img src="../../assets/power4.png" alt="">
                            <img src="../../assets/power4.png" alt="">
                        </div>
                    </li>
                    <li>
                        <div class="warp">
                            <img src="../../assets/power4.png" alt="">
                            <img src="../../assets/power4.png" alt="">
                            <img src="../../assets/power4.png" alt="">
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
                    <el-table-column prop="powername" label="支路名称"></el-table-column>
                    <el-table-column prop="name" label=" S1-2TM变"  width="100"></el-table-column>
                    <el-table-column prop="address" label="电容补偿"></el-table-column>
                     <el-table-column prop="powername" label="支路名称"></el-table-column>
                    <el-table-column prop="name" label=" S1-2TM变" ></el-table-column>
                    <el-table-column prop="address" label="电容补偿"></el-table-column>   
                     <el-table-column prop="powername" label="支路名称"></el-table-column>
                    <el-table-column prop="name" label=" S1-2TM变" width="80" ></el-table-column>
                    <el-table-column prop="address" label="电容补偿"></el-table-column>   
                     <el-table-column prop="powername" label="支路名称"></el-table-column>
                    <el-table-column prop="name" label=" S1-2TM变" width="80" ></el-table-column>
                    <el-table-column prop="address" label="电容补偿"></el-table-column>                                   
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
import ajax  from '../../axios/axios'

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
            left_power_name:['AB线电压','BC线电压','A相电流', 'B相电流', '用能趋势'],
            tableData: [
                {powername: 'AB线电压', name: '王小虎',  address: '上海'},
                {powername: 'BC线电压',name: '王小虎', address: '上海市'},
                {powername: 'CA线电压',name: '王小虎',address: '上海市'},
                {powername: 'A相电流', name: '王小虎',address: '上海市'},
                {powername: <el-button size="mini" round>用能趋势</el-button>, name: <el-button size="mini" round>用能趋势</el-button>,address: <el-button size="mini" round>用能趋势</el-button>}
                ]
        }
    },
    mounted(){
        let This = this;
        console.log(ajax)
        This.getInfo();
    },
    methods:{
        getInfo(){
            let data={

            }
            ajax.get('www.baidu.com',data,(res)=>{
                alert(111)
            })
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
    .power_content h2 span::after{
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
    .power_info_warp{
        width: 100%;
        height: 100%;
        background: #ffffff;
        padding: 20px 24px;
    }
    .power_info_warp .header_info{
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
         width: 40px;
         height: 26px;
         line-height: 26px;
         padding-left: 14px;
         /* text-align: center; */
         float: left;
         color:#65676B;
         font-size: 14;
         border-left:1px solid #CBD0DC;
         border-top:1px solid #CBD0DC;
         border-bottom:1px solid #CBD0DC;
         position: relative;
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
    /*配电箱图例信息*/
    .power_info_list{
        width: 100%;
        display: box;
        display: -webkit-box;
        display: flex;
        padding:4px 10px 22px 30px;
    }
    .power_info_list .left_img img:nth-of-type(2){
        margin-bottom:15px;
    }
    .power_info_list .left_img img:nth-of-type(3){
        margin-bottom:7px;
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
        margin: 108px 3px 0 3px;
    }
    .power_info_list .right_img .warp{
        border-top:3px solid #707070;
        position: relative;
        display: box;
        display: -webkit-box;
        display: flex;
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




