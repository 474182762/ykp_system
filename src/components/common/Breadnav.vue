<template>
    <div class="Breadnav ub">
        <div class="el-icon-d-arrow-right ub-f1 Breadnavicon">
        </div>
        <div class="ub-f1">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>{{metas}}</el-breadcrumb-item>
                <el-breadcrumb-item>{{meta}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
      <!-- <div class="moduleEdit w1">
    模块编辑
</div>
 -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            meta: this.$store.state.sidebarItem.meta.title,
            metas: this.$store.state.sidebarItem.metas,
            
        }
    },
    created() {},
    computed: {
        getmeta() {
            return this.$store.state.sidebarItem.meta.title;
        }
    },
    methods: {
        setmeta() {
            let items = this.$store.state.sidebarItem.items;
            for (var i = items.length - 1; i >= 0; i--) {
                if (items[i].subs) {
                    let item = items[i].subs;
                    for (var j = item.length - 1; j >= 0; j--) {
                        if (item[j].title == this.$store.state.sidebarItem.meta.title) {
                            this.metas = items[i].title;
                            this.$store.state.sidebarItem.metas = items[i].title;
                        } else {

                        }

                    }
                }

            }
        }
    },
    watch: {
        getmeta() {
            this.meta = this.$store.state.sidebarItem.meta.title;
            this.setmeta();
        }
    }
}

</script>
<style scoped>
.Breadnav {
    width: 100%;
    height: 36px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 1px 0px 1px rgba(216, 227, 233, 0.31);
}

.Breadnavicon {
    margin: 10px;
}

.el-breadcrumb {
    line-height: 36px;
}

.moduleEdit {
    width: 84px;
    height: 24px;
    background: rgba(24, 129, 191, 1);
    border-radius: 11px;
    font-size: 12px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    margin: 6px;
    margin-right: 30px;
}

</style>
