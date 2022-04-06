<template>
  <div class="ui-kit">
    <h3>Набор компонентов</h3>
    <svg-icon name="whatsapp" class="base-chip__icon" />
  </div>
</template>

<script>
export default {
  name: "UIkit",
  computed: {},
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/vars/variables';
@require '~@/assets/stylus/mixins/mixins';
.ui-kit
  flexy(center,center)
.base-chip__icon
  font-size 24px
</style>
