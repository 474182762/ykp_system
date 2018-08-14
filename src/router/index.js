import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        redirect: '/index'
    },
        {
            path: '/index',
            name: 'index',
            component: resolve => require(['../views/indexpage.vue'], resolve),
            meta: {title: '首页概览',}
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: {title: ''},
            children: [{
                path: '/home',
                component: resolve => require(['../views/HomePage.vue'], resolve),
                meta: {title: '首页概览', permission: 'admin'}
            },
               
                {
                    path: '/PowerDistributionMonitoring',
                    component: resolve => require(['../views/equipment_monitoring/PowerDistributionMonitoring.vue'], resolve),
                    meta: {title: '配电监测'}
                },
                {
                    path: '/MeterMonitoring',
                    component: resolve => require(['../views/equipment_monitoring/MeterMonitoring.vue'], resolve),
                    meta: {title: '表计监测'}
                },
                {
                    path: '/EnvironmentalMonitoring',
                    component: resolve => require(['../views/equipment_monitoring/EnvironmentalMonitoring.vue'], resolve),
                    meta: {title: '环境监测'}
                },
                {
                    path: '/ServiceMonitoring',
                    component: resolve => require(['../views/equipment_monitoring/ServiceMonitoring.vue'], resolve),
                    meta: {title: '服务监测'}
                },
               
                // {
                //     path: '/DemoList',
                //     component: resolve => require(['../views/SystemSettings/DemoList.vue'], resolve)
                // },
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '/403',
            component: resolve => require(['../components/page/403.vue'], resolve)
        },
        {
            path: '/tabs',
            component: resolve => require(['../components/page/Tabs.vue'], resolve)
        },

        {
            path: '*',
            redirect: '/404'
        }
    ]
})
