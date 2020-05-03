import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Link } from "react-router-dom";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import GroupIcon from "@material-ui/icons/Group";
import ContactsIcon from "@material-ui/icons/Contacts";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar, // this pushes content below toolbar
  },
  logoBtn: {
    fontFamily: "kalam",
    fontWeight: "bold",
    fontSize: "1.2rem",
    color: "secondary",

    [theme.breakpoints.down("md")]: {
      margin: "auto",
    },
  },

  tabs: {
    marginLeft: "auto",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  tab: {
    fontSize: "1rem",
    textTransform: "none",
  },
  menuIcon: {
    [theme.breakpoints.down("md")]: {
      display: "block",
      color: "white",
    },
  },
  iconBtn: {
    display: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  drawer: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },

  drawerList: {
    width: 230,
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    color: "white",
    paddingTop: theme.mixins.toolbar.minHeight,
  },
  listItem: {
    opacity: 0.7,
  },
  icons: {
    color: "white",
  },
  selected: {
    "&.Mui-selected": {
      // backgroundColor: theme.palette.secondary.main,
      opacity: 1,
    },
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
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  // const [selectedIndex, setSelectedIndex] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const path = window.location.pathname;
  const handleDrawerToggle = () => {
    setOpen((prevState) => !prevState);
  };

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

  const routes = [
    {
      name: "Home",
      link: "/",
      icon: <HomeIcon classes={{ root: classes.icons }} />,
    },
    {
      name: "Friends",
      link: "/friends",
      activeIndex: 1,
      icon: <GroupIcon classes={{ root: classes.icons }} />,
    },
    {
      name: "Groups",
      link: "/groups",
      activeIndex: 2,
      icon: <GroupAddIcon classes={{ root: classes.icons }} />,
    },
    {
      name: "About Us",
      link: "/about",
      activeIndex: 3,
      icon: <InfoIcon classes={{ root: classes.icons }} />,
    },
    {
      name: "Contact Us",
      link: "/contact",
      activeIndex: 4,
      icon: <ContactsIcon classes={{ root: classes.icons }} />,
    },
  ];

  const sideDrawerList = (
    <List
      className={classes.drawerList}
      component="nav"
      aria-label="sidedrawer list"
    >
      {routes.map((route, index) => (
        <React.Fragment>
          <ListItem
            key={route + index}
            classes={{ root: classes.listItem, selected: classes.selected }}
            selected={window.location.pathname === route.link}
            button
            onClick={handleDrawerToggle}
            component={Link}
            to={route.link}
          >
            <ListItemIcon>{route.icon}</ListItemIcon>
            <ListItemText primary={route.name} />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
  const swipableDrawer = (
    <SwipeableDrawer
      classes={{ root: classes.drawer }}
      open={open}
      onOpen={handleDrawerToggle}
      onClose={handleDrawerToggle}
    >
      {sideDrawerList}
    </SwipeableDrawer>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.iconBtn}
              disableRipple
            >
              <MenuIcon classes={{ root: classes.menuIcon }} />
            </IconButton>
            <Button
              className={classes.logoBtn}
              color="secondary"
              component={Link}
              to="/"
            >
              Finance Manager
            </Button>
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
      {swipableDrawer}
    </React.Fragment>
  );
}

export default Header;
