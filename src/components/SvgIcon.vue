<template>
  <svg class="svg-icon" :class="classes" v-bind="iconSettings" xmlns="http://www.w3.org/2000/svg">
    <title v-if="title">{{ title }}</title>
    <use :xlink:href="`#${name}`" xmlns:xlink="http://www.w3.org/1999/xlink" />
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",

  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    iconSettings: {
      type: Object,
      default: null,
    },
  },

  computed: {
    classes() {
      const prefix = "svg-icon";
      return {
        [`${prefix}--${this.name}`]: true,
        [`${prefix}--filled`]: this.filled,
        [`${prefix}--stroked`]: this.stroked,
        [`${prefix}--${this.color}`]: this.color,
      };
    },
  },

  watch: {
    name: async function (value) {
      await this.fetch(value);
    },
  },

  async beforeMount() {
    await this.fetch(this.name);
  },

  methods: {
    async fetch(name) {
      await require(`@/assets/icons/${name}.svg`);
    },
  },
};
</script>

<style lang="stylus">
.svg-icon {
  font-size: inherit;
  color:inherit
  fill currentColor
  stroke currentColor
  height 100%
  width 100%
}
</style>
