import { reactive } from 'vue'
import {
  ServiceTableType,
  TimeRange,
  type TableHeader,
  type TableRow,
} from '@/services/api/api.types'
import {
  getMockAffiliateTableHeaders,
  getMockAffiliateTableRows,
  getMockBrandTableRows,
  getMockBrandTableHeaders,
} from '@/services/mock/tableData'

export class TableDataService {
  private readonly data = reactive({
    affiliates: getMockAffiliateTableRows(),
    brands: getMockBrandTableRows(),
  })

  private readonly headers = {
    affiliates: getMockAffiliateTableHeaders(),
    brands: getMockBrandTableHeaders(),
  }

  public getData(service: ServiceTableType): TableRow[] {
    return this.data[service]
  }

  public getTableHeaders(service: ServiceTableType): TableHeader[] {
    return this.headers[service]
  }

  public filterByTimeRange(service: ServiceTableType, timeRange: TimeRange): TableRow[] {
    if (timeRange === TimeRange.Weekly) {
      return this.getWeeklyData(service)
    } else {
      return this.getMonthlyData(service)
    }
  }

  private getWeeklyData(service: ServiceTableType): TableRow[] {
    return this.data[service].filter((row) => row.clicks >= 600)
  }

  private getMonthlyData(service: ServiceTableType): TableRow[] {
    return this.data[service].filter((row) => row.clicks < 500)
  }
}

const tableDataService = new TableDataService()

export default tableDataService
