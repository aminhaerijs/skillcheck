<template>
  <div class="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
    <div class="max-w-full overflow-x-auto custom-scrollbar">
      <table class="min-w-full">
        <thead>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th v-for="(header, index) in headers" :key="index" class="px-5 py-3 text-left sm:px-6"
              :class="header.class">
              <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                {{ header.label }}
              </p>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
          <tr v-for="(row, index) in rows" :key="index" class="border-t border-gray-100 dark:border-gray-800">
            <td class="px-5 py-4 sm:px-6">
              <div class="flex items-center gap-3">
                <div>
                  <span class="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                    {{ row.title }}
                  </span>

                </div>
              </div>
            </td>
            <td class="px-5 py-4 sm:px-6">
              <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ row.clicks }}</p>
            </td>

            <td class="px-5 py-4 sm:px-6">
              <p class="text-gray-500 text-theme-sm dark:text-gray-400">$ {{ $formatNumberWithCommas(row.netRevenue) }}
              </p>
            </td>
            <td class="px-5 py-4 sm:px-6">
              <p class="text-gray-500 text-theme-sm dark:text-gray-400">$ {{ $formatNumberWithCommas(row.commssion) }}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TableHeader, TableRow } from '@/services/api/api.types';

defineProps<{
  headers: TableHeader[]
  rows: TableRow[]
}>()
</script>
