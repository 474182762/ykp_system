<template>
    <div class="GoalsAndAchievementsBox">
        <div class="showType clear">
            <span>节能目标完成情况</span>
        </div>
        <div :id="boxid" class="GoalsAndAchievements">
            <canvas></canvas>
        </div>

    </div>
</template>
<script>
export default {
    name: 'basetable',
    components: {
    },
    props: {
        getData: {
            type: Object,
            default: function () {
                return {

                }
            }
        },

     },
    data() {
        return {
            boxid:''

        }
    },
    created() {
        this.makeId();

    },
    mounted(){
        this.makeCanvas();

    },
    methods: {
        makeId(){
            this.boxid = 'canvs'+((Math.random() * 10000000).toString(16).substr(0, 4) + '-' + (new Date()).getTime() + '-' + Math.random().toString().substr(2, 5));
        },
        makeCanvas(){

            // Set up our canvas
            var canvas = document.querySelector('#'+this.boxid+' canvas');
            canvas.width = canvas.parentNode.clientWidth;
            canvas.height = canvas.parentNode.clientHeight;
            var ctx = canvas.getContext('2d');

// Pick out the form elements for easy access later
            var x1 = 40;
            var x2 = 13;
            var y =canvas.height-(canvas.height*0.46);
            //var color = document.querySelector('#color');

// Animation function
            function draw() {
                // clear the canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Wobble the cube using a sine wave
                //var wobble = Math.sin(Date.now() / 250) * canvas.height / 50;
                drawLine(
                    canvas.width / 9,
                    //canvas.height / 2 + wobble + y.value / 2,
                    canvas.height / 2 + y / 1.85,
                    // Number(x1.value),
                    canvas.width,
                    (canvas.height-(canvas.height*0.44))/5
                );
                // draw the cube1
                drawCube(
                    canvas.width / 4.3,
                    //canvas.height / 2 + wobble + y.value / 2,
                    canvas.height / 2 + y / 1.85,
                   // Number(x1.value),
                    x1,
                   // Number(x2.value),
                    x2,
                    //Number(y.value)
                    y,
                    '',
                    "电耗节能",
                    "图",
                    "yellow",
                    "123 万 kWh"
                );

               // draw the cube2
                drawCube(
                    canvas.width / 2,
                    //canvas.height / 2 + wobble + y.value / 2,
                    canvas.height / 2 + y / 1.85,
                    // Number(x1.value),
                    x1,
                    // Number(x2.value),
                    x2,
                    //Number(y.value),
                    y,
                    '',
                    "电耗节能",
                    "图",
                    "yellow",
                    "77233m³"
                );

                // draw the cube3
                drawCube(
                    canvas.width / 1.3,
                    //canvas.height / 2 + wobble + y.value / 2,
                    canvas.height / 2 + y / 1.85,
                    // Number(x1.value),
                    x1,
                    // Number(x2.value),
                    x2,
                    //Number(y.value),
                    y,
                    '',
                    "电耗节能",
                    "图",
                    "yellow",
                    "9254m³"
                );

                // draw the cube1
                drawCubeFill(
                    canvas.width / 4.3,
                    //canvas.height / 2 + wobble + y.value / 2,
                    canvas.height / 2 + y / 1.85,
                    // Number(x1.value),
                    x1,
                    // Number(x2.value),
                    x2,
                    //Number(y.value)
                    y,
                    y/3,
                    "",
                    '30 万 kWh'
                );

                // draw the cube2
                drawCubeFill(
                    canvas.width / 2,
                    //canvas.height / 2 + wobble + y.value / 2,
                    canvas.height / 2 + y / 1.85,
                    // Number(x1.value),
                    x1,
                    // Number(x2.value),
                    x2,
                    //Number(y.value),
                    y,
                    y/1.5,
                    "",
                    '2568m³'
                );

                // draw the cube3
                drawCubeFill(
                    canvas.width / 1.3,
                    //canvas.height / 2 + wobble + y.value / 2,
                    canvas.height / 2 + y / 1.85,
                    // Number(x1.value),
                    x1,
                    // Number(x2.value),
                    x2,
                    //Number(y.value),
                    y,
                    y,
                    "",
                    '5500m³'
                );

                //requestAnimationFrame(draw);
            }
            draw();

// Colour adjustment function
// Nicked from http://stackoverflow.com/questions/5560248
          /*  function shadeColor(color, percent) {
                color = color.substr(1);
                var num = parseInt(color, 16),
                    amt = Math.round(2.55 * percent),
                    R = (num >> 16) + amt,
                    G = (num >> 8 & 0x00FF) + amt,
                    B = (num & 0x0000FF) + amt;
                return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
            }*/

// Draw a cube to the specified specs
            function drawCube(x, y, wx, wy, h, color,title,titIco,titIcoColor,vdata) {
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x - wx, y - wx * 0);
                ctx.lineTo(x - wx, y - h - wx * 0);
                ctx.lineTo(x, y - h * 1);
                ctx.closePath();
                //ctx.fillStyle = shadeColor(color, -10);
                ctx.fillStyle = "#223965";
                //ctx.strokeStyle = color;
                //ctx.stroke();
                ctx.fill();

                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + wy, y - wy * 0.5);
                ctx.lineTo(x + wy, y - h - wy * 0.5);
                ctx.lineTo(x, y - h * 1);
                ctx.closePath();
                //ctx.fillStyle = shadeColor(color, 10);
                ctx.fillStyle = '#1b325b';
                //ctx.strokeStyle = shadeColor(color, 50);
                //ctx.stroke();
                ctx.fill();

                ctx.beginPath();
                ctx.moveTo(x, y - h);
                ctx.lineTo(x - wx, y - h - wx * 0);
                ctx.lineTo(x - wx + wy, y - h - (wx * 0 + wy * 0.5));
                ctx.lineTo(x + wy, y - h - wy * 0.5);
                ctx.closePath();
                //ctx.fillStyle = shadeColor(color, 20);
                ctx.fillStyle = "#29497c";
                //ctx.strokeStyle = shadeColor(color, 60);
                //ctx.stroke();
                ctx.fill();

                //title
                ctx.beginPath();
                ctx.font="15px Arial";
                ctx.fillStyle="rgba(255,255,255,0.5)";
                ctx.textAlign="left";
                ctx.fillText(title,x - wx,y-h-35);

                //title ico
                ctx.beginPath();
                ctx.font="30px Arial";
                ctx.fillStyle=titIcoColor;
                ctx.textAlign="left";
                ctx.fillText(titIco,x-(wx/1.5),y-h-55);

                //bottom data
                ctx.beginPath();
                ctx.font="15px Arial";
                ctx.fillStyle="rgba(255,255,255,0.6)";
                ctx.textAlign="left";
                ctx.fillText("节能目标：",x - wx-10,y+30);

                ctx.beginPath();
                ctx.font="15px Arial";
                ctx.fillStyle="rgba(255,255,255,0.9)";
                ctx.textAlign="left";
                ctx.fillText(vdata,x - wx-10,y+52);



            }
            function drawCubeFill(x,y,wx,wy,filly,h,color,vdata) {
                ctx.beginPath();
                var grd=ctx.createLinearGradient(0,0,0,filly)
                grd.addColorStop(0,"#22aad6");
                grd.addColorStop(1,"#1f72bb");
                ctx.moveTo(x, y);
                ctx.lineTo(x - wx, y - wx * 0);
                ctx.lineTo(x - wx, y - h - wx * 0);
                ctx.lineTo(x, y - h * 1);
                ctx.closePath();
                //ctx.fillStyle = shadeColor(color, -10);
                ctx.fillStyle = grd;
                //ctx.strokeStyle = color;
                //ctx.stroke();
                ctx.fill();

                ctx.beginPath();
                var grd=ctx.createLinearGradient(0,0,0,250)
                grd.addColorStop(0,"#136a94");
                grd.addColorStop(1,"#136a94");
                ctx.moveTo(x, y);
                ctx.lineTo(x + wy, y - wy * 0.5);
                ctx.lineTo(x + wy, y - h - wy * 0.5);
                ctx.lineTo(x, y - h * 1);
                ctx.closePath();
                //ctx.fillStyle = shadeColor(color, 10);
                ctx.fillStyle = grd;
                //ctx.strokeStyle = shadeColor(color, 50);
                //ctx.stroke();
                ctx.fill();

                ctx.beginPath();
                var grd=ctx.createLinearGradient(0,0,0,250)
                grd.addColorStop(0,"#22aad6");
                grd.addColorStop(1,"#22aad6");
                ctx.moveTo(x, y - h);
                ctx.lineTo(x - wx, y - h - wx * 0);
                ctx.lineTo(x - wx + wy, y - h - (wx * 0 + wy * 0.5));
                ctx.lineTo(x + wy, y - h - wy * 0.5);
                ctx.closePath();
                //ctx.fillStyle = shadeColor(color, 20);
                ctx.fillStyle = grd;
                //ctx.strokeStyle = shadeColor(color, 60);
                //ctx.stroke();
                ctx.fill();


                //bottom data
                ctx.beginPath();
                ctx.font="15px Arial";
                ctx.fillStyle="#04e9ed";
                ctx.textAlign="left";
                ctx.fillText(parseInt(h/filly*100)+"%",x - wx+5,y - h * 1-15);

                ctx.beginPath();
                ctx.font="15px Arial";
                ctx.fillStyle="rgba(255,255,255,0.9)";
                ctx.textAlign="left";
                ctx.fillText(vdata,x+20,y - h * 1-10);
            }

            // Draw lines
            function drawLine(x, y, w, h, color) {
                //划线

                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + w * 0.78, y);
                //ctx.closePath();
                //ctx.fillStyle = shadeColor(color, -10);
                //ctx.fillStyle = "#223965";
                ctx.strokeStyle = "rgba(44,192,240,0.9)";
                ctx.lineWidth= "0.5"
                ctx.stroke();


                ctx.beginPath();
                ctx.moveTo(x, y-h);
                ctx.lineTo(x + w * 0.78, y-h);
                //ctx.closePath();
                //ctx.fillStyle = shadeColor(color, -10);
                //ctx.fillStyle = "#223965";
                ctx.strokeStyle = "rgba(44,192,240,0.9)";
                ctx.lineWidth= "0.5"
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(x, y-(h*2));
                ctx.lineTo(x + w * 0.78, y-(h*2));
                //ctx.closePath();
                //ctx.fillStyle = shadeColor(color, -10);
                //ctx.fillStyle = "#223965";
                ctx.strokeStyle = "rgba(44,192,240,0.9)";
                ctx.lineWidth= "0.5"
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(x, y-(h*3));
                ctx.lineTo(x + w * 0.78, y-(h*3));
                //ctx.closePath();
                //ctx.fillStyle = shadeColor(color, -10);
                //ctx.fillStyle = "#223965";
                ctx.strokeStyle = "rgba(44,192,240,0.9)";
                ctx.lineWidth= "0.5"
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(x, y-(h*4));
                ctx.lineTo(x + w * 0.78, y-(h*4));
                //ctx.closePath();
                //ctx.fillStyle = shadeColor(color, -10);
                //ctx.fillStyle = "#223965";
                ctx.strokeStyle = "rgba(44,192,240,0.9)";
                ctx.lineWidth= "0.5"
                ctx.stroke();

                ctx.beginPath();
                ctx.setLineDash([5,2])
                ctx.moveTo(x, y-(h*5));
                ctx.lineTo(x + w * 0.78, y-(h*5));
                //ctx.closePath();
                //ctx.fillStyle = shadeColor(color, -10);
                //ctx.fillStyle = "#223965";
                ctx.strokeStyle = "rgba(48,167,203,1)";
                ctx.lineWidth= "0.5"
                ctx.stroke();


                //数字百分百
                //数字0
                ctx.beginPath();
                ctx.font="15px Arial";
                ctx.fillStyle="rgba(255,255,255,0.5)";
                ctx.textAlign="left";
                ctx.fillText("0",x-15,y+6);

                //数字1
                ctx.beginPath();
                ctx.font="15px Arial";
                ctx.fillStyle="rgba(255,255,255,0.5)";
                ctx.textAlign="left";
                ctx.fillText("20",x-25,y-h+6);

                //数字2
                ctx.beginPath();
                ctx.font="15px Arial";
                ctx.fillStyle="rgba(255,255,255,0.5)";
                ctx.textAlign="left";
                ctx.fillText("40",x-25, y-(h*2)+6);

                //数字3
                ctx.beginPath();
                ctx.font="15px Arial";
                ctx.fillStyle="rgba(255,255,255,0.5)";
                ctx.textAlign="left";
                ctx.fillText("60",x-25, y-(h*3)+6);

                //数字4
                ctx.beginPath();
                ctx.font="15px Arial";
                ctx.fillStyle="rgba(255,255,255,0.5)";
                ctx.textAlign="left";
                ctx.fillText("80",x-25, y-(h*4)+6);

                //数字5
                ctx.beginPath();
                ctx.font="15px Arial";
                ctx.fillStyle="rgba(255,255,255,0.5)";
                ctx.textAlign="left";
                ctx.fillText("100",x-35, y-(h*5)+6);




            }
        }
    },
}

</script>
<style scoped>
    .GoalsAndAchievementsBox{
        position: relative;
        width: 100%;
        height: 100%;
    }

    .showType{
        cursor: pointer;
        width: 158px;
        height: 34px;
        font-size: 16px;
        line-height: 34px;
        text-align: center;
        margin: 0 auto;
        color: rgba(255,255,255,1);
        border: 1px rgba(255,255,255,0.5) solid;
        border-radius: 0 0 10px 10px;
        background: -webkit-radial-gradient( rgba(28,70,130,1),transparent); /* Safari 5.1 - 6.0 */
        background: -o-radial-gradient( rgba(28,70,130,1),transparent); /* Opera 11.6 - 12.0 */
        background: -moz-radial-gradient( rgba(28,70,130,1),transparent); /* Firefox 3.6 - 15 */
        background: radial-gradient( rgba(28,70,130,1),transparent); /*标准的语法（必须放在最后）*/
    }
    .showType .acti{
        color: #fff;
    }
    .showType .m-line{
        width: 2px;
        height: 15px;
        position: relative;
        top:2px;
        margin: 0 15px;
        display: inline-block;
        background: #fff;
    }
    .GoalsAndAchievements{
        position: relative;
        width: 100%;
        height: calc(100% - 32px);
    }

</style>
