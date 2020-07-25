import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import GroupIcon from "@material-ui/icons/Group";
import ContactsIcon from "@material-ui/icons/Contacts";
import InfoIcon from "@material-ui/icons/Info";
// import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import HighlightIcon from "@material-ui/icons/Highlight";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar, // this pushes content below toolbar
  },
  logoContainer: {
    marginLeft: "4%",
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "auto",
    },
  },

  logoImg: {
    height: "3em",
    width: "3em",
    marginRight: "0.5em",
    marginLeft: "0.5em",

    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  logoBtn: {
    fontFamily: "kalam",
    fontWeight: "bold",
    fontSize: "1.2rem",
    color: "white",

    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
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
    backgroundColor:
      theme.palette.type === "dark" ? "black" : theme.palette.primary.main,
    height: "100vh",
    color: "white",
    // paddingTop: theme.mixins.toolbar.minHeight,
  },
  listItem: {
    opacity: 0.7,
  },
  listItemLogo: {
    marginLeft: "20%",
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
  lightThemeIcon: {
    color: "white",
  },
  darkThemeIcon: {
    marginBottom: "6px",
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

function Header(props) {
  React.useEffect(() => {
    console.log("Header");
  });
  const { switchTheme, switchLogo, logoImg } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

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
      activeIndex: 0,
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
      name: "Register",
      link: "/register",
      activeIndex: 3,
      icon: <InfoIcon classes={{ root: classes.icons }} />,
    },
    {
      name: "Login",
      link: "/login",
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
      <ListItem classes={{ root: classes.listItemLogo }}>
        <Button onClick={() => setValue(0)} component={Link} to="/">
          <img className={classes.logoImg} src={logoImg} alt="logo" />
        </Button>
      </ListItem>
      {routes.map((route, index) => (
        <React.Fragment key={route + index}>
          <ListItem
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
  const drawer = (
    <Drawer
      classes={{ root: classes.drawer }}
      open={open}
      // onOpen={handleDrawerToggle}
      onClose={handleDrawerToggle}
    >
      {sideDrawerList}
    </Drawer>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <Grid container alignItems="center">
              <IconButton
                onClick={handleDrawerToggle}
                className={classes.iconBtn}
                disableRipple
              >
                <MenuIcon classes={{ root: classes.menuIcon }} />
              </IconButton>
              <Grid
                container
                item
                justify={matchesMD ? "center" : "flex-start"}
                alignItems="flex-end"
                xs
                className={classes.logoContainer}
              >
                <Button onClick={() => setValue(0)} component={Link} to="/">
                  <img className={classes.logoImg} src={logoImg} alt="logo" />
                </Button>
                <Button
                  className={classes.logoBtn}
                  // color="secondary"
                  component={Link}
                  to="/"
                  onClick={() => setValue(0)}
                >
                  Finance Manager
                </Button>
              </Grid>
              <Tabs
                indicatorColor={
                  theme.palette.type === "dark" ? "secondary" : "primary"
                }
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
                    key={index + route}
                  />
                ))}
              </Tabs>
              <IconButton
                disableRipple
                onClick={() => {
                  switchTheme();
                  switchLogo();
                }}
              >
                {theme.palette.type === "dark" ? (
                  <HighlightIcon
                    fontSize={matchesSM ? "small" : "default"}
                    className={classes.darkThemeIcon}
                  />
                ) : (
                  <Brightness4Icon
                    fontSize={matchesSM ? "small" : "default"}
                    className={classes.lightThemeIcon}
                  />
                )}
              </IconButton>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
      {drawer}
    </React.Fragment>
  );
}

export default React.memo(Header);
