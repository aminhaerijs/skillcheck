<template>
    <div
        class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
        <data-header :header="header" :subHeader="subHeader" v-model="selectedData" :options="timeRangeOptions" />

        <div class="max-w-full overflow-x-auto custom-scrollbar mt-4 mb-4">
            <data-chart :chartData="chartData" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import DataHeader from "@/components/common/DataHeader.vue";
import DataChart from "@/components/common/DataChart.vue"

import { ServiceChartType, TimeRange, type ChartData } from '@/services/api/api.types';


defineProps<{
    header: string
    subHeader: string
    serviceType: ServiceChartType;
    chartData: ChartData[];
}>();

const emit = defineEmits<(event: 'update:selectedData', value: TimeRange) => void>()

const selectedData = ref(TimeRange.Weekly)

const timeRangeOptions = Object.entries(TimeRange).map(([key, value]) => ({
    label: key.charAt(0).toUpperCase() + key.slice(1).toLowerCase(),
    value,
}))

watch(selectedData, (newValue: TimeRange) => {
    emit('update:selectedData', newValue)
})
</script>