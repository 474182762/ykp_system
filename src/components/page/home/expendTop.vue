<style scoped>
.expendTop {
    width: 100%;
    height: 100%;
    position: relative;
}

.expendTop .expendTop_title {
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

.expendTop .expendTop_content {
    width: 100%;
    position: absolute;
    top: 70px;
    color: #ffffff;
    font-size: 12px;
}

.expendTop .expendTop_content .expendTop_content_box {
    width: 100%;
}

.expendTop .expendTop_content .expendTop_content_box .expendTop_content_box_left {
    width: 100px;
    text-align: right;
    margin-right: 24px;
    padding-left: 37px;
}

.expendTop .expendTop_content .expendTop_content_box .expendTop_content_box_right {
    width: 100px;
    text-align: right;
    margin-left: 24px;
    padding-right: 37px;
}

.expendTop_content_box_middle {
    position: relative;
}

.expendTop_content_box_middle ul li {
    display: block;
    height: 10px;
    border-bottom: 1px solid #838383;
    border-right: 1px solid #838383;
}

.expendTop_content_box_middle ul li:first-child {
    border-left: 1px solid #838383;
}

.expendTop_content_box_middle span {
    display: inline-block;
    position: absolute;
    top: -5px;
    left: 0px;
}

.expendTop_content_box_middle span:nth-child(3) {
    left: 28%;
}

.expendTop_content_box_middle span:nth-child(4) {
    left: 60%;
}

.expendTop_content_box_middle span:nth-child(5) {
    left: 95%;
}

.top {
    height: 40px;
    line-height: 40px;
}

.top .scale {
    position: relative;
    top: 24px;
    left: 0px;
}

.expendTop_content_box_left span {
    display: block;
    width: 60px;
    height: 22px;
    border: 1px solid #eeeeee;
    text-align: center;
    line-height: 24px;
    border-radius: 12px;
    position: absolute;
    top: 12px;
    right: 0px;
}

.expendTop_content_box .expendTop_bar {
    height: 14px;
    background: #233A66;
    /*border-radius: 7px;*/
    margin-top: 2px;
    overflow: hidden;
}

.expendTop_innerbar {
    height: 14px;
    background: -webkit-linear-gradient(left, #35BAE3, #0B4F90);

    background: -o-linear-gradient(right, #35BAE3, #0B4F90);

    background: -moz-linear-gradient(right, #35BAE3, #0B4F90);
    background: linear-gradient(to right, #35BAE3, #0B4F90);
}

.move {
    animation: move .5s ease-out backwards;
}

@-webkit-keyframes move {
    1% {
        width: 10%;
    }
    50% {
        width: 60%;
    }
    100% {
        width: 10%;
    }
}

.view_more {
    color: #86A3DB;
    font-size: 12px;
    position: absolute;
    top: 20px;
    right: 30px;
    cursor: pointer;
}

.expendTop_bar .quota_box {
    width: 2px;
    height: 14px;
    background: #55E4E6;
    position: absolute;
    top: 0px;
    z-index: 3;
    /*box-shadow: */
}

.expendTop_bar .overstep_box {
    height: 14px;
    position: absolute;
    top: 0;
    background: -webkit-linear-gradient(left, #67325F, #BC192E);

    background: -o-linear-gradient(right, #67325F, #BC192E);

    background: -moz-linear-gradient(right, #67325F, #BC192E);
    background: linear-gradient(to right, #67325F, #BC192E);
}

.red {
    color: #BC061F;
}

</style>
<template>
    <div class="expendTop">
        <div class="expendTop_title">能耗Top10排名</div>
        <div class="view_more" @click="expendTipShow">查看更多 >></div>
        <div class="expendTop_content">
            <div class="expendTop_content_box ub top">
                <div class="expendTop_content_box_left pr"><span>商场</span></div>
                <div class="expendTop_content_box_middle ub-f1">
                    <ul class="ub scale">
                        <li class="ub-f1"></li>
                        <li class="ub-f1"></li>
                        <li class="ub-f1"></li>
                        <li class="ub-f1"></li>
                        <li class="ub-f1"></li>
                        <li class="ub-f1"></li>
                    </ul>
                    <span class="scale_value" v-for="item in scales">{{item}}</span>
                </div>
                <div class="expendTop_content_box_right" style="line-height: 20px">实际能耗/
                    <br>定额能耗（kWh）</div>
            </div>
            <div class="expendTop_content_box ub" style="margin-top: 18px;" v-for="item in items">
                <div class="expendTop_content_box_left pr"> {{item.sectionName}}</div>
                <div class="expendTop_content_box_middle ub-f1 expendTop_bar">
                    <div class="expendTop_innerbar move"></div>
                    <div class="quota_box"></div>
                    <div class="overstep_box move"></div>
                </div>
                <div class="expendTop_content_box_right" style="line-height: 20px"><span class="practicals"> {{item.practicals}} </span> /<span> {{item.quota}} </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import bus from '../../common/bus.js'
export default {
    data() {
        return {
            expendShow: false,
            scales: [0],
            maxValue: '',
            items: ''
        }
    },
    mounted() {
        this.init();
    },
    created() {
        this.items = [{
                practicals: 8500,
                quota: 27980,
                sectionName: '华润万家西影路店'
            },
            {
                practicals: 23500,
                quota: 9000,
                sectionName: '华润长安新都市'
            },
            {
                practicals: 33500,
                quota: 5000,
                sectionName: '天虹百货'
            },
            {
                practicals: 33500,
                quota: 5000,
                sectionName: '天虹百货'
            }
        ]
        bus.$on('expendShow', msg => { this.expendShow = msg; })
    },
    methods: {
        init() {
            let that = this;
            that.scaleValue();
            // console.log(that.scales[3]);
            let innderbar = document.getElementsByClassName('expendTop_innerbar');
            let quota_boxs = document.getElementsByClassName('quota_box');
            let overstep_boxs = document.getElementsByClassName('overstep_box');
            let practicals = document.getElementsByClassName('practicals');

            for (let i = 0; i <= innderbar.length - 1; i++) {
                var dom = innderbar[i];
                let result = parseInt(that.items[i].practicals / that.scales[3] * 100);
                let quota_val = parseInt(that.items[i].quota / that.scales[3] * 100);
                quota_boxs[i].style.left = quota_val + '%';
                if (result <= quota_val) {
                    dom.style.width = result + '%';
                } else {
                    overstep_boxs[i].style.left = quota_val + '%'
                    overstep_boxs[i].style.width = result - quota_val + '%'
                    dom.style.width = quota_val + '%';
                    practicals[i].style.color = '#E04F4F';
                }

            };
        },
        scaleValue() {
            let that = this;
            let valueArr = [];
            for (let i = 0; i <= that.items.length - 1; i++) {
                valueArr.push(that.items[i].practicals);
                valueArr.push(that.items[i].quota);
                // console.log(that.items[i], valueArr)
            }
            that.maxValue = Math.max.apply(null, valueArr);
            let num = Math.ceil(that.maxValue / 5000) * 1250;
            for (let i = 1; i <= 3; i++) {
                if (i == 3) {
                    i = 4
                }
                this.scales.push(i * num);
            }
        },
        expendTipShow() {
            this.expendShow = !this.expendShow;
            bus.$emit('expendShow', this.expendShow);
        }
    }
}

</script>
