<template>
  <div class='slider-btn'>
    <div @click='prev' v-ripple class='slider-btn__btn'><svg-icon   class='slider-btn__btn_icon' name='arrow-down'/></div>
    <div  v-for='(n,index) in max' :key='index' :class='{"slider-btn__dot_active":inputVal==index}' class='slider-btn__dot'/>
    <div @click='next' v-ripple class='slider-btn__btn'><svg-icon class='slider-btn__btn_icon' name='arrow-down'/></div>
  </div>
</template>

<script>
import Ripple from 'vue-ripple-directive'
export default {
    directives:{'ripple':Ripple},
    props:{
      max:{
        type:Number,
        default:2
      },
      value:{
        type:Number,
        default:0
      },
      circle:{
        type:Boolean,
        default:false
      }
    },
    computed:{
    inputVal: {
      get() {
          return this.value;
      },
      set(value) {
          this.$emit("input", value);
      }
    },
  },
  methods:{
    next(){
      if(this.inputVal<(this.max-1)) this.inputVal++
      else if(this.circle) this.inputVal=0
    },
    prev(){
      if(this.inputVal!=0)this.inputVal--
      else if(this.circle) this.inputVal=this.max-1
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/mixins/mixins';
@require '~@/assets/stylus/vars/variables';
$current-color=$theme-light.primary.base
$hover-color=$theme-light.primary.lightest1

.slider-btn
  flexy(center,center,nowrap,column)
  &__btn
    flexy(center,center)
    cursor pointer
    width 42px
    height 42px
    border-radius 100%
    transition all 0.5s
    margin 30px 0px
    &:hover
      background $hover-color
    &:first-child
      transform rotate(180deg)
    &_icon
      color:$current-color
      width 14px
      height 14px
  &__dot
    background: #FFFFFF;
    border-radius: 10px;
    width: 8.29px;
    height: 8.29px;
    margin 8px 0px
    &_active
      background: $current-color;
      width: 28.09px;
      height: 8.29px;
      transition 0.25s all
    
</style>