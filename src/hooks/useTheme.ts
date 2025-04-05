import type { ThemeContext } from '@/services/api/api.types'
import { inject } from 'vue'

export function useTheme(): ThemeContext {
  const theme = inject<ThemeContext>('theme')
  if (!theme) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return theme
}
