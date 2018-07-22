import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const First = (resolve)=>{
  import('@/components/first').then((module)=>{
    resolve(module)
  })
}
const First1 = (resolve)=>{
  import('@/components/first1').then((module)=>{
    resolve(module)
  })
}
const Second = (resolve)=>{
  import('@/components/second').then((module)=>{
    resolve(module)
  })
}
const Second1 = (resolve)=>{
  import('@/components/Second2').then((module)=>{
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
     path:'/',
     redirect:'/first'
    },
    {
      path:'/first',
      component:First,
      children:[{
        path:':id',
        component:First1
      }]
    },
    {
      path:'/second',
      component:Second,
      children:[{
        path:'/second1',
        component:Second1
      }]
    }
  ]
})
