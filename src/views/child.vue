<template>
    <div>
       <el-input v-model="input" placeholder="请输入内容d"></el-input>
         <cb-test class="jj">
             <template>
                 <div>时间的话</div>
                  <div>右边</div>
             </template>
         </cb-test>
       <el-row :gutter="0" class="container" type="flex" justify="center" align="middle">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" class="hidden-xs-only"><div class="grid-content bg-purple">12</div></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">323</div></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple">4</div></el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
            <el-row :gutter="0" type="flex" justify="center" align="middle">
                <el-col :offset="0" :span="6">是</el-col>
             
                <el-col :span="6">是的</el-col>
                <el-col :span="6">232</el-col>
              
            </el-row>

        </el-col>
        </el-row>
    </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
    export default {
        data() {
            return {
                input: ''
            }
        },
        components:{
            
        }
    }
</script>

<style lang="scss" scoped>
    .bg-purple
    {
        background-color: red;
    }
    .bg-purple-light
    {
        background-color: yellow;
    }
    .container
    {
        widows: 100%;
        height: 400px;
    }
</style>