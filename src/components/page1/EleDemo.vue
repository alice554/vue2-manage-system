<template>
<!--组件内容需包含在一个元素中-->
<div class="wrapper">
    <p>ncxujn </p>
    <!-- 外层容器 -->
    <el-container style="height: 400px; border: 2px solid #eee">
    <!-- 侧边栏容器 -->
    <!-- <el-aside width="200px"> -->
    <!-- 莱单 -->
    <!-- <el-menu :default-openeds="['l']"> -->
    <!-- <el-submenu index="1"> -->
    <!-- <template slot="title"><i class="el-icon-message"></i>导航</template> -->
    <el-menu-item-group>
     <template slot="title">分组一</template>
       <el-menu-item index="1-1">选项 1</el-menu-item>
       <el-menu-item index="1-2">选项 2</el-menu-item>
     </el-menu-item-group>
</el-container>
</div>