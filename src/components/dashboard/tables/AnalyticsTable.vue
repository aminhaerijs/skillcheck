<template>
    <div
        class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
        <data-header :header="header" v-model="selectedData" :options="timeRangeOptions" />

        <div class="max-w-full overflow-x-auto custom-scrollbar mt-4 mb-4">
            <data-table :headers="headers" :rows="rows" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import DataHeader from "@/components/common/DataHeader.vue";
import DataTable from "@/components/common/DataTable.vue";

import { ServiceTableType, TimeRange, type TableHeader, type TableRow } from '@/services/api/api.types';


defineProps<{
    header: string
    serviceType: ServiceTableType;
    headers: TableHeader[];
    rows: TableRow[];
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