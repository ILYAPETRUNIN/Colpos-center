<template>
  <div>
    <div class="ui-kit">
      <h1 >Набор компонентов</h1>
      <div class="ui-kit__input ui-kit__input_light">
        <h3 class="ui-kit__input_header">Элементы ввода</h3>
        <div>
          <h4>Тестовое поле</h4>
          <base-text-field theme='dark' v-model='textField.login' suffixIcon="login" rules='required' label='Представьтесь' />
          <base-text-field disabled suffixIcon="login" rules='required' label='Представьтесь' />
          <base-text-field rules='required' v-model='textField.email' type='email' label='Ваш Email' />
          <base-text-field v-model='textField.tel' type='tel' label='Ваш телефон' />
        </div>
        <div>
          <h4>Селект</h4>
          <base-select rules='required' label='Выберите курс' v-model='select'/>
          <base-select disabled rules='required' label='Выберите курс' v-model='select'/>
        </div>
        <div>
          <h4>Датапикер</h4>
          <base-date-picker rules='required' label='Дата начала' v-model='date'/>
          <base-date-picker disabled rules='required' label='Дата начала' v-model='date'/>
        </div>
        <div>
          <h4>Чекбоксы</h4>
          <base-checkbox class="ui-kit__checkbox" v-model='check' label='Отправляя заявку, вы принимаете условия политики конфиденциальности'/>
          <base-checkbox class="ui-kit__checkbox" disabled v-model='check' label='Отправляя заявку, вы принимаете условия политики конфиденциальности'/>
        </div>
        <div class="ui-kit__btns">
          <h4>Кнопки</h4>
          <base-btn fullscreen class="ui-kit__btn" label='Кнопка' theme='dark'/>
          <base-btn fullscreen class="ui-kit__btn" label='Кнопка' theme='light'/>
          <base-btn fullscreen class="ui-kit__btn" label='Кнопка' theme='light' disabled/>
          <div class="ui-kit__btn_icons">
            <base-btn size='xs' icon class="ui-kit__btn" iconName='whatsapp' theme='lightest'/>
            <base-btn  disabled icon class="ui-kit__btn" iconName='instagram' theme='light'/>
            <base-btn size='ms' round icon class="ui-kit__btn" iconName='eye' theme='light'/>
            <base-btn colorIcon='primary' size='md' icon class="ui-kit__btn" iconName='play' theme='light'/>
            <base-btn colorIcon='primary' flat round size='xs'  icon iconName='whatsapp' theme='dark'/>
            <base-btn text label='г. Краснодар, пр-т Чекистов, д. 42' theme='light'>
              <template v-slot:preffix>
                <svg-icon name='map' size='xs'/>
              </template>
            </base-btn>
          </div>
        </div>
        <div>
          <base-rating v-model='rating'/>
        </div>
      </div>
    </div>
    <div class="ui-kit__slider">
      <h1>Слайдер</h1>
      <base-slider/>
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
      check:false,
      rating:3
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
  &__btn
    margin 10px
    &_icons
      flexy()
  &__checkbox
    margin 5px 0px
  &__slider
    flexy(center,center,nowrap,column)
    width 100%
.base-chip__icon
  font-size 24px
</style>
