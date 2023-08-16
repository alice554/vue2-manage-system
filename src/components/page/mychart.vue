<template>
    <div ref="chart" style="width: 100%; height: 100%;"></div>
  </template>
  
  <script>
  import * as echarts from 'echarts/core';
  import {
    TooltipComponent,
    LegendComponent,
    TitleComponent,
    ToolboxComponent,
    GridComponent,
  } from 'echarts/components';
  import { PieChart, BarChart, RadarChart } from 'echarts/charts';
  import { LabelLayout } from 'echarts/features';
  import { CanvasRenderer } from 'echarts/renderers';
  import { UniversalTransition } from 'echarts/features';
  import { LineChart } from 'echarts/charts';
  
  echarts.use([
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    PieChart,
    BarChart,
    RadarChart,
    CanvasRenderer,
    LabelLayout,
    GridComponent,
    ToolboxComponent,
    LineChart,
    UniversalTransition,
  ]);
  
  export default {
    name: 'EChartsWrapper',
    props: {
      type: {
        type: String,
        required: true,
      },
      data: {
        type: Object,
        required: true,
      },
    },
    created() {
      this.chart = echarts.init(this.$refs.chart);
      this.updateChart();
    },
    watch: {
      type: 'updateChart',
      data: 'updateChart',
    },
    methods: {
      updateChart() {
        const { type, data } = this;
        const options = this.getChartOptions(type, data);
        this.chart.setOption(options);
      },
      getChartOptions(type, data) {
        // 根据 type 和 data 生成对应的图表配置
        switch (type) {
          case 'pie':
            return {
              series: [
                {
                  type: 'pie',
                  data,
                },
              ],
            };
          case 'bar':
            return {
              xAxis: {
                type: 'category',
                data: data.labels,
              },
              yAxis: {
                type: 'value',
              },
              series: [
                {
                  type: 'bar',
                  data: data.values,
                },
              ],
            };
          // 其他类型的图表配置
          default:
            return {};
        }
      },
    },
    destroyed() {
      this.chart.dispose();
    },
  };
  </script>