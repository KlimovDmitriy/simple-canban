import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdModeeditoutline, FaCheck, MdCancel, BiPlusSquareFill } from "oh-vue-icons/icons";
addIcons(MdModeeditoutline, FaCheck, MdCancel, BiPlusSquareFill );
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.component("v-icon", OhVueIcon);
app.mount('#app')
