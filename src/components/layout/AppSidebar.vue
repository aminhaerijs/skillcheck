<template>
  <aside :class="[
    'fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-gray-100 dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-99999 border-r border-gray-200',
    {
      'lg:w-[290px]': isExpanded || isMobileOpen || isHovered,
      'lg:w-[90px]': !isExpanded && !isHovered,
      'translate-x-0 w-[290px]': isMobileOpen,
      '-translate-x-full': !isMobileOpen,
      'lg:translate-x-0': true,
    },
  ]" @mouseenter="!isExpanded && (isHovered = true)" @mouseleave="isHovered = false">
    <div :class="['pr-4 pt-4 flex', !isExpanded && !isHovered ? 'lg:justify-center' : 'justify-start']">
      <img v-if="isExpanded || isHovered || isMobileOpen" class="dark:hidden" src="../../assets/images/logo.svg"
        alt="Logo" width="50" height="50" />
      <img v-if="isExpanded || isHovered || isMobileOpen" class="hidden dark:block" src="../../assets/images/logo.svg"
        alt="Logo" width="50" height="50" />
      <img v-else src="../../assets/images/logo.svg" alt="Logo" width="32" height="32" />
    </div>

    <div class="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
      <nav class="mb-6">
        <div class="flex flex-col gap-4">
          <div v-for="(menuGroup, groupIndex) in menuGroups" :key="groupIndex">
            <h2 :class="[
              'mb-4 text-xs uppercase flex leading-[20px] text-gray-400',
              !isExpanded && !isHovered ? 'lg:justify-center' : 'justify-start',
            ]">
              <template v-if="isExpanded || isHovered || isMobileOpen">
                {{ menuGroup.title }}
              </template>
              <HorizontalDots v-else />
            </h2>
            <ul class="flex flex-col gap-2">
              <li v-for="(item, index) in menuGroup.items" :key="item.name" class="-ml-1">
                <button v-if="item.children" @click="toggleSubmenu(groupIndex, index)" :class="[
                  'menu-item group w-full',
                  {
                    'menu-item-active': isSubmenuExpanded(groupIndex, index),
                    'menu-item-inactive': !isSubmenuExpanded(groupIndex, index),
                  },
                  !isExpanded && !isHovered ? 'lg:justify-center' : 'lg:justify-start',
                ]">
                  <span :class="[
                    isSubmenuExpanded(groupIndex, index)
                      ? 'menu-item-icon-active'
                      : 'menu-item-icon-inactive',
                  ]">
                    <component :is="item.icon" />
                  </span>
                  <span v-if="isExpanded || isHovered || isMobileOpen" class="menu-item-text">{{
                    item.name
                  }}</span>
                  <ChevronDownIcon v-if="isExpanded || isHovered || isMobileOpen" :class="[
                    'ml-auto w-5 h-5 transition-transform duration-200',
                    {
                      'rotate-180 text-brand-500': isSubmenuExpanded(groupIndex, index),
                    },
                  ]" />
                </button>

                <a v-else-if="item.path" href="#" @click.prevent="selectedPath = item.path" :class="[
                  'menu-item group flex',
                  {
                    'menu-item-active': isRouteSelected(item.path),
                    'menu-item-inactive': !isRouteSelected(item.path),
                  },
                  !isExpanded && !isHovered ? 'lg:justify-center' : 'lg:justify-start',
                ]">
                  <span :class="[
                    isRouteSelected(item.path)
                      ? 'menu-item-icon-active'
                      : 'menu-item-icon-inactive',
                  ]" class="w-4 mr-2">
                    <component :is="item.icon" />
                  </span>
                  <span v-if="isExpanded || isHovered || isMobileOpen" class="menu-item-text">
                    {{ item.name }}
                  </span>
                  <span class="flex items-center gap-1 ml-auto" v-if="isExpanded || isHovered || isMobileOpen">
                    <span v-if="item.badge" :class="[
                      'menu-dropdown-badge',
                      {
                        'menu-dropdown-badge-active': isRouteSelected(item.path),
                        'menu-dropdown-badge-inactive': !isRouteSelected(item.path),
                      },
                    ]">
                      {{ item.badge }}
                    </span>
                  </span>
                </a>

                <div v-show="isSubmenuExpanded(groupIndex, index) &&
                  (isExpanded || isHovered || isMobileOpen)
                  ">
                  <ul class="mt-2 space-y-1 ml-9">
                    <li v-for="subItem in item.children" :key="subItem.name">
                      <a @click.prevent="subItem.path && (selectedPath = subItem.path)" href="#" :class="[
                        'menu-dropdown-item',
                        {
                          'menu-dropdown-item-active': isRouteSelected(subItem.path ?? ''),
                          'menu-dropdown-item-inactive': !isRouteSelected(subItem.path ?? ''),
                        },
                      ]">
                        {{ subItem.name }}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  GridIcon,
  ChevronDownIcon,
  HorizontalDots,
  UserGroupIcon,
  StaredIcon,
  PaperclipIcon,
  BarChartIcon,
  SettingsIcon,
  MailIcon,
} from '../../icons'
import BoxCubeIcon from '@/icons/BoxCubeIcon.vue'
import { useSidebar } from '@/hooks/useSidebar'
import type { MenuGroup } from '@/services/api/api.types'

const selectedPath = ref('dashboard')
const { isExpanded, isMobileOpen, isHovered, openSubmenu } = useSidebar()

const menuGroups: MenuGroup[] = [
  {
    items: [
      { icon: GridIcon, name: 'Dashboard', path: 'dashboard' },
      { icon: BarChartIcon, name: 'Reports', path: 'reports' },
      { icon: UserGroupIcon, name: 'Affiliates', path: 'affiliates', badge: 2 },
      { icon: UserGroupIcon, name: 'Players', path: 'players' },
      { icon: PaperclipIcon, name: 'Brands', path: 'brands' },
      { icon: StaredIcon, name: 'Marketing', path: 'marketing' },
      { icon: BoxCubeIcon, name: 'Finance', path: 'finance', badge: 2 },
    ],
  },
  {
    items: [
      { icon: MailIcon, name: 'Notifications', path: 'notifications' },
      {
        icon: SettingsIcon,
        name: 'Tools',
        children: [
          { name: 'Tool 1', path: '/1' },
          { name: 'Tool 2', path: '/2' },
        ],
      },
    ],
  },
]

const isRouteSelected = (path: string) => selectedPath.value === path

const toggleSubmenu = (groupIndex: number, itemIndex: number) => {
  const key = `${groupIndex}-${itemIndex}`
  openSubmenu.value = openSubmenu.value === key ? null : key
}

const hasActiveSubmenuRoute = computed(() => {
  return menuGroups.some((group) =>
    group.items.some(
      (item) => item.children && item.children.some((subItem) => isRouteSelected(subItem.path!)),
    ),
  )
})

const isSubmenuExpanded = (groupIndex: number, itemIndex: number) => {
  const key = `${groupIndex}-${itemIndex}`
  return (
    openSubmenu.value === key ||
    (hasActiveSubmenuRoute.value &&
      menuGroups[groupIndex].items[itemIndex].children?.some((subItem) =>
        isRouteSelected(subItem.path!),
      ))
  )
}
</script>
