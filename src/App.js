import React from "react";
import Header from "./components/Header/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/UI/Theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
import Groups from "./components/Groups";
import Friends from "./components/Friends";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
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
    </ThemeProvider>
  );
}

export default App;
