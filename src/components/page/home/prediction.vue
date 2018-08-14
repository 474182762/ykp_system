<style scoped>
.prediction {
    width: 100%;
    height: 100%;
    color: #ffffff;
    position: relative;
}

.prediction .prediction_title {
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

</style>
<template>
    <div class="prediction">
        <div class="prediction_title">{{title}}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: '下月能耗预测'
        }
    }
}

</script>
