<template>
<input type="checkbox" v-model="isRedraw" />Redraw Chart
    <button @click="changeChartOpt" :class="buttonClasses">{{ buttonText }}</button><br />
    <div ref="chart">

    </div>
</template>

<style>
.highcharts-credits {
    display: none !important;
}

.button-base {
    border-radius: 5px;
    left: 50%;
    position: relative;
    margin-left: -100px;
    margin-bottom: 30px;
    box-shadow: 2px 4px #ccc;
    min-width: 200px;
    padding: 10px;
    cursor: pointer;
    font-weight: bolder;
    width: 200px;
}

.button-org {
    background-color: blue;
    color: white;
}

.button-changed {
    background-color: yellow;
    color: red;
}
</style>

<script>
import Highcharts from 'highcharts'
var chartOpt = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Fruit Consumption'
    },
    xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
        title: {
            text: 'Fruit eaten'
        }
    },
    series: [{
        name: 'Jane',
        data: [134, 230, 434]
    }, {
        name: 'John',
        data: [523, 779, 324]
    }]
};
var chartOptChanged = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Fruit Consumption change'
    },
    xAxis: {
        categories: ['Grape', 'Sweet Melon', 'Avacado', 'pears']
    },
    yAxis: {
        title: {
            text: 'Eaten fruit'
        }
    },
    series: [{
        name: 'mane',
        data: [1123, 2034, 4489, 5623]
    }, {
        name: 'pilly',
        data: [5223, 2785, 5855, 3656]
    }, {
        name: 'grve',
        data: [3523, 5785, 3633, 6666]
    }]
};
export default {
    data() {
        return {
            isRedraw: true,
            isDataChanged: false,
            buttonClasses: "button-base button-org",
            buttonText: "Change Data",
            //chart: null,
            chartOptions: chartOpt
        }
    },
    mounted() {
        this.chart = Highcharts['chart'](this.$refs.chart, this.chartOptions);
    },
    watch: {
        chartOptions: {
            handler(newValue) {
                if (this.isRedraw) {
                    //in case entire chart structure change then destroy and reinit chart
                    this.chart.destroy();
                    this.chart = Highcharts['chart'](this.$refs.chart, newValue);
                }
                else {
                    //in case of only change in data then simply update chart options
                    this.chart.update(newValue)
                }

            }
        }
    },
    methods: {
        changeChartOpt() {
            var _app = this;
            _app.isDataChanged = !_app.isDataChanged;
            _app.toggleButtonTextChange();
            _app.chartOptions = _app.buttonText == "Change Data" ? chartOpt : chartOptChanged;
        },
        toggleButtonTextChange() {
            var _app = this;
            _app.buttonText = _app.isDataChanged ? "Bring back old Data" : "Change Data";
            _app.buttonClasses = _app.isDataChanged ? "button-base button-changed" : "button-base button-org";
        }
    }
}
</script>


