<template>
    <div style="display:inline-block" class="CanvasSemicircleBox">
        <canvas style="margin: 0 auto" :class="renddata.className" id="c1" :width="renddata.boxWidth" :height="renddata.boxHeight" ></canvas>
    </div>
</template>
<script>
export default {
    name: 'CanvasSemicircle',
    components: {
    },
    props: {
        getData: {
            type: Object,
            default: function () {
                return {
                        className:'power',
                        boxWidth:250,
                        boxHeight:150,
                        semicircleBorder:10,
                        semicircleX:125,
                        semicircleY:118,
                        semicircleR:83,
                        semicircleColor:["#09d4d8","#4dd8b9"],
                        title:"今日用电 (kWh)",
                        data:98124,
                        dataFontsize:"36px Arial",
                        dataFontcolor:"#56dbbe",
                        dataY:55,
                        icon:"图",
                        iconFontsize:"20px Arial",
                        iconFontcolor:"#11d9e",
                        iconY:30,
                        tongData:1.4,
                        tongDataFontsize:"14px Arial",
                        tongDataFontcolor:"rgba(255,255,255,1)",
                        tongDataAlign:"right",
                        tongDataX:190,
                        tongDataY:100,
                        tongTitleX:80,
                        tongTitleY:100,
                        tongArrowsX:130,
                        tongArrowsY:100,
                        tongArrowsColor:"#e07f92",
                        tongArrowsFontsize:"14px Arial",
                        huanData:3.2,
                        huanDataFontsize:"14px Arial",
                        huanDataFontcolor:"rgba(255,255,255,1)",
                        huanDataAlign:"right",
                        huanDataX:10,
                        huanDataY:100,
                        huanTitleX:120,
                        huanTitleY:100,
                        huanArrowsX:90,
                        huanArrowsY:100,

                }
            }
        },

     },
    data() {
        return {
            renddata:this.getData

        }
    },
    created() {

    },
    mounted(){
        this.createCanvas()
    },
    methods: {
        createCanvas:function () {
            var it = this;
            var canvas=document.querySelector('.'+it.renddata.className);
            var ct=canvas.getContext('2d');
            var randNum=0;
            var timer;
                randNum=0;
                var maxTxt=Math.floor(Math.random()*51+50);
                ct.clearRect(0,0,canvas.width,canvas.height);
                timer=setInterval(function(){
                    ct.clearRect(0,0,canvas.width,canvas.height);
                    randNum++;
                    var num=randNum+'%';
                    if(randNum>=maxTxt){
                        randNum=maxTxt;
                        clearInterval(timer);
                    }

                    draw(num);
                },10)
            function draw(num)
            {
                ct.clearRect(0,0,canvas.width,canvas.height);
                /!*最大圆形-环背景*!/
                ct.beginPath();
                ct.arc(it.renddata.semicircleX,it.renddata.semicircleY,it.renddata.semicircleR,Math.PI*1,Math.PI*2,false);
                ct.strokeStyle="rgba(255,255,255,0.1)";
                ct.lineWidth = it.renddata.semicircleBorder;
                ct.stroke();

               //外边
                /!*最大圆形-环背景*!/
                ct.beginPath();
                ct.arc(it.renddata.semicircleX,it.renddata.semicircleY,it.renddata.semicircleR+8,Math.PI*0.99,Math.PI*2.01,false);
                ct.strokeStyle="rgba(255,255,255,0.1)";
                ct.lineWidth ="3"
                ct.stroke();

                //内边

                /!*最大圆形-环背景*!/
                ct.beginPath();
                ct.arc(it.renddata.semicircleX,it.renddata.semicircleY,it.renddata.semicircleR-8,Math.PI*0.99,Math.PI*2.01,false);
                ct.strokeStyle="rgba(255,255,255,0.1)";
                ct.lineWidth ="3"
                ct.stroke();


                /*进度*/

                /!*角度弧形进度条*!/
                var deg=parseInt(num)/100*360-90;//根据百分比获取弧度大小
                var g = ct.createLinearGradient(0,0,180,0);  //创建渐变对象  渐变开始点和渐变结束点
                ct.beginPath();
               // ct.arc(100, 115, 80, Math.PI*1, Math.PI*((90/100)*342/180 + 0.1), false);
                ct.arc(it.renddata.semicircleX,it.renddata.semicircleY,it.renddata.semicircleR, Math.PI*1, Math.PI*((50/100)*180/180 + 1), false);

                g.addColorStop(0,it.renddata.semicircleColor[0]); //添加颜色点
                g.addColorStop(1,it.renddata.semicircleColor[1]); //添加颜色点
                ct.strokeStyle=g;
                ct.lineWidth = it.renddata.semicircleBorder;
                ct.stroke();

               /* /!*内部圆形*!/
                ct.beginPath();
                ct.arc(100,100,80,Math.PI/180*0,Math.PI/180*360,false);
                ct.fillStyle="snow";
                ct.closePath();
                ct.fill();*/



                /*画文字-标题*/
                ct.beginPath();
                ct.font="15px YaHei";
                ct.fillStyle="#fff";
                ct.textAlign="left";
                var w=ct.measureText(it.renddata.title).width;//获取文本宽度
                var h=30;//高度和文字大小一样
                var transX=(canvas.width-w)/2;
                var transY=(canvas.width-h)/2;
                ct.translate(transX,-15);//保持文字水平居中
                ct.fillText(it.renddata.title,0,30);
                ct.translate(-transX,15);//原点还原到初始位置



                /*画文字-数据*/
                ct.beginPath();
                ct.font=it.renddata.dataFontsize;
                ct.fillStyle=it.renddata.dataFontcolor;
                ct.textAlign="left";
                var w=ct.measureText(it.renddata.data).width;//获取文本宽度
                var h=30;//高度和文字大小一样
                var transX=(canvas.width-w)/2;
                var transY=(canvas.height-h+it.renddata.dataY)/2;
                ct.translate(transX,transY);//保持文字水平居中
                ct.fillText(it.renddata.data,0,30);
                ct.translate(-transX,-transY);//原点还原到初始位置


                /*画文字-中间图标*/
                ct.beginPath();
                ct.font=it.renddata.iconFontsize;
                ct.fillStyle=it.renddata.iconFontcolor;
                ct.textAlign="left";
                var w=ct.measureText(it.renddata.icon).width;//获取文本宽度
                var h=30;//高度和文字大小一样
                var transX=(canvas.width-w)/2;
                var transY=(canvas.height-h-it.renddata.iconY)/2;
                ct.translate(transX,transY);//保持文字水平居中
                ct.fillText(it.renddata.icon,0,30);
                ct.translate(-transX,-transY);//原点还原到初始位置

                /*画文字-环比*/
                ct.beginPath();
                ct.font="14px Arial";
                ct.fillStyle="rgba(255,255,255,0.5)";
                ct.textAlign="right";
                var w=ct.measureText("环比").width;//获取文本宽度
                var h=30;//高度和文字大小一样
                var transX=(canvas.width-w-it.renddata.huanTitleX)/2;
                var transY=(canvas.height-h+it.renddata.huanTitleY)/2;
                ct.translate(transX,transY);//保持文字水平居中
                ct.fillText("环比",0,30);
                ct.translate(-transX,-transY);//原点还原到初始位置

                /*画文字-环比箭头*/
                ct.beginPath();
                ct.font="14px Arial";
                ct.fillStyle="green";
                ct.textAlign="right";
                var w=ct.measureText("下").width;//获取文本宽度
                var h=30;//高度和文字大小一样
                var transX=(canvas.width-w-it.renddata.huanArrowsX)/2;
                var transY=(canvas.height-h+it.renddata.huanArrowsY)/2;
                ct.translate(transX,transY);//保持文字水平居中
                ct.fillText("下",0,30);
                ct.translate(-transX,-transY);//原点还原到初始位置

                /*画文字-环比数据*/
                ct.beginPath();
                ct.font="14px Arial";
                ct.fillStyle="rgba(255,255,255,1)";
                ct.textAlign="right";
                var w=ct.measureText("3.2%").width;//获取文本宽度
                var h=30;//高度和文字大小一样
                var transX=(canvas.width-w+it.renddata.huanDataX)/2;
                var transY=(canvas.height-h+it.renddata.huanDataY)/2;
                ct.translate(transX,transY);//保持文字水平居中
                ct.fillText("3.2%",0,30);
                ct.translate(-transX,-transY);//原点还原到初始位置

                /*画文字-同比*/
                ct.beginPath();
                ct.font="14px Arial";
                ct.fillStyle="rgba(255,255,255,0.5)";
                ct.textAlign="left";
                var w=ct.measureText("同比").width;//获取文本宽度
                var h=30;//高度和文字大小一样
                var transX=(canvas.width-w+it.renddata.tongTitleX)/2;
                var transY=(canvas.height-h+it.renddata.tongTitleY)/2;
                ct.translate(transX,transY);//保持文字水平居中
                ct.fillText("同比",0,30);
                ct.translate(-transX,-transY);//原点还原到初始位置

                /*画文字-同比箭头*/
                ct.beginPath();
                ct.font=it.renddata.tongArrowsFontsize;
                ct.fillStyle=it.renddata.tongArrowsColor;
                ct.textAlign="left";
                var w=ct.measureText("下").width;//获取文本宽度
                var h=30;//高度和文字大小一样
                var transX=(canvas.width-w+it.renddata.tongArrowsX)/2;
                var transY=(canvas.height-h+it.renddata.tongArrowsY)/2;
                ct.translate(transX,transY);//保持文字水平居中
                ct.fillText("下",0,30);
                ct.translate(-transX,-transY);//原点还原到初始位置

                /*画文字-同比数据*/
                ct.beginPath();
                ct.font="14px Arial";
                ct.fillStyle="rgba(255,255,255,1)";
                ct.textAlign="left";
                var w=ct.measureText("3.2%").width;//获取文本宽度
                var h=30;//高度和文字大小一样
                var transX=(canvas.width-w+it.renddata.tongDataX)/2;
                var transY=(canvas.height-h+it.renddata.tongDataY)/2;
                ct.translate(transX,transY);//保持文字水平居中
                ct.fillText("3.2%",0,30);
                ct.translate(-transX,-transY);//原点还原到初始位置

            }


        }
    },
}

</script>
<style scoped>
    .CanvasSemicircleBox{
        position: relative;
    }


</style>
