<template>
    <div class="pgb">
        <div class="pbg_title ub">
            <div class="" style="width: 100px;"></div>
            <div class="scaleplate">
                <ul class="ub">
                    <li class="ub-f1"></li>
                    <li class="ub-f1"></li>
                    <li class="ub-f1"></li>
                    <li class="ub-f1"></li>
                    <li class="ub-f1"></li>
                    <li class="ub-f1"></li>
                </ul>
                <div class="num1 num">0</div>
                <div class="num2 num">5000</div>
                <div class="num3 num">10000</div>
            </div>
            <div class="scaleplate_name ub-f1">
                实际 / 定额 （kWh）
            </div>
        </div>
        <div class="pgblist ub" v-for="item in items">
            <div class="pgb_left">
                {{item.sectionName}}
            </div>
            <div class="pgb_middle w1">
                <div class="bar_inner" ref="inner"></div>
                <div class="quota_bar"></div>
            </div>
            <div class="pgb_right ub-f1">
                <span>{{item.practical}}</span> / <span>{{item.quota}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [{
                    practical: 3500,
                    quota: 15000,
                    sectionName: '口腔医院'
                },
                {
                    practical: 3500,
                    quota: 9000,
                    sectionName: '牙周医院'
                },
                {
                    practical: 3500,
                    quota: 5000,
                    sectionName: '后勤保障科'
                }
            ]
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            let innderbar = document.getElementsByClassName('bar_inner');
            let quota_bar = document.getElementsByClassName('quota_bar');
            for (let i = 0; i <= innderbar.length - 1; i++) {
                let result = parseInt(this.items[i].practical / this.items[i].quota * 258);
                innderbar[i].style.width = result + 'px';
            }
        }
    }

}

</script>
<style>
.scaleplate {
    width: 230px;
    padding-right: 10px;
    padding-top: 6px;
    padding-bottom: 24px;
    position: relative;
}

.scaleplate ul li {
    display: block;
    height: 8px;
    border-bottom: 1px solid #838383;
    border-right: 1px solid #838383;
}

.scaleplate ul li:first-child {
    border-left: 1px solid #838383;
}

.scaleplate_name {
    text-align: right;
}

.scaleplate .num {
    position: absolute;
    top: -10px;
}

.scaleplate .num1 {
    left: -2px;
}

.scaleplate .num2 {
    left: 25%;
}

.scaleplate .num3 {
    left: 56%;
}

.pgblist {
    margin-bottom: 18px;
}

.pgblist .pgb_middle {
    width: 230px;
    height: 21px;
    background: #EDF7FD;
    /*margin-right: 10px;*/
    position: relative;
}

.pgblist .pgb_left {
    width: 100px;
}

.pgblist .pgb_right {
    text-align: right;
    width: 128px;
}

.bar_inner {
    height: 21px;
    background: #4EBADB;
}

.quota_bar {
    width: 2px;
    height: 21px;
    background: #7D7D7D;
    position: absolute;
    top: 0px;
    left: 100px;
    margin-left: 3px;
    margin-right: 3px;
}

</style>
