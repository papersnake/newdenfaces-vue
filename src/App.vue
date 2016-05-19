<style lang="less">
  @import './css/main.less';

</style>
<template>
  <div>
      <div>
      <Navbar></Navbar>
      <router-view></router-view>
      <Footers></Footers>
    </div>
  </div>
</template>

<script>
import Footers from './components/Footer'
import Navbar from './components/Navbar'
import store from './vuex/store'

export default {
  store,
  components: {
    Navbar,
    Footers
  }
}
</script>


