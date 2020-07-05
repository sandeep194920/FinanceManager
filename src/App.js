import React, { useState, useEffect, useCallback } from "react";
import Header from "./components/Header/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import lightTheme from "./components/UI/LightTheme";
import darkTheme from "./components/UI/DarkTheme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
import Groups from "./components/EasySplit/Groups";
import Friends from "./components/EasySplit/Friends";
import Paper from "@material-ui/core/Paper";
import darkLogo from "./assets/darkLogo.png";
import lightLogo from "./assets/lightLogo.png";
import AboutUs from "./components/AboutUs";

function App() {
  const [myTheme, setTheme] = useState(lightTheme);
  const [logoImg, setLogoImg] = useState(lightLogo);

  const switchThemeHandler = useCallback(() => {
    setTheme((prevState) => {
      if (prevState.palette.type === "dark") {
        localStorage.setItem("theme", "light");
        return lightTheme;
      } else {
        localStorage.setItem("theme", "dark");
        return darkTheme;
      }
    });
  }, [setTheme]);
  const switchLogoHandler = useCallback(() => {
    setLogoImg(() => {
      if (myTheme.palette.type === "dark") {
        return lightLogo;
      } else {
        return darkLogo;
      }
    });
  }, [setLogoImg, myTheme.palette.type]);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setLogoImg(darkLogo);
      setTheme(darkTheme);
    } else {
      setLogoImg(lightLogo);
      setTheme(lightTheme);
    }
  }, [setLogoImg, setTheme]);

  return (
    <ThemeProvider theme={myTheme}>
      {/* remove this style later */}
      {/* <Paper style={{ height: "100vh" }}> */}
      <Paper>
        <BrowserRouter>
          <Header
            switchTheme={switchThemeHandler}
            switchLogo={switchLogoHandler}
            logoImg={logoImg}
          />
          <Switch>
            <Route
              path="/"
              exact
              component={() => <div style={{ height: "1000px" }}>Sandeep</div>}
            />
            <Route path="/friends" render={() => <Friends />} />
            <Route path="/groups" render={() => <Groups />} />
            <Route path="/about" render={() => <AboutUs />} />
            <Route path="/contact" component={() => <div>Contact Us</div>} />
          </Switch>
          {/* <Footer /> */}
        </BrowserRouter>
      </Paper>
    </ThemeProvider>
  );
}

export default React.memo(App);
