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
        </div>
    </div>
</template>


<script>
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
            ]
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
 </style>




