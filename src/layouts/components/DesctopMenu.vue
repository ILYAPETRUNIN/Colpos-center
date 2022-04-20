<template>
  <div class='desctop-menu'>
    <div class='desctop-menu__logo'>
      <base-logo/>
      <h3>Учебный Центр кольпоскопии доктора Петренко</h3>
    </div>
    <div class='desctop-menu__menu'>
      <ul class='desctop-menu__links'>
        <li class='desctop-menu__wrapper' v-for='link in links' :key='link.name'>
          <router-link class='desctop-menu__link' :to="{ name: link.name}">{{link.text}}</router-link>
        </li>
      </ul>
    </div>
    <div class='desctop-menu__contacts'>
      <a class='desctop-menu__number' href="tel:+7 861 201-22-03">+7 861 201-22-03</a>
      <base-btn class='desctop-menu__btn' fullscreen label='Заказать звонок' theme='dark'/>
      <div class='desctop-menu__btns'>
        <base-btn v-for='contact in contacts' :key='contact.name' :url='contact.link' size='xs' icon class="ui-kit__btn" :iconName='contact.name' theme='lightest'/>
      </div>
    </div>
    <base-btn class='desctop-menu__btn_map' text label='г. Краснодар, пр-т Чекистов, д. 42' theme='dark'>
      <template v-slot:preffix>
        <svg-icon name='map' size='xs'/>
      </template>
    </base-btn>
  </div>
</template>

<script>
import BaseLogo from './BaseLogo.vue'
const links=[
  {name:'main',text:'Главная'},
  {name:'course',text:'Курсы'},
  {name:'autor-course',text:'Автор курса'},
  {name:'equipment',text:'Оборудование'},
  {name:'timetable',text:'Расписание'},
  {name:'comment',text:'Отзывы'},
  {name:'galery',text:'Галерея'},
  {name:'documents',text:'Документы'},
  {name:'clinic',text:'Клиника'},
  {name:'forum',text:'Форум'},
  {name:'information',text:'Информация'},
]

const contacts=[
  {name:'instagram',link:'http://localhost:8080/'},
  {name:'whatsapp',link:'http://localhost:8080/'},
  {name:'telegram',link:'http://localhost:8080/'},
]
export default {
  components:{BaseLogo},
  data(){
    return {
      links,
      contacts
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/vars/variables';
@require '~@/assets/stylus/mixins/mixins';
$color-text=$theme-light.third.dark
$color-gray=$theme-light.secondary.light
$color-base=$theme-light.primary.light2


.desctop-menu
  flexy(center,center,nowrap,column)
  width 173px
  &__menu
    display: inline-block;
    padding 29.5px 0px
    border: 1px solid $color-base;
    border-left none
    border-right none
  &__logo
    text-align center
    flexy(center,center,nowrap,column)
    setFont(16px,700)
    color:$color-base
  &__links
    display: inline-block;
    border-left: 1px solid $color-base;
    no-style-list()
    padding 0px 29.5px
  &__wrapper
    &:not(:last-child)
      margin-bottom 10px !important
  &__link
    position relative
    color:$color-text
    setFont(12px,400)
    text-decoration: none
    &:hover
      &::after
        background $color-base
    &::after
      position absolute
      bottom -5px
      left 0px
      content:''
      width 100%
      height 4.1px
      border-radius: 10px
  &__contacts
    padding 31.66px 0px
    border-bottom: 1px solid $color-base;
  &__number
    text-decoration: none
    setFont(16px,700)
    color:$color-gray
    &:hover
      color:$color-base
  &__btn
    margin 20px 0px
    &_map
      margin-top 15px  
  &__btns
    flexy(space-between,center)
  
</style>