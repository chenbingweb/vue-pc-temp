import {  Loading,
    MessageBox,
    Message,
    Notification
  } from 'element-ui';
  export default function Alert(Vue){
    //警告提示
    Vue.prototype.$tip = function (message) {
        Message({ type: 'warning', message: message||'警告提示' });
    }
    //错误提示
    Vue.prototype.$error = function (message) {
        Message({ type: 'error', message: message||'错误提示' });
    }
    //加载
    Vue.prototype.$loading = function(param){
        //loading.close();
       return Loading.service({
           ...param
       })
    }
  }