<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>
<script>
import bus from '../common/bus';
import api from '../../axios/api.js';
export default {
    data() {
        return {
            collapse: false,
            items: []
        }
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    created() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
        });
        this.getsliderlist();
    },
    methods: {
        getsliderlist: function() {
            api.ajax('/sliderbar/list').then(res => {
                this.items = res;
                this.$store.state.sidebarItem.items = res;
            })
        },
    }
}

</script>
<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0px;
    top: 60px;
    bottom: 0;
    overflow-y: scroll;
    z-index: 2003;
}

.sidebar::-webkit-scrollbar {
    width: 0;
}

.sidebar-el-menu:not(.el-menu--collapse) {
    width: 200px;
    background: #094076;
}

.sidebar>ul {
    height: 100%;
}

</style>
