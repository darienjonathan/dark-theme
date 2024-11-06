const THEMES = ["dark", "light"] as const;
export type Theme = (typeof THEMES)[number];

const isTheme = (theme: unknown): theme is Theme =>
  THEMES.some((t) => t === theme);

export const DEFAULT_THEME: Theme = "light";

const removeAllThemes = () => {
  THEMES.forEach((theme) => {
    document.documentElement.classList.remove(`theme-${theme}`);
  });
};

export const setThemeEffect = (theme: Theme) => {
  removeAllThemes();
  document.documentElement.classList.add(`theme-${theme}`);
  localStorage.setItem("theme", theme);
};

export const toggleTheme = () => {
  const currentTheme = getTheme();
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setThemeEffect(newTheme);
}

export const getTheme = () => {
  const localStorageTheme = localStorage.getItem("theme");
  if (isTheme(localStorageTheme)) return localStorageTheme;

  const mediaTheme: Theme | null =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : null;
  if (mediaTheme) return mediaTheme;

  return DEFAULT_THEME;
};
