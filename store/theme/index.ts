import { DEFAULT_THEME, setCurrentThemeEffect, type Theme } from '~/utils/theme'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<Theme>(DEFAULT_THEME)
  watch(theme, setCurrentThemeEffect)

  const setCurrentTheme = (nextTheme: Theme) => {
    theme.value = nextTheme
  }

  const toggleCurrentTheme = () => {
    const newTheme = theme.value === "dark" ? "light" : "dark";
    setCurrentTheme(newTheme);
  }

  return {
    theme: readonly(theme),
    setCurrentTheme,
    toggleCurrentTheme,
  }
})
