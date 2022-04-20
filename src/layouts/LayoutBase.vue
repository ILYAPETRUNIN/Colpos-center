<template>
  <div class="layout-base">
    <desctop-menu/>
    <router-view class="layout-base__page"/>
  </div>
</template>

<script>
import DesctopMenu from './components/DesctopMenu.vue'
export default {
  components:{DesctopMenu}
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/vars/variables';
@require '~@/assets/stylus/mixins/mixins';
.layout-base
  padding 45px
  flexy(flex-start,center)
  &__page
    width 100%
    flexy(center,center)
</style> 
