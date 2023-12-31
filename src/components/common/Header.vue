<template>
    <!-- 公共头部组件 -->
        <div class="header">
            <!-- 折叠按钮 -->
            <div class="collapse-btn" @click="collapseChage">
                <!-- 通过v-if和v-else来判定侧边栏打开状态 -->
                <i v-if="!collapse" class="el-icon-s-fold"></i>
                <i v-else class="el-icon-s-unfold"></i>
            </div>
            <div class="logo">后台管理系统</div>
            <div class="header-right">
                <div class="header-user-con">
                    <!-- 全屏显示 -->
                    <div class="btn-fullscreen" @click="handleFullScreen">
                        <!-- 通过三元表达式来显示不同的文字提示，placement属性控制文字提示出现的位置 -->
                        <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                            <i class="el-icon-rank"></i>
                        </el-tooltip>
                    </div>
                    <!-- 消息中心 -->
                    <div class="btn-bell">
                        <el-tooltip
                            effect="dark"
                            :content="message?`有${message}条未读消息`:`消息中心`"
                            placement="bottom"
                        >
                            <router-link to="/tabs">
                                <i class="el-icon-bell"></i>
                            </router-link>
                        </el-tooltip>
                        <!-- 通过对message的判定，来决定是否显示小红点 -->
                        <span class="btn-bell-badge" v-if="message"></span>
                    </div>
                    <!-- 用户头像 -->
                    <div class="user-avator">
                        <img src="../../assets/img/face.jpg" />
                    </div>
                    <!-- 用户名下拉菜单：trigger属性配置 click 激活 -->
                    <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                        <span class="el-dropdown-link">
                            {{username}}
                            <i class="el-icon-caret-bottom"></i>
                        </span>
                        <!-- slot设置下拉列表 -->
                        <el-dropdown-menu slot="dropdown">
                            <a href="" target="_blank">
                                <el-dropdown-item>项目仓库</el-dropdown-item>
                            </a>
                            <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
    </template>
    <script>
    // 加载bus实现组件通信
    import bus from '../../utils/bus';
    export default {
        data() {
            return {
                collapse: false,
                fullscreen: false,
                // 候补用户名，如果从本地存储中未获取到用户名，则使用该值作为用户名
                name: 'Alice',
                message:2
            };
        },
        // 监控自定义属性
        computed: {
            username() {
                // 从本地存储中获取值
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods: {
            // 用户名下拉菜单选择事件
            handleCommand(command) {
                //退出登录事件
                if (command == 'loginout') {
                    // 从本地存储中删除用户名
                    localStorage.removeItem('ms_username');
                    // 跳转到登录页面
                    this.$router.push('/login');
                }
            },
            // 侧边栏折叠
            // 通过 Vue.js 的事件总线机制（即 bus）向其他组件发送 collapse 事件，并传递当前侧边栏的状态 this.collapse
            collapseChage() {
                this.collapse = !this.collapse;
                // 通过bus发送信息
                bus.$emit('collapse', this.collapse);
            },
            // 全屏事件
            handleFullScreen() {
                // 获取文档对象的根元素
                let element = document.documentElement;
                if (this.fullscreen) {
                    // 设置不同浏览器下的退出全屏模式
                    // 首先检查当前文档对象是否支持 exitFullscreen 方法，如果支持则调用该方法退出全屏模式。
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                } else {
                    // 设置不同浏览器下的进入全屏模式
                    if (element.requestFullscreen) {
                        element.requestFullscreen();
                    } else if (element.webkitRequestFullScreen) {
                        element.webkitRequestFullScreen();
                    } else if (element.mozRequestFullScreen) {
                        element.mozRequestFullScreen();
                    } else if (element.msRequestFullscreen) {
                        // IE11
                        element.msRequestFullscreen();
                    }
                }
                this.fullscreen = !this.fullscreen;
            }
        },
        // 初始化页面完成后，对页面可见区域宽度进行判定
        // 获取当前页面的宽度，如果宽度小于 1500 像素，则调用组件的 collapseChage 方法，将侧边栏折叠起来
        mounted() {
            if (document.body.clientWidth < 1500) {
                this.collapseChage();
            };
            bus.$on('msg',(e) => {
                this.message = e;
            })
        }
    };
    </script>
    <style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        color: #fff;
    }
    .collapse-btn {
        float: left;
        padding: 0 21px;
        cursor: pointer;
        line-height: 70px;
    }
    .header .logo {
        float: left;
        width: 250px;
        line-height: 70px;
    }
    .header-right {
        float: right;
        padding-right: 50px;
    }
    .header-user-con {
        display: flex;
        height: 70px;
        align-items: center;
    }
    .btn-fullscreen {
        transform: rotate(45deg);
        margin-right: 5px;
        font-size: 24px;
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
        top: -2px;
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
    }
    .user-avator {
        margin-left: 20px;
    }
    .user-avator img {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .el-dropdown-link {
        color: #fff;
        cursor: pointer;
    }
    .el-dropdown-menu__item {
        text-align: center;
    }
    </style>
    