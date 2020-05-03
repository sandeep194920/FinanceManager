import React from "react";
import Header from "./components/Header/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/UI/Theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <div>Sandeep</div>} />
          <Route path="/friends" component={() => <div>Friends</div>} />
          <Route path="/groups" component={() => <div>Groups</div>} />
          <Route path="/about" component={() => <div>About Us</div>} />
          <Route path="/contact" component={() => <div>Contact Us</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
