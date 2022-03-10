const hsl = (h: number, s: number, l: number) => `hsl(${h}, ${s}%, ${l}%)`;

const colors = {
  darkBlue: hsl(209, 23, 22),
  veryDarkBlue: hsl(207, 26, 17),
  veryDarkBlueSecondary: hsl(200, 15, 8),
  darkGray: hsl(0, 0, 52),
  veryLightGray: hsl(0, 0, 98),
  white: hsl(0, 0, 100),
};

export const darkTheme = {
  elementsColor: colors.darkBlue,
  bgColor: colors.veryDarkBlue,
  textColor: colors.white,
  inputColor: colors.white,
};

export const lightTheme = {
  elementsColor: colors.white,
  bgColor: colors.veryLightGray,
  textColor: colors.veryDarkBlueSecondary,
  inputColor: colors.darkGray,
};

export const baseTheme = {
  fonts: {
    nunito: "'Nunito Sans', sans-serif;",
  },

  sizes: {
    tablet: "900px",
    mobile: "500px",
  },
};
