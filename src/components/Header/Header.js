import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar, // this pushes content below toolbar
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

function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
              <Tab
                component={Link}
                to="/"
                className={classes.tab}
                label="Home"
                disableRipple
              />
              <Tab
                component={Link}
                to="/friends"
                className={classes.tab}
                label="Friends"
                disableRipple
              />
              <Tab
                component={Link}
                to="/groups"
                className={classes.tab}
                label="Groups"
                disableRipple
              />
              <Tab
                component={Link}
                to="/about"
                className={classes.tab}
                label="About Us"
                disableRipple
              />
              <Tab
                component={Link}
                to="/contact"
                className={classes.tab}
                label="Contact Us"
                disableRipple
              />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.offset} />
    </React.Fragment>
  );
}

export default Header;
