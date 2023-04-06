import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import store from "./store/index.js";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


createApp(App).use(store).use(router).mount('#app')
