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
// import AboutUs from "./components/AboutUs";
import Register from "./components/Register";
import Login from "./components/Login";
import * as firebase from "firebase";

function App() {
  const [myTheme, setTheme] = useState(lightTheme);
  const [logoImg, setLogoImg] = useState(lightLogo);
  const [userId, setUserId] = useState(null);

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

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      // console.log("Header logged in if -> " + user.uid);

      setUserId(user.uid);
    } else {
      // No user is signed in.
      // console.log("Header else -> ");
      setUserId(null);
    }
  });

  let routes = null;

  if (userId === null) {
    routes = (
      <React.Fragment>
        <Route
          path="/"
          exact
          component={() => <div style={{ height: "1000px" }}>Sandeep</div>}
        />
        <Route exact path="/register" render={() => <Register />} />
        <Route exact path="/login" component={() => <Login />} />
        <Route
          path="/"
          component={() => <div style={{ height: "1000px" }}>Sandeep</div>}
        />
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Route
          path="/"
          exact
          component={() => <div style={{ height: "1000px" }}>Sandeep</div>}
        />
        <Route exact path="/friends" render={() => <Friends />} />
        <Route exact path="/groups" render={() => <Groups />} />
        {/* <Route
          path="/"
          component={() => <div style={{ height: "1000px" }}>Sandeep</div>}
        /> */}
      </React.Fragment>
    );
  }

  return (
    <ThemeProvider theme={myTheme}>
      <Paper>
        <BrowserRouter>
          <Header
            switchTheme={switchThemeHandler}
            switchLogo={switchLogoHandler}
            logoImg={logoImg}
          />
          <Switch>{routes}</Switch>
          {/* <Footer /> */}
        </BrowserRouter>
      </Paper>
    </ThemeProvider>
  );
}

export default React.memo(App);
