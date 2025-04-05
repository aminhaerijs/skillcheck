import type { AnalyticsCardProps } from '@/services/api/api.types'

export const getMockAnalyticsCard = (): AnalyticsCardProps[] => [
  {
    title: 'Monthly New Affiliates',
    value: 256,
    percentageChange: 12.4,
  },
  {
    title: 'Monthly New playes',
    value: 680,
    percentageChange: 2.5,
  },
  {
    title: 'First time depositors',
    value: 256,
    percentageChange: 12.4,
  },
  {
    title: 'Active Players',
    value: 1620,
    percentageChange: 12.4,
  },
]
