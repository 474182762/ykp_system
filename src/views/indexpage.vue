<style scoped>
.index_wap {
    width: 100%;
    height: 100%;
    position: relative;
}

.index_header {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 60px;
    padding-left: 40px;
    line-height: 60px;
    font-size: 16px;
    background: #092145;
}

.index_sidebar {
    width: 60px;
    height: 100%;
    max-width: 200px;
    position: absolute;
    left: 0px;
    top: -60px;
}

.index_content_box {
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0px;
    height: 100%;
    background: -webkit-linear-gradient(#000000, #143F7A);
    /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#000000, #143F7A);
    /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#000000, #143F7A);
    /* Firefox 3.6 - 15 */
    background: linear-gradient(#000000, #143F7A);
    /* 标准的语法 */
}

.index_content {
    background: #060F30;
}

.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    font-size: 22px;
    color: #fff;
}

.collapse-btn {
    /*float: left;*/
    padding: 0 21px;
    cursor: pointer;
    line-height: 60px;
}



.btn-bell,
.btn-fullscreen {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
}

.btn-bell-badge {
    position: absolute;
    right: 0;
    top: 10px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}

.btn-bell .el-icon-bell {
    color: #fff;
}

.user-name {
    margin-left: 10px;
    /*background: #fff;*/
    color: #fff;
}

.user-avator {
    margin-left: 10px;
    padding-top: 10px;
    padding-right: 5px;
}

.user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.index_header_title {
    width: 700px;
    height: 60px;
    line-height: 60px;
    font-size: 28px;
    text-align: center;
    letter-spacing: 5px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -350px;
}

.editmoudle_btn {
    line-height: 60px;
    font-size: 16px;
    position: absolute;
    top: 0;
    right: 300px;
}

.box {
    background: #fff;
    margin: 10px;
    height: 300px;
    text-align: center;
    line-height: 300px;
    float: left;
}

.box1 {
    width: 30%;
}

.box2 {
    width: 35%;
    height: 500px;
}

.FFF {
    width: 100%;
    clear: both;
}

.select-item {
    background-color: #5bc0de;
    display: inline-block;
    text-align: center;
    border-radius: 3px;
    margin-right: 10px;
    cursor: pointer;
    padding: 6px 20px;
    color: #fff;
}

.cursored {
    cursor: default;
}

.project-content,
.people-content {
    margin: 30px 50px;
}

.people-content {
    margin-top: 30px;
}

.drag-div {
    border: 1px solid #5bc0de;
    padding: 10px;
    margin-bottom: 10px;
    width: 800px;
    cursor: pointer;
}

.select-project-item {
    display: inline-block;
    text-align: center;
    border-radius: 3px;
}

.drag-people-label {
    margin-bottom: 0;
    padding-right: 10px;
}

.index_header .edits_btn {
    font-size: 14px;
    width: 88px;
    height: 24px;
    border: 1px solid #92ACCF;
    border-radius: 12px;
    text-align: center;
    line-height: 24px;
    /*background: #fff;*/
    position: absolute;
    top: 18px;
    right: 300px;
}

.index_header .edits_btn.edit_save {
    right: 430px;
    color: #5EEBF4;
    border-color: #5EEBF4;
}

.index_header .header-right {
    position: absolute;
    top: 0;
    right: 10px;
}

</style>
<template>
    <div class="index_wap">
        <div class="index_header header ub">
            <div class="collapse-btn">
                <el-button type="text" class="el-icon-tickets" @click="sliderbarshows()">全部导航</el-button>
            </div>
            <div class="index_header_title ub-f1">{{titlename}}</div>
            <template v-if="edit? false : true">
                <div class="editmoudle_btn el-icon-edit-outline" @click="editmoudle()"> 模块编辑</div>
            </template>
            <template v-if="edit">
                <div class="edit_save edits_btn" @click="edit_save()">保存</div>
                <div class="edit_cancel edits_btn" @click="edit_cancel()">取消</div>
            </template>
            <div class="header-right ub">
                <!-- 消息中心 -->
                <div class="btn-bell">
                    <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
                        <router-link to="/tabs">
                            <i class="el-icon-bell"></i>
                        </router-link>
                    </el-tooltip>
                    <span class="btn-bell-badge" v-if="message"></span>
                </div>
                <!-- 用户名下拉菜单 -->
                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <div class="el-dropdown-link ub">
                        <span>欢迎您 ，{{username}}</span>
                        <div class="user-avator"><img :src="avatar"></div><i class="el-icon-caret-bottom"></i>
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <div class="index_content_box">
            <div class="index_sidebar" ref="index_sidebar" v-if="sliderbarshow">
                <v-sidebar></v-sidebar>
            </div>
            <div class="index_content">
                <template v-if="pageShow === 'admin'">
                    <!-- 平台监测 -->
                    <indexDrag></indexDrag>
                </template>
                <template v-else-if="pageShow === 'test1'">
                    <!-- 集团监测平台 -->
                    <blocDrag></blocDrag>
                </template>
                <template v-else-if="pageShow === 'test2'">
                    <!-- 项目监测 -->
                    <projectDrag></projectDrag>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
import vSidebar from '../components/common/Sidebar.vue';
import bus from '../components/common/bus';
import indexDrag from '../components/common/indexDrag.vue';
import blocDrag from '../components/common/terraceDrag.vue';
import projectDrag from '../components/common/projectDrag.vue'
export default {
    name: 'ghjhkhk',
    data() {
        return {
            collapse: false,
            sliderbarshow: false,
            message: 2,
            edit: false,
            avatar: 'http://up.qqya.com/allimg/201710-t/17-101805_137721.jpg',
            pageShow: localStorage.getItem('ms_username'),
            name: 'admin',
            titlename: ''

        }
    },
    components: {
        // vHead,
        vSidebar,
        indexDrag,
        blocDrag,
        projectDrag

    },
    computed: {
        username() {
            let username = this.$store.state.userName;
            return username ? username : this.name;
        },
        titleName() {

        }
    },
    created() {
        bus.$on('collapse', msg => { this.collapse = msg; })
        bus.$on('edit', msg => { this.edit = msg; });
        let titleName = this.$store.state.userName;
        if (titleName == 'admin') {
            this.titlename = '紫衡能耗监测管理平台';
        } else if (titleName == 'test1') {
            this.titlename = '万达集团能源监测平台';
        } else if (titleName == 'test2') {
            this.titlename = '中山大学附属医院能源监测平台';
        }
    },
    methods: {
        handleCommand(command) {
            if (command == 'loginout') {
                localStorage.removeItem('ms_username')
                this.$router.push('/login');
            }
        },
        sliderbarshows() {
            this.collapse = !this.collapse;
            this.sliderbarshow = !this.sliderbarshow;
            bus.$emit('collapse', this.collapse);
        },
        editmoudle() {
            this.edit = !this.edit;
            bus.$emit('edit', this.edit);
        },
        edit_save() {
            this.edit = false;
            bus.$emit('edit', this.edit);
        },
        edit_cancel() {
            this.edit = false;
            bus.$emit('edit', this.edit);
        }
    },
    watch: {

    }
}

</script>
