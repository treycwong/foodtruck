// AppTheme is basic type for the themes based on dark theme
export type AppTheme = typeof dark;

const dark = {
  name: "dark",
  background: "#5e5c64",
  components: {
    background: "#7a7880",
    shadow1: "#504e55",
    shadow2: "#6c6a73",
    active: "#e4ebf5",
    nonActive: "#9baacf",
    primary: "#6d5dfc",
    danger: "#dc3545e6",
    warning: "#ffca2ce6;",
  },
  font: {
    regular: "#E4EBF5e6",
    button: "#E4EBF5e6",
    placeholder: "#bec8e4",
    warning: "#5e5c64e6",
    valid: "#6FF173",
    invalid: "#FFCCD0",
    logo: "#fff",
    logoShadow1: "#ccc",
    logoShadow2: "#ddd",
  },
};

const light: AppTheme = {
  name: "light",
  background: "#e4ebf5",
  components: {
    background: "#DEE7F2",
    shadow1: "#c8d0e7",
    shadow2: "#FFFFFF",
    active: "#e4ebf5",
    nonActive: "#9baacf",
    primary: "#6d5dfc",
    danger: "#dc3545e6",
    warning: "#ffca2ce6;",
  },
  font: {
    regular: "#504e55e6",
    button: "#E4EBF5e6",
    placeholder: "#504e55e6",
    warning: "#504e55e6",
    valid: "#1F784E",
    invalid: "#BF3845",
    logo: "#6d5dfc",
    logoShadow1: "#ccc",
    logoShadow2: "#ddd",
  },
};

export const Themes: Record<string, AppTheme> = { dark, light };
