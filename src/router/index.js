import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routerConfig"
Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  console.log(to)
   console.log('跳转之前',window.location.href)
  document.title = to.meta.title ||'标题'
   
  //  //判断是否登录注册
  //  if(!store.getters.getToken){
  //       store.dispatch('wxLogin',next)
  //  }
  //  else
  //  {
    
  //    next()
  //  }
   next()
})
router.afterEach((to,from)=>{
   
    console.log(to)
    console.log('跳转之后',window.location.origin+to.fullPath)
    // if(!tool.isIos())
    // {
      
    //   WXFN.InitJsTicket(window.location.origin+to.fullPath)
    // }
    // else
    // {
    //   // setTimeout(()=>{
    //   //   WXFN.InitJsTicket(window.location.origin+to.fullPath)
    //   // },2000)
 
    // }
    //WXFN.InitJsTicket(window.location.origin+to.fullPath)
  

    
})
export default router
