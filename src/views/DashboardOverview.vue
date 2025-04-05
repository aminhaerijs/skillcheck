<template>
  <app-layout>
    <div class="grid grid-cols-12 gap-4 md:gap-6">
      <div class="col-span-12 space-y-4">

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-2">
          <analytics-card v-for="(card, index) in cards" :key="index" :title="card.title" :value="card.value"
            :percentageChange="card.percentageChange" />
        </div>

        <div class="col-span-12 xl:col-span-12">
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
            <analytics-chart header="Daily Revenue" :sub-header="formattedRevenue"
              :serviceType="ServiceChartType.Revenue" :chartData="filteredRevenueData"
              @update:selectedData="updateSelectedChartData($event, ServiceChartType.Revenue)" />

            <analytics-chart header="Daily New Accounts" :sub-header="sumAccounts.toString()"
              :serviceType="ServiceChartType.Accounts" :chartData="filteredAccountsData"
              @update:selectedData="updateSelectedChartData($event, ServiceChartType.Accounts)" />
          </div>
        </div>

        <div class="col-span-12 xl:col-span-12">
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
            <analytics-table header="Daily Revenue" :serviceType="ServiceTableType.Affiliates"
              :rows="filteredAffiliatesData" :headers="affiliatesHeaders"
              @update:selectedData="updateSelectedTableData($event, ServiceTableType.Affiliates)" />

            <analytics-table header="Top Brands" :serviceType="ServiceTableType.Brands" :rows="filteredBrandsData"
              :headers="brandsHeaders"
              @update:selectedData="updateSelectedTableData($event, ServiceTableType.Brands)" />
          </div>
        </div>
      </div>
    </div>
  </app-layout>
</template>

<script setup lang="ts">
import AppLayout from '../components/layout/AppLayout.vue'
import AnalyticsCard from '@/components/dashboard/cards/AnalyticsCard.vue'
import AnalyticsTable from "@/components/dashboard/tables/AnalyticsTable.vue";
import AnalyticsChart from "@/components/dashboard/charts/AnalyticsChart.vue";
import { getMockAnalyticsCard } from '@/services/mock/analyticsData'
import { computed, getCurrentInstance, ref } from 'vue';
import tableDataService from '@/services/tableDataService'
import chartDataService from '@/services/chartDataService'
import { ServiceChartType, ServiceTableType, TimeRange } from '@/services/api/api.types';

const { appContext } = getCurrentInstance()!
const formatNumberWithCommas = appContext.config.globalProperties.$formatNumberWithCommas

const cards = getMockAnalyticsCard()

// #region Table
const selectedAffiliateTimeRange = ref(TimeRange.Weekly)
const selectedBrandTimeRange = ref(TimeRange.Weekly)

const filteredAffiliatesData = computed(() =>
  tableDataService.filterByTimeRange(ServiceTableType.Affiliates, selectedAffiliateTimeRange.value)
)

const filteredBrandsData = computed(() =>
  tableDataService.filterByTimeRange(ServiceTableType.Brands, selectedBrandTimeRange.value)
)

const affiliatesHeaders = computed(() =>
  tableDataService.getTableHeaders(ServiceTableType.Affiliates)
)

const brandsHeaders = computed(() =>
  tableDataService.getTableHeaders(ServiceTableType.Brands)
)

const updateSelectedTableData = (value: TimeRange, serviceType: ServiceTableType) => {
  if (serviceType === ServiceTableType.Affiliates) {
    selectedAffiliateTimeRange.value = value
    tableDataService.filterByTimeRange(ServiceTableType.Affiliates, value)
  } else if (serviceType === ServiceTableType.Brands) {
    selectedBrandTimeRange.value = value
    tableDataService.filterByTimeRange(ServiceTableType.Brands, value)
  }
}
//#endregion

// #region Chart
const selectedRevenueTimeRange = ref(TimeRange.Weekly)
const selectedAccountsTimeRange = ref(TimeRange.Weekly)

const sumAccounts = computed(() =>
  chartDataService.sumByTimeRange(ServiceChartType.Accounts, selectedAccountsTimeRange.value) / 10
)
const sumRevenue = computed(() =>
  chartDataService.sumByTimeRange(ServiceChartType.Revenue, selectedRevenueTimeRange.value)
)

const formattedRevenue = computed(() => {
  const raw = sumRevenue.value
  return `$${formatNumberWithCommas(raw)}`
})

const filteredRevenueData = computed(() =>
  chartDataService.filterByTimeRange(ServiceChartType.Revenue, selectedRevenueTimeRange.value)
)

const filteredAccountsData = computed(() =>
  chartDataService.filterByTimeRange(ServiceChartType.Accounts, selectedAccountsTimeRange.value)
)

const updateSelectedChartData = (value: TimeRange, serviceType: ServiceChartType) => {
  if (serviceType === ServiceChartType.Revenue) {
    selectedRevenueTimeRange.value = value
    chartDataService.filterByTimeRange(ServiceChartType.Revenue, value)
  } else if (serviceType === ServiceChartType.Accounts) {
    selectedAccountsTimeRange.value = value
    chartDataService.filterByTimeRange(ServiceChartType.Accounts, value)
  }
}
// #endregion
</script>
