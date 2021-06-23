import { createMuiTheme } from "@material-ui/core"
import createBreakpoints from "@material-ui/core/styles/createBreakpoints"

const breakpoints = createBreakpoints({});
  export default createMuiTheme({
    breakpoints,
    palette: {
      backgroundColor: {
        light: "#f7f8fa",
        main: "#ffffff",
      },
      primary: {
        light: "#ffffff",
        main: "#141E30",
        dark: "#689f38",
      },
      secondary: {
        light: "#f1f5f9",
        main: "#f9f9f9",
        dark: "#f6f6f6",
      },
      dropdownColor: {
        border: "#9a9a9a",
        text: "#292020",
        selection: "#f2f2f2",
      },
      text: {
        primary: "#3a3a3a",
        secondary: "rgba(0, 0, 0, 0.54)",
        success: "#4caf50",
        disabled: "rgba(0, 0, 0, 0.38)",
        hint: "grey",
        black: "#333333",
      },
      button: {
        primary: {
          backgroundColor: "#292020",
          color: "#ffffff",
        },
        secondary: {
          border: "#d9d9d9",
          color: "#333333",
        },
        ghost: {
          backgroundColor: "#b9b9b9",
          color: "#ffffff",
        },
        link: {
          color: "#ffffff",
        },
      },
      menu: {
        main: "#ab521e",
        selection: "#333333",
        unselected: "#9a9a9a",
      },
      lineBorderColor: {
        light: "#eeeeee",
        main: "#e6e6e6",
        dark: "#DCDCDC",
        dBorder: "#9a9a9a",
        tableBorder: "#e0e0e0",
      },
      blackShades: {
        d1: "#111111",
        d2: "#373737",
        d3: "#666666",
        d4: "#878787",
      },
      whiteShades: {
        l1: "#ffffff",
        l2: "#f8f8f8",
        l3: "#d5d5d5",
        l4: "#aaaaaa",
      },
      utils: {
        error: "#ff272e",
        warning: "#ffac07",
        info: "#67b3ff",
        success: "#4caf50",
      },

      scroll: {
        light: "#e6e6e6",
        main: "#fff",
        dark: "#ccc",
      },
    },
    typography: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue",
      fontSize: 16,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 600,
      body1: {
        fontSize: 16,
        fontWeightRegular: 400,
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue",
      },
      body2: {
        fontSize: 14,
        fontWeightRegular: 400,
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue",
      },
      h1: {
        fontWeight: 600,
        fontSize: "28px",
        lineHeight: "inherit",
        [breakpoints.down("sm")]: {
          fontSize: "18px",
        },
      },
      h2: {
        fontWeight: 600,
        fontSize: "24px",
        lineHeight: "inherit",
        [breakpoints.down("sm")]: {
          fontSize: "18px",
        },
      },
      h3: {
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: "inherit",
      },
      h4: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "inherit",
      },
      h5: {
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "inherit",
      },
      h6: {
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "inherit",
      },
      subtitle1: {
        fontWeight: 600,
        fontSize: "34px",
        lineHeight: 1.17,
      },
      subtitle2: {
        fontWeight: 400,
        fontSize: "20px",
        lineHeight: 1.6,
      },
      button: {
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: 1.75,
        textTransform: "inherit",
        padding: "5px 0px",
        minHeight: 35,
        minWidth: 125,
        border: "none",
        borderRadius: "5px",
      },
      authButton: {
        fontSize: "20px",
        fontWeight: 500,
        lineHeight: 1.75,
        textTransform: "inherit",
        minHeight: 35,
        minWidth: 125,
        border: "none",
        borderRadius: "5px",
      },
    },
    spacing: (factor) =>
      [
        0,
        5,
        10,
        15,
        20,
        25,
        30,
        35,
        40,
        45,
        50,
        55,
        60,
        65,
        70,
        75,
        80,
        85,
        90,
        95,
        100,
        105,
      ][factor],
  })
