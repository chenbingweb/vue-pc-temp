
import {tool} from "@/libs/tool"
import Alert from "@/comm/alert"
let Obj={
    install:function(Vue,option){
        Alert(Vue)
       //添加指令
       Vue.prototype.$tool = tool;
    }
  }
  export default Obj