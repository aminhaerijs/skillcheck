import type { TableHeader, TableRow } from '@/services/api/api.types'

export const getMockAffiliateTableHeaders = (): TableHeader[] => [
  { label: 'name' },
  { label: 'Clicks' },
  { label: 'Net Revenue' },
  { label: 'Commission' },
]

export const getMockAffiliateTableRows = (): TableRow[] => [
  {
    title: 'John Doe',
    clicks: 889,
    netRevenue: 10934847,
    commssion: 10934842,
  },
  {
    title: 'Jane Smith',
    clicks: 742,
    netRevenue: 8234456,
    commssion: 7542103,
  },
  {
    title: 'Michael Johnson',
    clicks: 1042,
    netRevenue: 13455890,
    commssion: 12999800,
  },
  {
    title: 'Emily Davis',
    clicks: 629,
    netRevenue: 6541283,
    commssion: 6345000,
  },
  {
    title: 'Chris Lee',
    clicks: 951,
    netRevenue: 11734892,
    commssion: 11200000,
  },
  {
    title: 'Olivia Brown',
    clicks: 1103,
    netRevenue: 14321458,
    commssion: 14000000,
  },

  {
    title: 'David Clark',
    clicks: 435,
    netRevenue: 10534872,
    commssion: 10456789,
  },
  {
    title: 'Sophia Turner',
    clicks: 341,
    netRevenue: 12457281,
    commssion: 11890243,
  },
  {
    title: 'Liam White',
    clicks: 136,
    netRevenue: 16029842,
    commssion: 15342910,
  },
  {
    title: 'Isabella Garcia',
    clicks: 456,
    netRevenue: 8792341,
    commssion: 8701203,
  },
  {
    title: 'Ethan Harris',
    clicks: 234,
    netRevenue: 12981267,
    commssion: 12542088,
  },
  {
    title: 'Mia Wilson',
    clicks: 331,
    netRevenue: 11143258,
    commssion: 10894321,
  },
]

export const getMockBrandTableHeaders = (): TableHeader[] => [
  { label: 'brand' },
  { label: 'Clicks' },
  { label: 'Net Revenue' },
  { label: 'Commission' },
]

export const getMockBrandTableRows = (): TableRow[] => [
  {
    title: 'Skrill',
    clicks: 889,
    netRevenue: 10934847,
    commssion: 10934842,
  },
  {
    title: 'Neteller',
    clicks: 742,
    netRevenue: 8234456,
    commssion: 7542103,
  },
  {
    title: 'Payrova',
    clicks: 1042,
    netRevenue: 13455890,
    commssion: 12999800,
  },
  {
    title: 'Transtrak',
    clicks: 629,
    netRevenue: 6541283,
    commssion: 6345000,
  },
  {
    title: 'Quicksend',
    clicks: 951,
    netRevenue: 11734892,
    commssion: 11200000,
  },
  {
    title: 'Swiftpay',
    clicks: 1103,
    netRevenue: 14321458,
    commssion: 14000000,
  },
  {
    title: 'PayPal',
    clicks: 432,
    netRevenue: 5342398,
    commssion: 5284567,
  },
  {
    title: 'Stripe',
    clicks: 478,
    netRevenue: 6541382,
    commssion: 6482903,
  },
  {
    title: 'Revolut',
    clicks: 215,
    netRevenue: 3241593,
    commssion: 3178357,
  },
  {
    title: 'Wise',
    clicks: 399,
    netRevenue: 4921345,
    commssion: 4812398,
  },
  {
    title: 'Zelle',
    clicks: 350,
    netRevenue: 4231427,
    commssion: 4158721,
  },
  {
    title: 'Venmo',
    clicks: 487,
    netRevenue: 5764312,
    commssion: 5639925,
  },
]
