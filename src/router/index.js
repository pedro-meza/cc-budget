import Vue from 'vue'
import VueMaterial from 'vue-material'
import Router from 'vue-router'
import Welcome from '@/components/welcome/Welcome'
import Upload from '@/components/upload/Upload'

Vue.use(VueMaterial)
Vue.use(Router)

Vue.material.registerTheme({
  default: {
    primary: {
      color: 'orange',
      hue: 700
    },
    accent: 'grey'
  },
  teal: {
    primary: 'blue',
    accent: 'pink'
  },
  purple: {
    primary: 'purple',
    accent: 'orange'
  }
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    }
  ]
})
