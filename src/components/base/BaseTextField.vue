<template>
  <validation-provider :class="[getTheme]" :rules='(isEmail ? "email|" :"")+rules' v-slot="{ errors,classes}">
    <div :class='[classes,getClasses]' class="base-text-field">
      <div class='base-text-field__wrapper'>
        <svg-icon class="base-text-field__icon"  v-if="preffixIcon" :name="preffixIcon" />
        <input
          :id='_uid'
          v-mask="isTel ?'+7(###)-###-##-##':''"
          v-model='inputVal'
          @focus="focus"
          @blur="focused = false"
          class="base-text-field__input"
          type="text"
          :placeholder="label"
          :disabled='disabled'
        />
      </div>
      <label :disabled='disabled'  :for="_uid" @click.prevent='clickSuffix'>
        <slot name='suffix'>
          <svg-icon
            class="base-text-field__icon"
            v-if="(isText && suffixIcon) || !isText"
            :name="suffixIcon ? suffixIcon : type"
          />
        </slot>
      </label>
    </div>
    <div class='errors'>
      <div class='shake-horizontal' v-if='errors.length>0'>{{ errors[0] }}</div>
    </div>
  </validation-provider>
</template>

<script>
import { ValidationProvider, extend , configure} from "vee-validate";
import { VueMaskDirective } from 'v-mask'
import { required,email } from "vee-validate/dist/rules";

extend("required", {...required,message: "*Заполните обязательное поле",});
extend("email", {...email,message: "*Не корректный email",});


export default {
  components: { ValidationProvider },
  directives: {'mask':VueMaskDirective},
  data() {
    return {
      focused: false,
    };
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
    isText(){return this.type=="text"},
    isEmail(){return this.type=="email"},
    isTel(){return this.type=="tel"},
    getClasses() {
      return [
        (this.focused && this.focusable) ? `focused` : "",
        this.disabled ? `disabled` :""
      ];
    },
    getTheme(){
      return `${this.theme}`
    }
  },
  props: {
    value: {
      type: String,
      default:''
    },
    label: {
      type: String,
      default: "",
    },
    theme: {
      type: String,
      default: "light",
      validator: (value) => {
        return ["light", "dark"].includes(value);
      },
    },
    preffixIcon: {
      type: String,
      default: "",
    },
    suffixIcon: {
      type: String,
      default: "",
    },
    type:{
      type:String,
      default:'text',
      validator: (value) => {return ["text", "tel","email"].includes(value);},
    },
    rules:{
      type:String,
      default:''
    },
    disabled:{
      type:Boolean,
      default:false
    },
    focusable:{
      type:Boolean,
      default:true
    },
    readonly:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    clickSuffix(){
      this.$emit('clickSuffix')
    },
    focus(){
      this.focused = true
      this.$emit('focus')
    }
  }
};
</script>

<style lang="stylus" scoped>
@require '~@/assets/stylus/mixins/mixins';
@require '~@/assets/stylus/vars/variables';

$prefix='.base-text-field'

$light={
  base:$theme-light.primary.lightest2
  error:$theme-light.error.lightest
  focus:white
  text:white
}

$dark={
  base:$theme-light.primary.lightest2
  error:$theme-light.error.base
  focus:black
  text:black
}

theme($theme)
  .errors
    color $theme.error
  .base-text-field__input
    color:$theme.text
  .base-text-field
    color:$theme.base
    border-bottom 1px solid
    border-color $theme.base
  .failed
    color $theme.error
    border-color $theme.error
  .focused
    border-bottom 1px solid
    border-color $theme.focus !important
    color $theme.focus !important
  .disabled
    .base-text-field__input
      color $theme.base

.dark
  theme($dark)
.light
  theme($light)
.errors
  height 14px
  setFont(12px,700)
.disabled
  .base-text-field__icon
    cursor auto

.base-text-field
  width 100%
  height 28px
  transition:all 0.5s
  margin 5px 0px
  flexy(space-between)
  padding-bottom 5px
  &__wrapper
    width 100%
  &__input
    width 100%
    setFont(14px,500)
    border none
    outline: none;
    background: transparent
    &::placeholder
      color:inherit
      opacity 1
    &:focus
      &::placeholder
         color: transparent
  >>>&__icon
    width 18px
    height 20px
    cursor pointer
    margin-left 20px    
</style>
