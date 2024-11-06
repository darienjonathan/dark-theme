import { DEFAULT_THEME, setThemeEffect, type Theme } from '~/utils/theme'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<Theme>(DEFAULT_THEME)
  watch(theme, setThemeEffect)

  const setTheme = (nextTheme: Theme) => {
    console.log("setTheme", nextTheme)
    theme.value = nextTheme
  }

  const toggleTheme = () => {
    const newTheme = theme.value === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  return {
    theme: readonly(theme),
    setTheme,
    toggleTheme,
  }
})
