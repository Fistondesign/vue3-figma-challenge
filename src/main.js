import { createApp } from 'vue'
import './style.css'

import App from './App.vue'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiHeart,FaUser,PrShoppingCart,CoMenu,IoLogoInstagram,CoFacebookF  } from "oh-vue-icons/icons";

addIcons(FaUser,BiHeart,PrShoppingCart,CoMenu,IoLogoInstagram,CoFacebookF );
const app=createApp(App);
app.mount('#app');

app.component('font-icons',OhVueIcon);
