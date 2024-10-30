export default defineNuxtPlugin(() => {
  const theme = getTheme();
  setTheme(theme);
});
