import Vue from "vue";
import { ValidationProvider, extend , configure} from "vee-validate";
import { required} from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "*Заполните обязательное поле",
});

configure({
  classes: {
    invalid: 'base-text-field_invalid',
  }
})