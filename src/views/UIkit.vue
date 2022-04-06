<template>
  <div class="ui-kit">
    <h3>Набор компонентов</h3>
  </div>
</template>

<script>
export default {
  name: "UIkit",
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/vars/variables';
@require '~@/assets/stylus/mixins/mixins';
.ui-kit
  flexy(center,center)
</style>
