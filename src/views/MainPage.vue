<template>
  <div class='main'>
    <base-slider>
      <base-card class='main__form'>
        <form-record/>
      </base-card>
    </base-slider>

  </div>
</template>

<script>
import FormRecord from '@/components/form/FormRecord.vue'
export default {
  components:{FormRecord}
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/vars/variables';
@require '~@/assets/stylus/mixins/mixins';
.main
  &__form
    +breakpoint(sm-and-down){
      display:none
    }

</style> 