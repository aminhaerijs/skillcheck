<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { useSidebarProvider } from '@/hooks/useSidebar'

useSidebarProvider()
</script>
