import {createApp} from 'vue'
import hightChartsComp from './high-charts-comp.vue'

const app = createApp({});
app.component('high-charts',hightChartsComp)
app.mount('#app')
