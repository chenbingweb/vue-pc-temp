<template>
  <div id="app">
    <el-container>
      <el-header>
      <el-row :gutter="0">
        <el-col :span="6"><router-link to="/">User</router-link></el-col>
        <el-col :span="12"><router-link to="/about">about</router-link> </el-col>
        <el-col :span="6"><router-link to="/">User</router-link></el-col>
      </el-row>
      </el-header>
    
        <el-main class="main">
          <keep-alive>
            <router-view/>
          </keep-alive>
        </el-main>
    
      <el-footer>
        
      </el-footer>
    </el-container>
  </div>
</template>

<style lang="scss">
body
{
  margin: 0;
  padding: 0;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    // line-height: 160px;
  }
  .main
  {
    min-height: 500px;
  }
</style>
