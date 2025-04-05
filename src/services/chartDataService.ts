import { reactive } from 'vue'
import { ServiceChartType, TimeRange, type ChartData } from '@/services/api/api.types'
import { getMockAccountsChartData, getMockRevenueChartData } from '@/services/mock/chartData'

export class ChartDataService {
  private readonly data = reactive({
    accounts: getMockAccountsChartData(),
    revenue: getMockRevenueChartData(),
  })

  public getData(service: ServiceChartType): ChartData[] {
    return this.data[service]
  }

  public filterByTimeRange(service: ServiceChartType, timeRange: TimeRange): ChartData[] {
    if (timeRange === TimeRange.Weekly) {
      return this.getWeeklyData(service)
    } else {
      return this.getMonthlyData(service)
    }
  }

  private getWeeklyData(service: ServiceChartType): ChartData[] {
    return this.data[service].filter((row) => row?.monthly)
  }

  private getMonthlyData(service: ServiceChartType): ChartData[] {
    return this.data[service].filter((row) => !row?.monthly)
  }

  private sumWeeklyData(service: ServiceChartType): number {
    return this.getWeeklyData(service).reduce((acc, row) => acc + row.yValue, 0)
  }

  private sumMonthlyData(service: ServiceChartType): number {
    return this.getMonthlyData(service).reduce((acc, row) => acc + row.yValue, 0)
  }

  public sumByTimeRange(service: ServiceChartType, timeRange: TimeRange): number {
    if (timeRange === TimeRange.Weekly) {
      return this.sumWeeklyData(service)
    } else {
      return this.sumMonthlyData(service)
    }
  }
}

const chartDataService = new ChartDataService()

export default chartDataService
