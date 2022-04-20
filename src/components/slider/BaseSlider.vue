<template>
  <div class='base-slider'>
      <div class='base-slider__wrapper_3'>
        <div class='base-slider__img base-slider__img_1' v-bind:style="{ 'background-image': 'url(' + url + ')' }"/>
        <slot/>
      </div>
      <div class='base-slider__wrapper'>
        <div class='base-slider__img base-slider__img_2' v-bind:style="{ 'background-image': 'url(' + url + ')' }"/>
        <div class='base-slider__wrapper_2'>
          <div class='base-slider__wrapper_1'>
            <div class='base-slider__img base-slider__img_3' v-bind:style="{ 'background-image': 'url(' + url + ')' }"/>
            <slider-btn circle class='base-slider__btn' :max='urlList.length' v-model='step'/>
          </div>
          <div class='base-slider__img base-slider__img_4' v-bind:style="{ 'background-image': 'url(' + url + ')' }"/>
        </div>
      </div>
  </div>
</template>

<script>
import SliderBtn from './SliderBtn'

const urlList=['./test1.jpg','./test2.jpg','./test3.jpg']
export default {
  components:{SliderBtn},
  props:{
    urls:{
      default:'./test.jpg',
      loading:false
    }
  },
  data(){
    return{
      step:1,
      urlList
    }
  },
  computed:{
    url(){
      return this.urlList[this.step]
    }
  },
  watch:{
    url(){
      this.loading=true
      setTimeout(()=>this.loading=false,500)
    }
  }

}
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/mixins/mixins';
@require '~@/assets/stylus/vars/variables';
$current-color=$theme-light.primary.opacity
.base-slider
  width 100%
  max-width 1150px
  flexy(center,flex-start)
  +breakpoint(sm-and-down){
    max-width 726px
  }
  &__wrapper
    width 63.14%
    flexy(flex-start,flex-start,nowrap,column)
    +breakpoint(sm-and-down){
      width 100%
    }
    &_1
      width 131.37px
      flexy(center,center,nowrap)
    &_2
      width 100%
      flexy(flex-start,flex-start,nowrap)
    &_3
      width 34.86%
      margin-right 2px
  &__btn
    position: absolute
  &__img
    background-size: 1150px auto;
    border-radius: 30px;
    position relative
    background-color $current-color

    &_1
      width 100%
      height 228.18px
      transition: 1.5s;
      margin-bottom 2px
      +breakpoint(sm-and-down){
        display:none
      }
    &_2
      width 100%
      height 387.82px
      background-position-x:95%
      transition: 0.5s;
    &_3
      width 100%
      height 348.91px
      background-position-x:38.7%
      background-position-y:-401.19px
      margin-top 2px
      transition: 0.5s;
    &_4
      width 100%
      height 221.04px
      margin-top 2px
      margin-left 2px
      transition: 1s;
      background-position-x:96%
      background-position-y:-400px
</style>