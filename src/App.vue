<template>
    <div id="app">
        <router-view v-wechat-title="$route.meta.title"></router-view>
        <!-- <router-view></router-view> -->
    </div>
</template>
<style>
/*@import "../static/css/main.css";*/

@import "../static/css/color-dark.css";


/*深色主题*/


/*@import "../static/css/theme-green/color-green.css";   浅绿色主题*/
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.clearfix:after {content: "."; display: block; height:0; clear:both; visibility: hidden;}
.clearfix { *zoom:1; }
</style>
