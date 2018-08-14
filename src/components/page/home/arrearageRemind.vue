<style scoped>
.arrearageRemind {
    width: 100%;
    height: 100%;
    color: #ffffff;
    position: relative;
}

.arrearageRemind .arrearageRemind_title {
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

.arrearageRemind-content {
    position: absolute;
    top: 50px;
}

.arrearageRemind_content {
    margin-left: 100px;
    margin-top: 40px;
}

.arrearageRemind_content .arrearageRemind_content_left {
    width: 71px;
    height: 71px;
    border-radius: 50%;
    text-align: center;
    border: 4px solid #01F3F4;
}

.arrearageRemind_content .arrearageRemind_content_left span {
    display: inline-block;
    margin-top: 12px;
}

.arrearageRemind_content .arrearageRemind_content_middle {
    margin-left: 30px;
    padding-top: 10px;
}

.arrearageRemind_content .arrearageRemind_content_middle span {
    display: inline-block;
    width: 100%;
    font-size: 22px;
    text-align: center;
}

.content_bottom {
    width: 100px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    background: #34B5DF;
    font-size: 13px;
}

.arrearageRemind_content_right span {
    display: inline-block;
    width: 100%;
    font-size: 22px;
    text-align: center;
}

.arrearageRemind_content_right {
    margin-left: 30px;
    padding-top: 10px;
}

</style>
<template>
    <div class="arrearageRemind">
        <div class="arrearageRemind_title">
            {{title}}
        </div>
        <div class="arrearageRemind-content">
            <div class="arrearageRemind_content ub">
                <div class="arrearageRemind_content_left" @click="topath('/TenantManagement')">
                    <span>
                        欠费
                    <br>租户
                    </span>
                </div>
                <div class="arrearageRemind_content_middle">
                    <span>4515个</span>
                    <div class="content_bottom">欠费租户</div>
                </div>
                <div class="arrearageRemind_content_right">
                    <span>5684576元</span>
                    <div class="content_bottom">欠费总金额</div>
                </div>
            </div>
            <div class="arrearageRemind_content ub">
                <div class="arrearageRemind_content_left" @click="topath('/TenantManagement')">
                    <span>
                        余额
                    <br>不足
                    </span>
                </div>
                <div class="arrearageRemind_content_middle">
                    <span>4515个</span>
                    <div class="content_bottom" style="background: #5AB268;">剩余三天</div>
                </div>
                <div class="arrearageRemind_content_right">
                    <span>576个</span>
                    <div class="content_bottom" style="background: #B65B56;">剩余一天</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: '租户欠费提醒'
        }
    },
    methods: {
        topath(path) {
            // console.log(path)
            this.$router.push(path);
        }
    }
}

</script>
