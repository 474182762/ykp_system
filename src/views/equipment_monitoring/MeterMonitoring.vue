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
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
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
}
.metermon_list_img .top_img{
    width: 248px;
    margin: 0 auto;
}
</style>

