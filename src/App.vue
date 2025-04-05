<template>
  <ThemeProvider>
    <SidebarProvider>
      <DashboardOverview />
    </SidebarProvider>
  </ThemeProvider>
</template>

<script setup lang="ts">
import ThemeProvider from './components/layout/ThemeProvider.vue'
import SidebarProvider from './components/layout/SidebarProvider.vue'
import DashboardOverview from './views/DashboardOverview.vue'
</script>
