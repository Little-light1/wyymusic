import Vue from 'vue'
import App from './App.vue'
// 导入axios
import axios from 'axios'
Vue.prototype.$http = axios
// axios.get('localhost：8080',  {headers: {'Cache-Control': 'no-cache'}})

// 导入 Element_ui
import ElementUI from 'element-ui'
// 导入 Element-ui 样式
import 'element-ui/lib/theme-chalk/index.css'
// 插件 Element-ui
Vue.use(ElementUI)

// 导入全局初始化样式
import './assets/index.css'

// 路由整合
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入对应的路由
import discovery from './views/01.discovery.vue'
import playlists from './views/02.playlists.vue'
import songs from './views/03.songs.vue'
import mvs from './views/04.mvs.vue'
import result from './views/05.result.vue'
import playlist from './views/06.playlist.vue'
import mv from './views/07.mv.vue'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/discovery'
    },
    {
      // 发现音乐
      path: '/discovery',
      component: discovery
    },
    {
      // 推荐歌单
      path: '/playlists',
      component: playlists
    },
    {
      // 推荐歌单
      path: '/playlist',
      component: playlist
    },
    {
      // 最新音乐
      path: '/songs',
      component: songs
    },
    {
      // 最新音乐
      path: '/mvs',
      component: mvs
    },
    // mv详情
    {
      path: '/mv',
      component: mv
    },
    // 搜索结果页
    {
      path: '/result',
      component: result
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂载到Vue示例上
  router
}).$mount('#app')

// 时间过滤器分秒

Vue.filter('dataFormat', origin => {
  const dt  = new Date(origin)
  const mm = (dt.getMinutes() + 1 + '').padStart(2, '0')
  const ss = (dt.getSeconds() + 1 + '').padStart(2, '0')
  return `${mm}分${ss}秒`
})

// 时间过滤器 年月日

Vue.filter('time', dt => {
  const date = new Date(dt)
  
  const yy = date.getFullYear()
  const mm = (date.getMonth() + 1 + '').padStart(2, '0')
  const dd = (date.getDay() + 1 + '').padStart(2, '0')

return `${yy}-${mm}-${dd}`

})

Vue.filter('time1', dt => {
  const date = new Date(dt)
  
  const yy = date.getFullYear()
  const mm = (date.getMonth() + 1 + '').padStart(2, '0')
  const dd = (date.getDay() + 1 + '').padStart(2, '0')
  const hh = (date.getHours() + 1 + '').padStart(2, '0')
  const mi = (date.getMinutes() + 1 + '').padStart(2, '0')
  const ss = (date.getSeconds() + 1 + '').padStart(2, '0')

 
return `${yy}-${mm}-${dd} ${hh}:${mi}:${ss}`

})