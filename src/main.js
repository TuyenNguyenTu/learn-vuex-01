import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store';
import router from './router/routers';
import VueApexCharts from 'vue-apexcharts';

Vue.config.productionTip = false
Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')