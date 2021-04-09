import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '../components/HelloWorld';
// import FormHandling from '../components/FormHandling';
import ChartPage from '../components/Chart.component';
import AreaChartPage from '../components/AreaChart';
import RadarChartPage from '../components/RadarChart';
Vue.use(VueRouter);
export default new VueRouter({
    routes: [{
            path: '/',
            component: ChartPage,
            name: 'ChartPage'
        },
        {
            path: '/hello-world',
            component: HelloWorld,
            name: HelloWorld
        }, {
            path: '/area',
            component: AreaChartPage,
            name: 'AreaChartPage'
        }, {
            path: '/radar',
            component: RadarChartPage,
            name: 'AreaChartPage'
        },
    ],
    mode: 'history'
})