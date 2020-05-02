import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar, // this pushes content below toolbar
  },
  tabs: {
    marginLeft: "auto",
  },
  tab: {
    fontSize: "1rem",
    textTransform: "none",
  },
}));

// used to provide light elivation in appbar when content is scrolled
function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const routes = [
  { name: "Home", link: "/", activeIndex: 0 },
  { name: "Friends", link: "/friends", activeIndex: 1 },
  { name: "Groups", link: "/groups", activeIndex: 2 },
  { name: "About Us", link: "/about", activeIndex: 3 },
  { name: "Contact Us", link: "/contact", activeIndex: 4 },
];

function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const path = window.location.pathname;
  useEffect(() => {
    if (path === "/") {
      setValue(0);
    } else if (path === "/friends") {
      setValue(1);
    } else if (path === "/groups") {
      setValue(2);
    } else if (path === "/about") {
      setValue(3);
    } else if (path === "/contact") {
      setValue(4);
    }
  }, [path]);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            Logo
            <Tabs
              indicatorColor="primary"
              value={value}
              onChange={handleChange}
              aria-label="simple tabs"
              className={classes.tabs}
            >
              {routes.map((route, index) => (
                <Tab
                  component={Link}
                  to={route.link}
                  className={classes.tab}
                  label={route.name}
                  disableRipple
                  key={index}
                />
              ))}
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

export default Header;
