<template>
    <div class="relative h-fit">
        <div class="relative z-20 bg-transparent">
            <!-- Left Icon -->
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none">
                <slot name="icon">
                    <svg class="stroke-current" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 2V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M16 2V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        <rect x="3" y="7" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.5" />
                        <path d="M3 11H21" stroke="currentColor" stroke-width="1.5" />
                    </svg>
                </slot>
            </span>

            <!-- Select Dropdown -->
            <select :value="modelValue" @input="updateValue"
                class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent pl-10 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                :class="{ 'text-gray-800 dark:text-white/90': modelValue }">
                <option value="" disabled selected>Select Option</option>
                <option v-for="option in options" :key="option.value" :value="option.value">
                    {{ option.label }}
                </option>
            </select>

            <!-- Right Arrow Icon -->
            <span
                class="absolute z-30 text-gray-500 -translate-y-1/2 pointer-events-none right-4 top-1/2 dark:text-gray-400">
                <svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { SelectOption } from '@/services/api/api.types';

defineProps<{
    modelValue: string | number;
    options: SelectOption[];
}>();

const emit = defineEmits(['update:modelValue']);


const updateValue = (event: Event) => {
    const value = (event.target as HTMLSelectElement).value;
    emit('update:modelValue', value);
};
</script>
