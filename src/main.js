import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import CRA from 'country-routing-algorithm'

console.log('qq');
console.log(CRA);
console.log(CRA.Router)
let a=new CRA.Router();
let b=new CRA.GraphController();

createApp(App).mount('#app')
