<template>
  <div class='base-btn__main' @click='click' :class="[getTheme,getSize,getFullscreen]">
    <component :href='url' :is='getTag' :class='[getClasses,colorIcon]' :disabled='disabled' v-ripple  class='base-btn'>
      <slot name='preffix'>
      </slot>
      {{label}}
      <svg-icon  class="base-btn__icon"  v-if="icon" :name="iconName" />
      <slot  name='suffix'>
      </slot>
    </component>
  </div>
</template>

<script>
import Ripple from 'vue-ripple-directive'

export default {
  directives:{
    'ripple':Ripple
  },
  props:{
    label:{
      type:String,
      default:''
    },
    theme: {
      type: String,
      default: "dark",
      validator: (value) => {
        return ["light", "dark",'lightest'].includes(value);
      },
    },
    size: {
      type: String,
      default: "xs",
      validator: (value) => {
        return ["xs","ms","md",'lg'].includes(value);
      },
    },
    disabled:{
      type:Boolean,
      default:false
    },
    icon:{
      type:Boolean,
      default:false
    },
    round:{
      type:Boolean,
      default:false
    },
    iconName: {
      type: String,
      default: "",
    },
    fullscreen:{
      type: Boolean,
      default: false,
    },
    colorIcon:{
      validator: (value) => {
        return ["primary","secondary","third",""].includes(value);
      },
    },
    flat:{
      type:Boolean,
      default:false
    },
    url:{
      type:String,
      default:''
    },
    text:{
      type:Boolean,
      default:false
    }
  },
  computed:{
    getTheme(){
      return `${this.theme}`
    },
    getSize(){
      return `size_${this.size}`
    },
    getFullscreen(){
      return this.fullscreen ? 'fullscreen':""
    },
    getClasses() {
      return [
        (this.focused && this.focusable) ? `focused` : "",
        this.disabled ? `disabled` :"",
        this.icon ? 'icon' : "",
        this.round ? 'round' : "",
        this.flat ? 'flat' :"",
        this.text ? 'text' :""
      ];
    },
    getTag(){
      return this.url ? 'a' : 'button'
    }
  },
  methods:{
    click(){
      this.$emit('click')
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/mixins/mixins';
@require '~@/assets/stylus/vars/variables';

$lightest={
  base:$theme-light.primary.lightest2
  text:white
  contrast:$theme-light.primary.dark6
  disabled:$theme-light.secondary.light1
}

$light={
  base:white
  text:$theme-light.secondary.base
  contrast:$theme-light.primary.dark5
  disabled:$theme-light.secondary.light1
}

$dark={
  base:$theme-light.primary.dark1
  text:white
  contrast:$theme-light.primary.dark6
}

$primary=$theme-light.primary.base
$secondary=$theme-light.secondary.base
$third=$theme-light.third.base


.primary
  color:$primary !important
.secondary
  color:$secondary !important
.third
  color:$third !important



theme($theme)
  .base-btn
    background $theme.base
    color $theme.text
  .base-btn:hover
    background:$theme.contrast
    color:white !important
  .disabled
    background $theme.disabled !important
    color:white
  .text
    color:$theme.base
    &:hover
      color:$theme.contrast !important

.dark
  theme($dark)
.light
  theme($light)
.lightest
  theme($lightest)

.base-btn
  width 100%
  flexy(center,center)
  height 100%
  outline none
  border none
  border-radius: 10px;
  setFont(16px,500)
  cursor pointer
  transition all 0.5s
  &__main
    flexy()

.disabled
  cursor auto
.icon
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
.round
  border-radius: 100%;
.size_xs
  .text
    setFont(12px,400)
    .svg-icon
      margin-right 7px
      width 20px
      height 20px
  .icon
    width 36px
    height 36px
    .base-btn__icon
      width: 22px;
      height: 22px;
.size_ms
  .icon
    width 48px
    height 48px
    .base-btn__icon
      width: 19.7px;
      height: 17.17px;
.size_md
  .icon
    width 68px
    height 62px
    .base-btn__icon
      width: 23.06px;
      height: 22.82px;
.fullscreen
  width 100%
  height 52px
.flat 
  background:none !important
  box-shadow: none !important
.text
  background:none !important
  text-align start    
  justify-content: flex-start !important
</style>