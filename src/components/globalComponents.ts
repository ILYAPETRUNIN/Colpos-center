import Vue from "vue";
import SvgIcon from "./SvgIcon.vue";
import BaseTextField from "./base/BaseTextField.vue";
import BaseSelect from "./base/BaseSelect.vue";
import BaseDatePicker from "./base/BaseDatePicker.vue";
import BaseCheckbox from "./base/BaseCheckbox.vue";
import BaseBtn from "./base/BaseBtn.vue";
import BaseRating from "./base/BaseRating.vue";
import BaseSlider from "./slider/BaseSlider.vue";

Vue.component("svg-icon", SvgIcon);
Vue.component("base-text-field", BaseTextField);
Vue.component("base-select", BaseSelect);
Vue.component("base-date-picker", BaseDatePicker);
Vue.component("base-checkbox", BaseCheckbox);
Vue.component("base-btn", BaseBtn);
Vue.component("base-rating", BaseRating);
Vue.component("base-slider", BaseSlider);

//*Card*//
import BaseCard from "./card/BaseCard.vue";
Vue.component("base-card", BaseCard);

