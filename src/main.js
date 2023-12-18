import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from "./router/index";
import 'vant/lib/index.css';


const add = createApp(App);
add.use(router);
add.mount("#app");


