<template>
    <div>
        <line-chart></line-chart>
    </div>
</template>

<script>
    import LineChart from "./component/LineChart.vue";
    export default {
        name: "Charts",
        data(){
            return{
                lineChartData: [],
            }
        },
        components:{
            'line-chart': LineChart,
        },
    }
</script>

<style scoped>

</style>