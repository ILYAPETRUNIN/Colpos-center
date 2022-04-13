<template>
  <div class="ui-kit">
    <h1 >Набор компонентов</h1>
    <div class="ui-kit__input ui-kit__input_light">
      <h3 class="ui-kit__input_header">Элементы ввода</h3>
      <base-text-field theme='dark' v-model='textField.login' suffixIcon="login" rules='required' label='Представьтесь' />
      <base-text-field disabled suffixIcon="login" rules='required' label='Представьтесь' />
      <base-text-field rules='required' v-model='textField.email' type='email' label='Ваш Email' />
      <base-text-field v-model='textField.tel' type='tel' label='Ваш телефон' />
      <base-select rules='required' label='Выберите курс' v-model='select'/>
      <base-date-picker label='Дата начала' v-model='date'/>
      <base-checkbox v-model='check' label='Отправляя заявку, вы принимаете условия политики конфиденциальности'/>
    </div>
  </div>
</template>

<script>
export default {
  name: "UIkit",
  computed: {},
  data(){
    return{
      textField:{
        login:'',
        email:'',
        tel:'',
      },
      select:'',
      date:null,
      check:false
    }
  }
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/vars/variables';
@require '~@/assets/stylus/mixins/mixins';
$background=$theme-light.primary.base

.ui-kit
  flexy(center,center,nowrap,column)
  &__input
    width 50%
    padding 30px
    border-radius 50px
    &_header
      color white
      text-shadow: 3px 3px 3px #000;
    &_light
      background:$background

.base-chip__icon
  font-size 24px
</style>
