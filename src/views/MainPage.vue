<template>
  <div class='main'>
    <base-slider>
      <template v-slot:form>
        <base-card class='main__form'>
          <form-record/>
        </base-card>
      </template>
      <template   v-slot:footer>
        <div class='main__statistic'>
          <statistic-block :value='100' suffix='>' icon='hat' label='Курсов проведено'/>
          <statistic-block :value='1000' icon='letter' label='Дипломов выдано'/>
        </div>
      </template>
    </base-slider>

  </div>
</template>

<script>

import FormRecord from '@/components/form/FormRecord.vue'
import StatisticBlock from '@/components/other/StatisticBlock.vue'
export default {
  components:{FormRecord,StatisticBlock}
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/vars/variables';
@require '~@/assets/stylus/mixins/mixins';
$background=$theme-light.primary.base
.main
  &__form
    +breakpoint(sm-and-down){
      display:none
    }
  &__statistic
    flexy()
    margin-left 50px
    margin-top 50px

</style> 