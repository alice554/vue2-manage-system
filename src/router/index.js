// import Vue from 'vue';
// import Router from 'vue-router';
// import vHome from '../components/common/Home.vue';
// // import vLogin from '../components/page/Login.vue';

// // 引入路由插件
// Vue.use(Router);

// export default new Router({
//     routes: [
//         {
//             path: '/home',
//             component: vHome,
//             children: [
//                 {
//                     path: 'child',
//                     component: () => import('../components/page1/Children.vue')
//                 },
//                 {
//                     path: 'child1',
//                     component: () => import('../components/page1/Children1.vue')
//                 },
//                 {
//                     path: 'child2',
//                     component: () => import('../components/page1/Children2.vue')
//                 },
//                 {
//                     path: 'child3',
//                     component: () => import('../components/page1/Children3.vue')
//                 },
//                 {
//                     path: 'first',
//                     component: () => import('../components/page1/First.vue')
//                 },
//                 {
//                     path: 'second',
//                     component: () => import('../components/page1/Second.vue')
//                 },
//             ],
//         },
//         {
//             path: '/demo',
//             component: () => import('../components/page1/EleDemo.vue')
//         },
//     ],
// });

import Vue from 'vue';
import Router from 'vue-router';
// 引入路由插件
Vue.use(Router);
// 注册路由
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: 'dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: 'table',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/BaseTable.vue'),
                    meta: { title: '基础表格' }
                },
                {
                    path: 'tabs',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/Tabs.vue'),
                    meta: { title: 'tab选项卡' }
                },
                {
                    // 富文本编辑器组件
                    path: 'editor',
                    component: () => import(/* webpackChunkName: "editor" */ '../components/page/VueEditor.vue'),
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: 'markdown',
                    component: () => import(/* webpackChunkName: "markdown" */ '../components/page/Markdown.vue'),
                    meta: { title: 'markdown编辑器' }
                },
                {
                    // 图片上传组件
                    path: 'upload',
                    component: () => import(/* webpackChunkName: "upload" */ '../components/page/Upload.vue'),
                    meta: { title: '文件上传' }
                },
                {
                    // vue-Echarts组件
                    path: 'charts',
                    component: () => import(/* webpackChunkName: "chart" */ '../components/page/BaseCharts.vue'),
                    meta: { title: 'Echarts图表' }
                },
                {
                    // vue-Echarts组件
                    path: 'chart',
                    component: () => import(/* webpackChunkName: "chart" */ '../components/page/chart.vue'),
                    meta: { title: 'Echarts图表' }
                },
                {
                    // 拖拽列表组件
                    path: 'drag',
                    component: () => import(/* webpackChunkName: "drag" */ '../components/page/DragList.vue'),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 拖拽Dialog组件
                    // 该路由的访问路径为 /dialog
                    path: 'dialog',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/DragDialog.vue'),
                    meta: { title: '拖拽弹框' }
                },
                {
                    // 国际化组件
                    path: 'i18n',
                    component: () => import(/* webpackChunkName: "i18n" */ '../components/page/I18n.vue'),
                    meta: { title: '国际化' }
                },
                {
                    // 权限页面
                    path: 'permission',
                    component: () => import(/* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    // 权限页面
                    path: 'button',
                    component: () => import(/* webpackChunkName: "permission" */ '../components/page/button.vue'),
                    meta: { title: '自定义按钮', permission: true }
                },
                {
                    // 权限页面
                    path: 'mybutton',
                    component: () => import(/* webpackChunkName: "permission" */ '../components/page/mybutton.vue'),
                    meta: { title: '自定义按钮', permission: true }
                },
                {
                    path: '404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                },
                {
                    path: '888',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/888.vue'),
                    meta: { title: 'VIP' }
                }
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: 'Login' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
