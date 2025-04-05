<template>
  <div class="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] md:p-3">
    <div class="flex items-end justify-start mt-1">
      <div class="mb-1">
        <span class="text-sm text-gray-500 dark:text-gray-400">{{ title }}</span>
        <h4 class="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90 flex gap-3">{{
          $formatNumberWithCommas(value) }}
          <span :class="percentageClass"
            class="flex items-center gap-1 rounded-full pl-2 pr-2.5 text-sm font-medium h-auto self-center">
            <svg :class="arrowDirection" class="fill-current" width="12" height="12" viewBox="0 0 12 12" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M5.56462 1.62393C5.70193 1.47072 5.90135 1.37432 6.12329 1.37432C6.1236 1.37432 6.12391 1.37432 6.12422 1.37432C6.31631 1.37415 6.50845 1.44731 6.65505 1.59381L9.65514 4.5918C9.94814 4.88459 9.94831 5.35947 9.65552 5.65246C9.36273 5.94546 8.88785 5.94562 8.59486 5.65283L6.87329 3.93247L6.87329 10.125C6.87329 10.5392 6.53751 10.875 6.12329 10.875C5.70908 10.875 5.37329 10.5392 5.37329 10.125L5.37329 3.93578L3.65516 5.65282C3.36218 5.94562 2.8873 5.94547 2.5945 5.65248C2.3017 5.35949 2.30185 4.88462 2.59484 4.59182L5.56462 1.62393Z"
                fill="" />
            </svg>
            {{ percentageChange }}%
          </span>
        </h4>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import type { AnalyticsCardProps } from '@/services/api/api.types';
import { computed } from 'vue';

const props = withDefaults(defineProps<AnalyticsCardProps>(), {
  title: "Metric",
  value: 0,
  percentageChange: 0,
});

const percentageClass = computed(() =>
  props.percentageChange > 10
    ? 'bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500'
    : 'bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500'
)

const arrowDirection = computed(() =>
  props.percentageChange > 10 ? 'rotate-45' : '-rotate-[135deg]'
)

</script>
