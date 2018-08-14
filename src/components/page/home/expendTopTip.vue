<style scoped>
.expendTopTip {
    width: 54%;
    height: 840px;
    position: absolute;
    left: 23%;
    top: 50px;
    border: 1px solid #35BAE3;
}

.expendTopTip .expendTop_title {
    width: 158px;
    height: 35px;
    line-height: 37px;
    background: rgba(30, 71, 133, 0.2);
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

.expendTopTip .expendTop_content {
    width: 100%;
    position: absolute;
    top: 70px;
    color: #ffffff;
    font-size: 12px;
}

.expendTopTip .expendTop_content .expendTip_content_box {
    width: 100%;
}

.expendTopTip .expendTop_content .expendTip_content_box .expendTip_content_box_left {
    width: 100px;
    text-align: right;
    margin-right: 24px;
    padding-left: 100px;
}

.expendTopTip .expendTop_content .expendTip_content_box .expendTip_content_box_right {
    width: 100px;
    text-align: right;
    margin-left: 24px;
    padding-right: 100px;
}

.expendTip_content_box_middle {
    position: relative;
}

.expendTip_content_box_middle ul li {
    display: block;
    height: 10px;
    border-bottom: 1px solid #838383;
    border-right: 1px solid #838383;
}

.expendTip_content_box_middle ul li:first-child {
    border-left: 1px solid #838383;
}

.expendTip_content_box_middle span {
    display: inline-block;
    position: absolute;
    top: -5px;
    left: 0px;
}

.expendTip_content_box_middle span:nth-child(3) {
    left: 28%;
}

.expendTip_content_box_middle span:nth-child(4) {
    left: 60%;
}

.expendTip_content_box_middle span:nth-child(5) {
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

.expendTip_content_box_left span {
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

.expendTip_content_box .expendTip_bar {
    height: 14px;
    background: #233A66;
    /*border-radius: 7px;*/
    margin-top: 2px;
    overflow: hidden;
}

.expendTip_innerbar {
    height: 14px;
    background: -webkit-linear-gradient(left, #35BAE3, #0B4F90);

    background: -o-linear-gradient(right, #35BAE3, #0B4F90);

    background: -moz-linear-gradient(right, #35BAE3, #0B4F90);

    background: linear-gradient(to right, #35BAE3, #0B4F90);
}

.expendTip_bar .expendTip_quota_box {
    width: 2px;
    height: 14px;
    background: #55E4E6;
    position: absolute;
    top: 0px;
    z-index: 3;
    /*box-shadow: */
}

.expendTip_bar .expendTip_overstep_box {
    height: 14px;
    position: absolute;
    top: 0;
    background: -webkit-linear-gradient(left, #67325F, #BC192E);

    background: -o-linear-gradient(right, #67325F, #BC192E);

    background: -moz-linear-gradient(right, #67325F, #BC192E);
    background: linear-gradient(to right, #67325F, #BC192E);
}

.moves {
    animation: moves 1s ease-out backwards;
}

@-webkit-keyframes moves {
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

.close_tip {
    width: 20px;
    height: 20px;

    font-size: 20px;
    color: #35BAE3;
    position: absolute;
    top: 20px;
    right: 20px;
}

.ofy {
    width: 100%;
    height: 700px;
    overflow-y: scroll;
}

</style>
<style type="text/css">
.ofy::-webkit-scrollbar {
    background-color: rgba(225, 250, 225, 0.1);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.22);
    border-radius: 10px;
    width: 5px;
}

.ofy::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #35BAE3;
    height: 50px;
}

</style>
<template>
    <div class="expendTopTip">
        <div class="expendTop_title">能耗Top10排名</div>
        <div class="close_tip el-icon-circle-close-outline" @click="expendTipShow"></div>
        <div class="expendTop_content">
            <div class="expendTip_content_box ub top">
                <div class="expendTip_content_box_left pr"><span>商场</span></div>
                <div class="expendTip_content_box_middle ub-f1">
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
                <div class="expendTip_content_box_right" style="line-height: 20px">实际能耗/
                    <br>定额能耗（kWh）</div>
            </div>
            <div class="ofy">
                <div class="expendTip_content_box ub" style="margin-top: 24px;" v-for="(item,key) in topItems" :key="key">
                    <div class="expendTip_content_box_left pr"> {{item.sectionName}}</div>
                    <div class="expendTip_content_box_middle ub-f1 expendTip_bar">
                        <div class="expendTip_innerbar moves"></div>
                        <div class="expendTip_quota_box"></div>
                        <div class="expendTip_overstep_box move"></div>
                    </div>
                    <div class="expendTip_content_box_right" style="line-height: 20px"><span class="expendTip_practical"> {{item.practical}} </span> /<span> {{item.quota}} </span>
                    </div>
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
            expendShow: true,
            scales: [0],
            maxValue: '',
            topItems: [{
                    practical: 28500,
                    quota: 15000,
                    sectionName: '华润万家西影路店'
                },
                {
                    practical: 3500,
                    quota: 9000,
                    sectionName: '华润长安新都市'
                },
                {
                    practical: 13500,
                    quota: 5000,
                    sectionName: '天虹百货'
                },
                {
                    practical: 13500,
                    quota: 9000,
                    sectionName: '华润长安新都市'
                },
                {
                    practical: 3500,
                    quota: 5000,
                    sectionName: '天虹百货'
                }, {
                    practical: 28500,
                    quota: 15000,
                    sectionName: '华润万家西影路店'
                },
                {
                    practical: 3500,
                    quota: 9000,
                    sectionName: '华润长安新都市'
                },
                {
                    practical: 4500,
                    quota: 5000,
                    sectionName: '天虹百货'
                },
                {
                    practical: 5500,
                    quota: 9000,
                    sectionName: '华润长安新都市'
                },
                {
                    practical: 6500,
                    quota: 5000,
                    sectionName: '天虹百货'
                }, {
                    practical: 8500,
                    quota: 15000,
                    sectionName: '华润万家西影路店'
                },
                {
                    practical: 3500,
                    quota: 29000,
                    sectionName: '华润长安新都市'
                }
            ]
        }
    },
    mounted() {
        this.inits();
    },
    created() {
        bus.$on('expendShow', msg => { this.expendShow = msg; })
    },
    methods: {
        inits() {
            let that = this;
            that.scaleValue();
            // console.log(that.scales[3]);
            let innderbar = document.getElementsByClassName('expendTip_innerbar');
            let expendTip_quota_boxs = document.getElementsByClassName('expendTip_quota_box')
            let expendTip_overstep_boxs = document.getElementsByClassName('expendTip_overstep_box')
            let expendTip_practical = document.getElementsByClassName('expendTip_practical')
            for (let i = 0; i <= innderbar.length - 1; i++) {
                console.log(that.topItems[i].practical)
                var dom = innderbar[i];
                let result = parseInt(that.topItems[i].practical / that.scales[3] * 100);
                let quota_val = parseInt(that.topItems[i].quota / that.scales[3] * 100);
                expendTip_quota_boxs[i].style.left = quota_val + '%';
                if (result <= quota_val) {
                    dom.style.width = result + '%';
                } else {
                    expendTip_overstep_boxs[i].style.left = quota_val + '%'
                    expendTip_overstep_boxs[i].style.width = result - quota_val + '%'
                    dom.style.width = quota_val + '%';
                    expendTip_practical[i].style.color = '#E04F4F';
                }

            };
        },
        scaleValue() {
            let that = this;
            let valueArr = [];
            for (let i = 0; i <= that.topItems.length - 1; i++) {
                valueArr.push(that.topItems[i].practical);
                valueArr.push(that.topItems[i].quota);
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
