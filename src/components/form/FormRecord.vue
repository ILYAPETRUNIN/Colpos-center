<template>
<ValidationObserver class='form' tag="form" ref='form' @submit.prevent="submit()">
    <h3 class='form__header'>Запишитесь на курс</h3>
    <p class='form__text'>получите индивидуальные условия обучения</p>
    <base-text-field  suffixIcon="login" rules='required' label='Представьтесь' />
    <base-text-field rules='required' type='email' label='Ваш Email' />
    <base-text-field type='tel' label='Ваш телефон' />
    <base-select rules='required' label='Выберите курс'/>
    <base-date-picker rules='required' label='Дата начала'/>
    <base-checkbox class='form__checkbox' label='Отправляя заявку, вы принимаете условия политики конфиденциальности'/>
    <base-btn @click='submit' fullscreen class="ui-kit__btn" label='Кнопка' theme='light'/>
</ValidationObserver>
</template>

<script>
import {ValidationObserver} from "vee-validate";
export default {
  components:{ValidationObserver},
  methods:{
    submit(){
      this.$refs.form.validate()
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/vars/variables';
@require '~@/assets/stylus/mixins/mixins';
.form
  &__checkbox
    margin-bottom 20px
  &__header
    setFont(24px,500)
  &__text
    margin-bottom 40px
    setFont(16px,300)
</style> 