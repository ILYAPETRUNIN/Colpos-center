<template>
  <div class='statistic-block'>
    <svg-icon class='statistic-block__icon' :name='icon'/>
    <div class='statistic-block__wrapper'>
      <p class='statistic-block__text'><span class='statistic-block__suffix'>{{suffix}}</span>{{animatedNumber}}</p>
      <h4 class='statistic-block__header'>{{label}}</h4>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data(){
    return{
      tweenedNumber: 0
    }
  },
  computed: {
    animatedNumber: function() {
      return this.tweenedNumber.toFixed(0);
    }
  },
  props:{
    icon:{
      type:String,
      default:''
    },
    suffix:{
      type:String,
      default:''
    },
    value:{
      type:Number,
      default:0
    },
    label:{
      type:String,
      default:''
    }
  },
  mounted(){
    gsap.to(this.$data, { duration: 3, tweenedNumber: this.value,ease: "power1.in"});
  },
  watch: {
    value: function(newValue) {
      gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue });
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/vars/variables';
@require '~@/assets/stylus/mixins/mixins';
$background=$theme-light.primary.opacity
$text=$theme-light.primary.dark4


.statistic-block
  width 250px
  position relative
  color $background
  &__icon
    top 0px
    left 0px
    width 124px
    height 105.23px
    position absolute
    z-index -1
  &__text
    color:$text
    setFont(60px,700)
    margin 0
    margin-bottom 10px
  &__suffix
    margin-right 20px
  &__header
    width 124px
    margin 0px
    margin-left 40px
    setFont(20px,500)
    color:black
  &__wrapper
    padding-top 10px
    padding-left 50px
    z-index 2
</style> 