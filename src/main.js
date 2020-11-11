import Vue from 'vue'
import App from './App.vue'
import Vconsole from 'vconsole'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "./libs/element"
import "./libs/test"
import Comm from "@/comm"
Vue.config.productionTip = false
//通用
Vue.use(Comm)
console.log("process.env.VUE_APP_DEBUG",process.env.VUE_APP_DEBUG)
if(process.env.VUE_APP_DEBUG=='1' )
{
  
  new Vconsole()
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
