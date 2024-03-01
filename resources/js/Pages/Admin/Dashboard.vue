<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import BreadCrumbs from "@/Components/BreadCrumbs.vue";
import VueApexCharts from 'vue3-apexcharts';

import 'apexcharts/dist/apexcharts.css';

const links = [
    {
        title: 'Dashboard',
        disabled: true,
        href: '/dashboard',
    }, {
        title: 'Inicio',
        disabled: false,
        href: '/dashboard',
    }
]
const seriesLine = [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
}];
const chartOptionsLine = {
    chart: {
        height: 350,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    title: {
        text: 'Product Trends by Month',
        align: 'left'
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
};


const seriesArea = [{
    name: "STOCK ABC",
    data: [8107.85, 8128, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9, 8496.25, 8600.65, 8881.1, 9340.85]
}];

const chartOptionsArea = {
    chart: {
        type: 'area',
        height: 350,
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },

    title: {
        text: 'Fundamental Analysis of Stocks',
        align: 'left'
    },
    subtitle: {
        text: 'Price Movements',
        align: 'left'
    },
    labels: ["13 Nov 2017", "14 Nov 2017", "15 Nov 2017", "16 Nov 2017", "17 Nov 2017", "20 Nov 2017", "21 Nov 2017", "22 Nov 2017", "23 Nov 2017", "24 Nov 2017", "27 Nov 2017", "28 Nov 2017", "29 Nov 2017", "30 Nov 2017", "01 Dec 2017", "04 Dec 2017", "05 Dec 2017", "06 Dec 2017", "07 Dec 2017", "08 Dec 2017"],

    xaxis: {
        type: 'datetime',
    },
    yaxis: {
        opposite: true
    },
    legend: {
        horizontalAlign: 'left'
    }
};


const seriesColumn = [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
}, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
}, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
}];
const chartOptionsColumn = {
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
        title: {
            text: '$ (thousands)'
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands"
            }
        }
    }
};


const seriesPie = [44, 55, 13, 43, 22];
const chartOptionsPie = {
    chart: {
        width: 380,
        type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};


</script>


<template>
    <AdminLayout title="Dashboard">
        <bread-crumbs :items="links" name="Dashboard"></bread-crumbs>

        <v-container>
            <v-row>
                <v-col cols="8">
                    <v-card>
                        <div id="chart">
                            <vue-apex-charts :options="chartOptionsColumn" :series="seriesColumn" height="350"
                                             type="bar"></vue-apex-charts>
                        </div>
                    </v-card>
                </v-col>

                <v-col cols="4">
                    <v-card>
                        <div id="chart">
                            <vue-apex-charts :options="chartOptionsPie" :series="seriesPie" height="350"
                                             type="donut"></vue-apex-charts>
                        </div>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card>
                        <div id="chart">
                            <vue-apex-charts :options="chartOptionsLine" :series="seriesLine" height="350"
                                             type="line"></vue-apex-charts>
                        </div>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card>
                        <div id="chart">
                            <vue-apex-charts :options="chartOptionsArea" :series="seriesArea" height="350"
                                             type="area"></vue-apex-charts>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <v-container>
            <v-card v-role="'admin'">
                <v-card-text >
                    Solo el admin puede ver.
                </v-card-text>
            </v-card>
        </v-container>
    </AdminLayout>
</template>
