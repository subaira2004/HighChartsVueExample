<template>
    <div ref="chart">

    </div>
</template>

<script>
import Highcharts from 'highcharts'
export default {
    data() {
        return {
            chart: null,
            chartOptions: {
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
                    data: [1, 0, 4]
                }, {
                    name: 'John',
                    data: [5, 7, 3]
                }]
            }
        }
    },
    mounted() {
        this.chart = Highcharts['chart'](this.$refs.chart, this.chartOptions);
    },
    watch: {
        chartOptions: {
            handler(newValue) {
                this.chart.update(newValue)
            }
        }
    }
}
</script>