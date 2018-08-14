<style scoped>
.statisticalInfo {
    width: 100%;
    height: 100%;
    color: #ffffff;
    position: relative;
}

.statisticalInfo .statisticalInfo_title {
    width: 158px;
    height: 30px;
    line-height: 32px;
    background: -webkit-radial-gradient( rgba(28, 70, 130, 1), transparent);
    /* Safari 5.1 - 6.0 */
    background: -o-radial-gradient( rgba(28, 70, 130, 1), transparent);
    /* Opera 11.6 - 12.0 */
    background: -moz-radial-gradient( rgba(28, 70, 130, 1), transparent);
    /* Firefox 3.6 - 15 */
    background: radial-gradient( rgba(28, 70, 130, 1), transparent);
    /* 标准的语法（必须放在最后） */
    text-align: center;
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: -80px;
    color: #ffffff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 1px solid #3E547B;
}

.statisticalInfo_content {
    position: absolute;
    top: 50px;
    padding-left: 21%;
}

.statisticalInfo_content .baseic_logo {
    height: 40px;
    line-height: 40px;
    font-size: 28px;
    position: relative;
    left: -65px;
}

.statisticalInfo_content .content_itme {
    margin-top: 27px;
    line-height: 33px;
}

.statisticalInfo_content .content_itme_left {
    width: 96px;
    height: 33px;
    line-height: 33px;
    border-top: 1px solid #09A1A6;
    border-bottom: 1px solid #09A1A6;
    text-align: center;
}

.statisticalInfo_content .content_itme .content_itme_right {
    margin-left: 34px;
}

.statisticalInfo_content .content_itme .content_itme_right span {
    font-size: 30px;
}

</style>
<template>
    <div class="statisticalInfo">
        <div class="statisticalInfo_title">基础信息</div>
        <div class="statisticalInfo_content">
            <div class="baseic_logo">
                <i>logo</i> 紫衡能源监测平台
            </div>
            <div class="content_itme ub">
                <div class="content_itme_left">项目数</div>
                <div class="content_itme_right"><span>1562</span></div>
            </div>
            <div class="content_itme ub">
                <div class="content_itme_left">已监测时间</div>
                <div class="content_itme_right"><span>4216</span> 天</div>
            </div>
            <div class="content_itme ub">
                <div class="content_itme_left">已节能</div>
                <div class="content_itme_right"> <span>895335845</span> kWh</div>
            </div>
            <div class="content_itme ub">
                <div class="content_itme_left">已节省费用</div>
                <div class="content_itme_right">¥ <span>86583545</span> 元</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}

</script>
