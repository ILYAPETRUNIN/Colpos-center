<template>
  <div class='base-rating'>
    <div class='base-rating__star'  v-for='(n,index) in max' :key='index' :class='{active:inputVal==index || inputVal>index}'>
      <input :value='index' v-model='inputVal' class='radio' :id='index' type="radio">
      <label class='label' :for="index">
        <svg-icon class='base-rating__icon' name="star" />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    max:{
      type:Number,
      default:5
    },
    value:{
      type:Number,
      default:0
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
  }
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/mixins/mixins';
@require '~@/assets/stylus/vars/variables';
$check-color=white

.base-rating
  flexy()
  .radio
    display:none
  &__star
    opacity: 0.5;
  &__icon
    width 20.28px
    height 20.28px
    stroke none
    cursor pointer
    color white
    border-radius: 1px; 
.active
  opacity 1
  
</style>