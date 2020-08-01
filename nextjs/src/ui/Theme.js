import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0b79b9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";
const arcGreyLight = "#ffffff";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Railway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      color: "white",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    h2: {
      fontFamily: "Railway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: `${arcBlue}`,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: `${arcBlue}`,
      lineHeight: 1.5,
    },
    h4: {
      fontFamily: "Railway",
      fontWeight: 700,
      fontSize: "1.7rem",
      color: `${arcBlue}`,
      lineHeight: 1.5,
    },
    suntitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: arcGrey,
    },
    subtitle2: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: "#ffffff",
    },
    learnBtn: {
      border: `2px solid ${arcBlue}`,
      color: arcBlue,
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: "0.9rem",
      textTransform: "none",
    },
    body1: {
      color: arcGreyLight,

      "&:selected, &:active span": {
        opacity: 1,
      },
    },
    body2: {
      fontSize: "1.25rem",
      color: arcGrey,
      fontWeight: 300,
    },
  },
  //Styling textInput If using the overrides key of the theme,
  //you need to use the following style sheet name: MuiInputLabel
  //https://material-ui.com/api/input-label/
  overrides: {
    MuiInputLabel: {
      root: {
        color: arcBlue,
        fontSize: "1rem",
      },
    },
    MuiInput: {
      root: {
        color: arcGrey,
        fontWeight: 300,
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcBlue}`,
        },
        "&:hover:not($disabled):not($error):before": {
          borderBottom: `4px solid ${arcBlue}`,
        },
        "&:focused:before": {
          borderBottom: `4px solid ${arcBlue}`,
        },
      },
    },
  },
});
