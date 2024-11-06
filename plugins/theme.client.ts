import { useThemeStore } from "~/store/theme";

export default defineNuxtPlugin(() => {
  const theme = getTheme();

  // ストアを使わない場合
  // setThemeEffect(theme);

  // ストアを使う場合
  const themeStore = useThemeStore();
  themeStore.setTheme(theme);
});
