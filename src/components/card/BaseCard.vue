<template>
  <div class='base-card'>
    <slot/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/vars/variables';
@require '~@/assets/stylus/mixins/mixins';
$background=$theme-light.primary.base
.base-card
  width 100%
  background:$background
  border-radius: 30px;
  color white
  padding 40px
</style>