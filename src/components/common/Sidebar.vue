<template>
    <!-- 公共侧边栏组件 -->
        <div class="sidebar">
            <el-menu
                class="sidebar-el-menu"
                :default-active="onRoutes"
                :collapse="collapse"
                background-color="#324157"
                text-color="#bfcbd9"
                active-text-color="#20a0ff"
                unique-opened
                router
            >
            <!-- 对items进行遍历 -->
                <template v-for="item in items">
                    <!-- 使用v-if判定是否具有第二级菜单 -->
                    <template v-if="item.subs">
                        <el-submenu :index="item.index" :key="item.index">
                            <template slot="title">
                                <i :class="item.icon"></i>
                                <!-- 如果存在第二级菜单，渲染第一级菜单标题 -->
                                <span slot="title">{{ item.title }}</span>
                            </template>
                            <!-- 遍历第二级菜单 -->
                            <template v-for="subItem in item.subs">
                                <!-- 判定是否具有第三级菜单 -->
                                <el-submenu
                                    v-if="subItem.subs"
                                    :index="subItem.index"
                                    :key="subItem.index"
                                >
                                <!-- 如果存在第三级菜单，渲染第二级菜单标题 -->
                                    <template slot="title">{{ subItem.title }}</template>
                                    <!-- 遍历第三级菜单，并渲染第三级菜单标题 -->
                                    <el-menu-item
                                        v-for="(threeItem,i) in subItem.subs"
                                        :key="i"
                                        :index="threeItem.index"
                                    >{{ threeItem.title }}</el-menu-item>
                                </el-submenu>
                                <!-- 如果不存在第三级菜单，渲染第二级菜单标题 -->
                                <el-menu-item
                                    v-else
                                    :index="subItem.index"
                                    :key="subItem.index"
                                >{{ subItem.title }}</el-menu-item>
                            </template>
                        </el-submenu>
                    </template>
                    <template v-else>
                        <!-- 如果不存在第二级菜单，渲染第一级菜单标题 -->
                        <el-menu-item :index="item.index" :key="item.index">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </el-menu-item>
                    </template>
                </template>
            </el-menu>
        </div>
    </template>
    
    <script>
    import bus from '../../utils/bus';
    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-lx-home',
                        index: 'dashboard',
                        title: '系统首页'
                    },
                    {
                        icon: 'el-icon-lx-cascades',
                        index: 'table',
                        title: '基础表格'
                    },
                    {
                        icon: 'el-icon-lx-copy',
                        index: 'tabs',
                        title: 'tab选项卡'
                    },
                    {
                        icon: 'el-icon-pie-chart',
                        index: 'charts',
                        title: 'Echarts图表'
                    },
                    {
                        icon: 'el-icon-pie-chart',
                        index: 'button',
                        title: '自定义按钮'
                    },
                    // {
                    //     icon: 'el-icon-pie-chart',
                    //     index: 'mybutton',
                    //     title: '自定义按钮'
                    // },
                    {
                        icon: 'el-icon-pie-chart',
                        index: 'chart',
                        title: 'Echarts图表'
                    },
                    {
                        icon: 'el-icon-rank',
                        index: '1',
                        title: '拖拽组件',
                        subs: [
                            {
                                index: 'drag',
                                title: '拖拽列表'
                            },
                            {
                                index: 'dialog',
                                title: '拖拽弹框'
                            }
                        ]
                    },
                    
                    {
                        icon: 'el-icon-folder',
                        index: '2',
                        title: '文件处理',
                        subs: [
                            {
                                index: 'upload',
                                title: '文件上传'
                            },
                            {
                                index: '2-2',
                                title: '文本编辑器',
                                subs: [
                                    {
                                        index: 'editor',
                                        title: '富文本编辑器'
                                    },
                                    {
                                        index: 'markdown',
                                        title: 'markdown编辑器'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-lx-global',
                        index: 'i18n',
                        title: '国际化功能'
                    },
                    {
                        icon: 'el-icon-lx-warn',
                        index: '7',
                        title: '错误处理',
                        subs: [
                            {
                                index: 'permission',
                                title: '权限测试'
                            },
                            {
                                index: '404',
                                title: '404页面'
                            },
                            {
                                index: '888',
                                title: 'VIP页面'
                            }
                        ]
                    }
                ]
            };
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
                bus.$emit('collapse-content', msg);
            });
        }
    };
    </script>
    
    <style scoped>
    .sidebar {
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom: 0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar {
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse) {
        width: 250px;
    }
    .sidebar > ul {
        height: 100%;
    }
    </style>
    