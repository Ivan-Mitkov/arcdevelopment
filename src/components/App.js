import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import Header from "./ui/Header";
import Footer from "./ui/Footer";
import theme from "./ui/Theme";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <div style={{ height: "100vh" }}>Home</div>}
          ></Route>
          <Route
            exact
            path="/services"
            component={() => <div>Services</div>}
          ></Route>
          <Route
            exact
            path="/customsoftware"
            component={() => <div>Custom Software</div>}
          ></Route>
          <Route
            exact
            path="/mobileapps"
            component={() => <div>Mobile Apps</div>}
          ></Route>
          <Route
            exact
            path="/websites"
            component={() => <div>Websites</div>}
          ></Route>
          <Route
            exact
            path="/revolution"
            component={() => <div>The Revolution</div>}
          ></Route>
          <Route
            exact
            path="/about"
            component={() => <div>About Us</div>}
          ></Route>
          <Route
            exact
            path="/contact"
            component={() => <div>Contact Us</div>}
          ></Route>
          <Route
            exact
            path="/estimate"
            component={() => <div>Estimate</div>}
          ></Route>
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
