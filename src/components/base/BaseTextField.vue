<template>
  <div class="base-text-field" :class="classes">
    <svg-icon v-if="preffixIcon" :name="preffixIcon" />
    <input
      @focus="focused = true"
      @blur="focused = false"
      class="base-text-field__input"
      type="text"
      :placeholder="label"
    />
    <svg-icon v-if="suffixIcon" :name="suffixIcon" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      focused: false,
    };
  },
  computed: {
    classes() {
      const prefix = "base-text-field";
      return [
        `${prefix}_${this.theme}`,
        this.focused ? `${prefix}_focused` : "",
      ];
    },
  },
  props: {
    label: {
      type: String,
      default: "Представьтесь",
    },
    theme: {
      type: String,
      default: "light",
      validator: (value) => {
        return ["light", "dark"].includes(value);
      },
    },
    preffixIcon: {
      type: String,
      default: "",
    },
    suffixIcon: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/mixins/mixins';
@require '~@/assets/stylus/vars/variables';

$color-blue=$theme-light.primary.lightest2

.base-text-field
  transition:all 0.5s
  flexy()
  padding-bottom 5px
  &__input
    width 100%
    height 28px
    setFont(14px,500)
    border none
    outline: none;
    color:inherit
    background: transparent
    &::placeholder
      color:inherit
      opacity 1

  &_light
    border-bottom 1px solid $color-blue
    color:white
  &_focused
    border-bottom 1px solid white
</style>
