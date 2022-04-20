<template>
    <div v-on-clickaway="hideDropDown"  class='base-select' :class='getClasses'>
      <base-text-field  
        v-model='selectItem.text' 
        :focusable='false'  
        class='base-select__input' 
        @clickSuffix='toogleDropDown'
        @focus='showDropDown' 
        suffixIcon='arrow-down'
        :label='label'
        theme='light'
        :rules='rules'
        :disabled='disabled'
      >
        <template v-slot:suffix>
          <svg-icon class="base-text-field__icon base-select__icon" name="arrow-down"/>
        </template>
      </base-text-field>
      <transition name='fade'>
        
        <div v-if='isShow' class='base-select__dropdown'>
          <base-text-field v-model='selectItem.text' @clickSuffix='toogleDropDown' suffixIcon='arrow-down' :label='label' theme='dark' :rules='rules'>
            <template v-slot:suffix>
              <svg-icon class="base-text-field__icon base-select__icon" name="arrow-down"/>
            </template>
          </base-text-field>
          <ul  class='base-select__dropdown__items'>
            <li @click='select(item)' class='base-select__dropdown__item' :class='{"base-select__dropdown__item_active":item.value==selectItem.value}' v-for='item in getItems' :key='item.value'>{{item.text}}</li>
          </ul>
        </div>
       </transition>
    </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  mixins: [ clickaway ],
  props:{
    value: {
      default:''
    },
    items:{
      type:Array,
      default:()=>[
        {text:'Базовый курс кольпоскопии',value:0},
        {text:'Современные аспекты клинической кольпоскопии',value:1},
        {text:'Электрорадиоволновая хирургия в амбулаторной гинекологии',value:2},
        {text:'Лазерная хирургия в амбулаторной гинекологии',value:3},
        {text:'Лазерная хирургия в амбулаторной гинекологии',value:4},
        {text:'Лазерная хирургия в амбулаторной гинекологии',value:5},
        {text:'Лазерная хирургия в амбулаторной гинекологии',value:6}
      ]
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
      selectItem:{
        text:null,
        value:null
      }
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
    getItems(){
      if(this.selectItem.text)  return this.items.filter((item)=>item.text.includes(this.selectItem.text))
      return this.items 
    },
    getClasses() {
      return [
        this.disabled ? `disabled` :"",
        this.isShow ?"base-select_show":""
      ];
    },
  },
  methods:{
    select(item){
      this.$emit("input", item.value)
      this.hideDropDown()
    },
    hideDropDown(){
      this.selectItem=Object.assign({},this.items.find((item)=>item.value==this.value))
      this.isShow=false
    },
    showDropDown(){
      if(!this.disabled)this.isShow=true
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
  position relative
  &__icon
    transition transform 0.5s
  &__dropdown
    width: 100%
    position absolute
    z-index 999
    top 0px
    padding 0px
    &::after
      content:''
      position:absolute
      z-index -3
      top: -25px;
      left: -25px;
      right: -25px;
      bottom: -25px;
      background white
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
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