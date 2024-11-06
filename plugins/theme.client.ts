import { useThemeStore } from "~/store/theme";

export default defineNuxtPlugin(() => {
  const theme = getInitialTheme();

  // ストアを使わない場合
  setCurrentTheme(theme);

  // ストアを使う場合
  // const themeStore = useThemeStore();
  // themeStore.setCurrentTheme(theme);
});
