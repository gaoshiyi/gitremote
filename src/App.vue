<template>
  <div id="app">
    <navview></navview>

      <router-view></router-view>

    
    <tab></tab>
  </div>
</template>

<script>
import navview from '@/base/nav-view'
import tab from '@/base/tab'
export default {
  name: 'App',
  components:{
    navview,
    tab
  },

  
}
</script>

<style style lang="scss" scoped="" type="text/css">


</style>
