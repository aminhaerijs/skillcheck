import type {
  BarChartIcon,
  BoxCubeIcon,
  ChevronDownIcon,
  GridIcon,
  HorizontalDots,
  MailIcon,
  PaperclipIcon,
  SettingsIcon,
  StaredIcon,
  UserGroupIcon,
} from '@/icons'

import type { ComputedRef, Ref } from 'vue'

export interface TableHeader {
  label: string
  class?: string
}

export interface TableRow {
  title: string
  clicks: number
  netRevenue: number
  commssion: number
}

export interface AnalyticsCardProps {
  title: string
  value: number
  percentageChange: number
}

export enum TimeRange {
  Weekly = 'weekly',
  Monthly = 'monthly',
}

export enum ServiceTableType {
  Affiliates = 'affiliates',
  Brands = 'brands',
}

export interface SelectOption {
  value: string | number
  label: string
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $formatNumberWithCommas: (value: number) => string
  }
}

export interface ThemeContext {
  isDarkMode: ComputedRef<boolean>
  toggleTheme: () => void
}

export interface SidebarContextType {
  isExpanded: Ref<boolean>
  isMobileOpen: Ref<boolean>
  isHovered: Ref<boolean>
  activeItem: Ref<string | null>
  openSubmenu: Ref<string | null>
  toggleSidebar: () => void
  toggleMobileSidebar: () => void
  setIsHovered: (isHovered: boolean) => void
  setActiveItem: (item: string | null) => void
  toggleSubmenu: (item: string) => void
}

export interface ChartData {
  xValue: string
  yValue: number
}

export enum ServiceChartType {
  Revenue = 'revenue',
  Accounts = 'accounts',
}

export type IconComponent =
  | typeof GridIcon
  | typeof ChevronDownIcon
  | typeof HorizontalDots
  | typeof UserGroupIcon
  | typeof StaredIcon
  | typeof PaperclipIcon
  | typeof BarChartIcon
  | typeof SettingsIcon
  | typeof MailIcon
  | typeof BoxCubeIcon

export interface MenuItem {
  icon?: IconComponent
  name: string
  path?: string
  badge?: number
  children?: MenuItem[]
  pro?: boolean
}

export interface MenuGroup {
  title?: string
  items: MenuItem[]
}
