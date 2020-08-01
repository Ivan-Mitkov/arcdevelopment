import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./ui/Theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

export default function HOC({ props, children }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <React.Fragment {...props}>
      <ThemeProvider theme={theme}>
        {/* <CssBaseline></CssBaseline> */}
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        ></Header>
        {children}
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        ></Footer>
      </ThemeProvider>
    </React.Fragment>
  );
}
