import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0b79b9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";
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
    learnBtn: {
      border: `2px solid ${arcBlue}`,
      color: arcBlue,
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: "0.9rem",
      textTransform: "none",
    },
  },
});
