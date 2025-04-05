<template>
    <div class="flex items-center justify-between">
        <h3 v-if="!subHeader" class="text-lg font-semibold text-gray-800 dark:text-white/90">
            {{ header }}
        </h3>
        <div v-else class="flex-column items-center">
            <span class="text-sm text-gray-500 dark:text-gray-400">{{ header }}</span>
            <h4 class="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90 flex gap-3">
                {{ subHeader }}
            </h4>
        </div>

        <CustomSelect v-model="selectedOption" :options="options" />
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import CustomSelect from '@/components/common/CustomSelect.vue'
import type { SelectOption } from '@/services/api/api.types'

const props = defineProps<{
    header: string
    modelValue: string
    options: SelectOption[]
    subHeader?: string | number
}>()

const emit = defineEmits<(event: 'update:modelValue', value: string) => void>()

const selectedOption = ref<string>(props.modelValue)

watch(selectedOption, (newValue: string) => {
    emit('update:modelValue', newValue)
})
</script>
