<template>
    <div class='base-select' :class='{"base-select_show":isShow}'>
      <base-text-field  
        @focus='isShow=true'
        v-model='inputVal' 
        :focusable='false'  
        class='base-select__input' 
        @clickSuffix='isShow=!isShow' 
        suffixIcon='arrow-down'
        :label='label'
        :theme='isShow ?"dark":"light"'
        readonly
      >
        <template v-slot:suffix>
          <svg-icon class="base-text-field__icon base-select__icon" name="arrow-down"/>
        </template>
      </base-text-field>

      <ul v-if='isShow' class='base-select__dropdown'>
        <li @click='select(item.value)' class='base-select__dropdown_item' v-for='item in items' :key='item.value'>{{item.text}}</li>
      </ul>
    </div>
</template>

<script>
export default {
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
        {text:'Лазерная хирургия в амбулаторной гинекологии',value:3}
      ]
    },
    label: {
      type: String,
      default: "",
    },
  },

  data(){
    return{
      isShow:false
    }
  },
  computed: {
    inputVal: {
      get() {
          const el=this.items.find((item)=>item.value==this.value)
          if(el) return el.text
          return this.value;
      },
      set(value) {
          this.$emit("input", value);
      }
    },
  },
  methods:{
    select(value){
      this.inputVal=value
      this.isShow=false
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/mixins/mixins';
@require '~@/assets/stylus/vars/variables';
.base-select
  z-index 9999
  position:relative
  &__icon
    transition transform 0.5s
  &__dropdown
    position absolute
    z-index -2
    top 0px
    padding 0px
    padding-top 40px
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
    &_item
      no-style-list()
      cursor pointer
      border-radius: 10px;
      height 50px
      padding 10px 16px
      &:hover
        background: #F5F5F5;
  &__input
    z-index -1
  
  &_show
    .base-select__icon
      transform: rotate(180deg)
      
    
</style>