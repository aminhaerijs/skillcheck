import type { ChartData } from '@/services/api/api.types'

type ChartDataMockType = ChartData & { monthly?: boolean }

export const getMockRevenueChartData = (): ChartDataMockType[] => [
  {
    xValue: '6 May',
    yValue: 1000,
  },
  {
    xValue: '7 May',
    yValue: 2000,
  },
  {
    xValue: '8 May',
    yValue: 4000,
  },
  {
    xValue: '9 May',
    yValue: 3000,
  },
  {
    xValue: '10 May',
    yValue: 1500,
  },
  {
    xValue: '11 May',
    yValue: 6000,
  },
  {
    xValue: '12 May',
    yValue: 7000,
  },

  {
    xValue: '6 May',
    yValue: 5000,
    monthly: true,
  },
  {
    xValue: '7 May',
    yValue: 4500,
    monthly: true,
  },
  {
    xValue: '8 May',
    yValue: 6200,
    monthly: true,
  },
  {
    xValue: '9 May',
    yValue: 4800,
    monthly: true,
  },
  {
    xValue: '10 May',
    yValue: 3500,
    monthly: true,
  },
  {
    xValue: '11 May',
    yValue: 5500,
    monthly: true,
  },
  {
    xValue: '12 May',
    yValue: 6500,
    monthly: true,
  },
]

export const getMockAccountsChartData = (): ChartDataMockType[] => [
  {
    xValue: '6 May',
    yValue: 1000,
    monthly: true,
  },
  {
    xValue: '7 May',
    yValue: 2000,
    monthly: true,
  },
  {
    xValue: '8 May',
    yValue: 4000,
    monthly: true,
  },
  {
    xValue: '9 May',
    yValue: 3000,
    monthly: true,
  },
  {
    xValue: '10 May',
    yValue: 1500,
    monthly: true,
  },
  {
    xValue: '11 May',
    yValue: 6000,
    monthly: true,
  },
  {
    xValue: '12 May',
    yValue: 7000,
    monthly: true,
  },

  {
    xValue: '6 May',
    yValue: 5000,
  },
  {
    xValue: '7 May',
    yValue: 4500,
  },
  {
    xValue: '8 May',
    yValue: 6200,
  },
  {
    xValue: '9 May',
    yValue: 4800,
  },
  {
    xValue: '10 May',
    yValue: 3500,
  },
  {
    xValue: '11 May',
    yValue: 5500,
  },
  {
    xValue: '12 May',
    yValue: 6500,
  },
]
