import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageEditor from '@/components/PageEditor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/editor',
      name: 'PageEditor',
      component: PageEditor
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
