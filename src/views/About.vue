<template>
  <div class="about">
   <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/about' }">about首页</el-breadcrumb-item>
    <el-breadcrumb-item to="/about/child">child</el-breadcrumb-item>
    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
  </el-breadcrumb>
  <keep-alive>
     <router-view/>
  </keep-alive>

  
  </div>
</template>
<script>
import {  mapActions,mapState ,mapMutations,mapGetters} from "vuex"
import Tool from "@/libs/tool"
export default {
    //注册子组件
    components: {
        
    },
    data() {
        return {
           
        }
    },
    //计算属性
    computed: {
        //  ...mapState('detail/',{
        //     detail: state =>state.detail,
        // }),
        // ...mapGetters('home/',['banner','classify','recommend','indexClassify']),
        name() {
            return this.data 
        }
    },
    //页面创建完成
    created () {
        
    },
    //页面加载完成
    mounted () {
        
    },
    methods:{
        // ...mapActions('home/',[
        // 'getBanner',
        // 'getClassify',
        // 'getRecommendCourse',
        // 'alertAd',
        // ]),
        // ...mapMutations(['setCategory']),
    }
}
</script>