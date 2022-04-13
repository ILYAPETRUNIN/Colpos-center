<template>
    <div class='base-checkbox'>
        <label :class='{checkbox_active:inputVal}' class='base-checkbox__check' :for='_uid'>
            <input class='base-checkbox__input' v-model='inputVal' :id='_uid' type="checkbox">
            <svg-icon v-if='inputVal' class='base-checkbox__icon' name="check"/>
        </label>
        <label class='base-checkbox__label' :for='_uid'>{{label}}</label>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    computed:{
        inputVal:{
            get(){
                return this.value
            },
            set(val){
                this.$emit('input',val)
            }
        }
    },
    props:{
        value:{type:Boolean,default:false},
        label:{type:String}
    }
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/mixins/mixins';
@require '~@/assets/stylus/vars/variables';
$current-color=$theme-light.primary.lightest2

.base-checkbox
    display:flex;
    align-items:center;
    width:100%;
    color white
    &__check
        margin-right:10px;
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
        width:15px;
        height:15px;
        background:transparent;
        border: 2px solid $current-color;
        border-radius: 3px;
        transition:opacity 0.5, border .15s , background .15s , transform .15s;

        &:hover{
            border-color:white;
        }

        &_active{
            background-color:white;
        }
    &__input
        z-index:-1;
        opacity: .001;
        outline:none;
    &__icon
        position:absolute;
        width: 10px
        height:10px;
        color inherit
    &__label
        font-weight: 400;
        font-size: 10px;
        color: inherit;
        cursor pointer
</style>