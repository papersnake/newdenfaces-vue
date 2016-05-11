<style lang="less">
  @import './css/main.less';

</style>
<template>
  <div>
    <router-view></router-view>
    <Footers></Footers>
  </div>
</template>

<script>
import Footers from './components/Footer'
import store from './vuex/store'
export default {
  store,
  components: {
    Footers
  }
}
</script>


