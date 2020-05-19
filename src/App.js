import React, { useState, useEffect } from "react";
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

function App() {
  const [myTheme, setTheme] = useState(lightTheme);
  const [logoImg, setLogoImg] = useState(lightLogo);

  const switchThemeHandler = () => {
    setTheme((prevState) => {
      if (prevState.palette.type === "dark") {
        // localStorage.removeItem("theme");
        localStorage.setItem("theme", "light");
        return lightTheme;
      } else {
        // localStorage.removeItem("theme");
        localStorage.setItem("theme", "dark");
        return darkTheme;
      }
    });
  };
  const switchLogoHandler = () => {
    setLogoImg(() => {
      if (myTheme.palette.type === "dark") {
        return lightLogo;
      } else {
        return darkLogo;
      }
    });
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setLogoImg(darkLogo);
      setTheme(darkTheme);
    } else {
      setLogoImg(lightLogo);
      setTheme(lightTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={myTheme}>
      {/* remove this style later */}
      <Paper style={{ height: "100vh" }}>
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
            <Route path="/about" component={() => <div>About Us</div>} />
            <Route path="/contact" component={() => <div>Contact Us</div>} />
          </Switch>
          {/* <Footer /> */}
        </BrowserRouter>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
