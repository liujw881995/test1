import { createApp } from 'vue'
import Antd from 'ant-design-vue';

import Vant from 'vant';
import 'vant/lib/index.css';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import router from './router'
import store from './store'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const app =createApp(App);
app.config.productionTip = false;
app.use(store);
app.use(router);
app.use(Antd);
app.use(bootstrap);
app.use(Vant);
app.mount('#app')

