<template>
  <el-container style="height: 100vh;">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-openeds="['1','2', '3']" unique-opened :default-active="$route.path">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>
            分类管理
          </template>
          <el-menu-item-group>
            <template slot="title">音乐分类</template>
            <el-menu-item index="/items/create">新建分类</el-menu-item>
            <el-menu-item index="/items/list">分类列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-message"></i>
            商品管理
          </template>
          <el-menu-item-group>
            <template slot="title">商品分类</template>
            <el-menu-item index="/categories/create">新建商品</el-menu-item>
            <el-menu-item index="/categories/list">商品列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-menu"></i>
            后台管理
          </template>
          <el-menu-item-group>
            <template slot="title">分类</template>
            <el-menu-item index="/admin_users/create">新建用户</el-menu-item>
            <el-menu-item index="/admin_users/list">用户列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>凉风</span>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style>
.el-header {
  background-color: #333;
  color: #333;
  line-height: 60px;
}
.el-header span {
  color: #fff;
}
.el-aside {
  color: #333;
}
html,
body {
  margin: 0;
  padding: 0;
}
</style>

<script>
export default {};
</script>
