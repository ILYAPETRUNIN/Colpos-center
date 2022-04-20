<template>
    <div :class='getTheme'>
        <div :class='getClasses' class='base-checkbox'>
            <label :class='{checkbox_active:inputVal}' class='base-checkbox__check' :for='_uid'>
                <input :disabled='disabled' class='base-checkbox__input' v-model='inputVal' :id='_uid' type="checkbox">
                <svg-icon v-if='inputVal' class='base-checkbox__icon' name="check"/>
            </label>
            <label class='base-checkbox__label' :for='_uid'>{{label}}</label>
        </div>
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
        },
        getTheme(){
            return `${this.theme}`
        },
        getClasses() {
            return [
                this.disabled ? `disabled` :""
            ];
        },
    },
    props:{
        value:{type:Boolean,default:false},
        label:{type:String},
        theme: {
            type: String,
            default: "light",
            validator: (value) => {
                return ["light", "dark"].includes(value);
            },
        },
        disabled:{
            type:Boolean,
            default:false
        },
    }
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/mixins/mixins';
@require '~@/assets/stylus/vars/variables';
$current-color=$theme-light.primary.lightest2

$light={
  base:$theme-light.primary.lightest2
  secondary:white
  text:white
}

$dark={
  base:$theme-light.primary.lightest2
  secondary:$theme-light.primary.dark7
  text:black
}

theme($theme)
    .base-checkbox__check:hover{
        border-color:white
    }
    .base-checkbox__check_active{
        background-color:$theme.secondary
    }
    .base-checkbox
        &__check{
            border-color $theme.base
        }
    color $theme.text

.dark
  theme($dark)
.light
  theme($light)

.disabled
    .base-checkbox
        &__check
            &:hover
                border-color $theme-light.primary.lightest2
                cursor:auto
        &__label
            color: $theme-light.primary.lightest2;
            cursor:auto
            


.base-checkbox
    display:flex;
    align-items:center;
    width:100%;
    &__check
        margin-right:10px;
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
        width:15px;
        height:15px;
        background:transparent;
        border: 2px solid;
        border-radius: 3px;
        transition:opacity 0.5, border .15s , background .15s , transform .15s;
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