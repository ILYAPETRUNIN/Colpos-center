<template>
    <div v-on-clickaway="hideDropDown"  class='base-select' :class='getClasses'>
      <base-text-field  
        v-model='formattedDate' 
        :focusable='false'  
        class='base-select__input' 
        @clickSuffix='toogleDropDown'
        @focus='showDropDown' 
        suffixIcon='arrow-down'
        :label='label'
        :rules='rules'
        :disabled='disabled'
      >
        <template v-slot:suffix>
          <svg-icon class="base-text-field__icon base-select__icon" name="arrow-down"/>
        </template>
      </base-text-field>
      <transition name='fade'>
        <div v-if='isShow' class='base-select__dropdown'>
           <VueDatePicker v-model="inputVal" inline :locale="{ lang: 'ru' }" />
        </div>
       </transition>
    </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import { VueDatePicker } from '@mathieustan/vue-datepicker';
import '@mathieustan/vue-datepicker/dist/vue-datepicker.min.css';

export default {
  mixins: [ clickaway ],
  components : {VueDatePicker},
  props:{
    value: {
      default:''
    },
    label: {
      type: String,
      default: "",
    },
    rules:{
      type:String,
      default:''
    },
    disabled:{
      type:Boolean,
      default:false
    },
  },

  data(){
    return{
      isShow:false,
    }
  },
  computed: {
    inputVal: {
      get() {
          return this.value;
      },
      set(value) {
          this.$emit("input", value);
      }
    },
    formattedDate(){
        let options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };
        if(this.inputVal){
          let date = new Date(this.inputVal);
          return date.toLocaleString("ru", options);
        }
        return null
    },
    getClasses() {
      return [
        this.disabled ? `disabled` :"",
        this.isShow ?"base-select_show":""
      ];
    },
  },
  methods:{
    hideDropDown(){
      if(!this.disabled) this.isShow=false
    },
    showDropDown(){
      if(!this.disabled) this.isShow=true
    },
    toogleDropDown(){
      if(!this.disabled) this.isShow=!this.isShow
    },
  }
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/mixins/mixins';
@require '~@/assets/stylus/vars/variables';
$current-color=$theme-light.secondary.lightes
.disabled
  .base-select__icon
    cursor auto
    
.base-select
  position:relative
  &__icon
    transition transform 0.5s
  &__dropdown
    position absolute
    z-index 9999
    top 0px
    padding 0px
    padding-top 40px
    &__items
      padding 0px
      max-height 300px
      overflow-y: scroll
      scrollStyle()
    &__item
      no-style-list()
      cursor pointer
      border-radius: 10px;
      height 50px
      padding 10px 16px
      &_active
        background: $current-color;
      &:hover
        background: $current-color;
  &__input
    z-index -1
  
  &_show
    .base-select__icon
      transform: rotate(180deg)
</style>