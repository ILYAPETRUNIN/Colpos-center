<template>
  <div class="ui-kit">
    <h1>Набор компонентов</h1>
    <div class="ui-kit__input ui-kit__input_light">
      <h3>Элементы ввода</h3>
      <base-text-field suffixIcon="messange-cloud" />
      <svg-icon name="messange-cloud" />
    </div>
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
$background=$theme-light.primary.base

.ui-kit
  flexy(center,center,nowrap,column)
  &__input
    padding 30px
    &_light
      background:$background

.base-chip__icon
  font-size 24px
</style>
