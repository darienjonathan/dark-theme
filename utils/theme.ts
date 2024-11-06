const THEMES = ["dark", "light"] as const;
export type Theme = (typeof THEMES)[number];

const isTheme = (theme: unknown): theme is Theme =>
  THEMES.some((t) => t === theme);

export const DEFAULT_THEME: Theme = "light";

const getCurrentTheme = () => document.documentElement.style.getPropertyValue("--theme");

export const setCurrentTheme = (theme: Theme) => {
  document.documentElement.style.setProperty("--theme", theme);
  setCurrentThemeEffect(theme);
}

const removeAllThemes = () => {
  THEMES.forEach((theme) => {
    document.documentElement.classList.remove(`theme-${theme}`);
  });
};

export const setCurrentThemeEffect = (theme: Theme) => {
  removeAllThemes();
  document.documentElement.classList.add(`theme-${theme}`);
  localStorage.setItem("theme", theme);
};

export const toggleCurrentTheme = () => {
  const currentTheme = getCurrentTheme();
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setCurrentTheme(newTheme);
}

export const getInitialTheme = () => {
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
