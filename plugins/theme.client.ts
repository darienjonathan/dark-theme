import { useThemeStore } from "~/store/theme";

export default defineNuxtPlugin(() => {
  const theme = getInitialTheme();

  // ストアを使わない場合
  // setCurrentThemeEffect(theme);

  // ストアを使う場合
  const themeStore = useThemeStore();
  themeStore.setCurrentTheme(theme);
});
