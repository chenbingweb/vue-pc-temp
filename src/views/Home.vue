<template>
  <div class="home">
    <el-row class="box" align="middle" type="flex">
      <el-col :span="4" 
        ><div class="grid-content bg-purple">
          <el-input v-model="input" placeholder="请输入内容"></el-input></div
      ></el-col>
      <el-col :span="4"
        ><div class="grid-content bg-purple-light">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          
          </div></el-col
      >
      <el-col :span="4"><div class="grid-content bg-purple">3</div></el-col>
      <el-col :span="4"
        ><div class="grid-content bg-purple-light">5</div></el-col
      >
      <el-col :span="4"><div class="grid-content bg-purple">6</div></el-col>
      <el-col :span="4"
        ><div class="grid-content bg-purple-light">7</div></el-col
      >
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import { test } from '@/api/test.js'
export default {
  name: "Home",
  components: {},
  data() {
    return {
      input: '',
      value:'',
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
    }
  },
  mounted(){
    // this.$loading()
  // test({id:1})
  this.$error('dsd')

   var loading= this.$loading()
   console.log()
   
   this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
    setTimeout(()=>{
     loading.close()
   },2000)
  });


  }
};
</script>
<style  scoped>
.box {
  height: 100px;
}
.home {
  width: 100%;
}
.bg-purple {
  background: red;
}
.bg-purple-light {
  background-color: yellow;
}
</style>
