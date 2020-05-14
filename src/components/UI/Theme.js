import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import amber from "@material-ui/core/colors/amber";

const lightGrey = "#fafafa";

const theme = createMuiTheme({
  palette: {
    common: {
      lightGrey: lightGrey,
    },
    primary: purple,
    secondary: amber,
    // type: "dark",
  },
});

export default createMuiTheme({
  palette: {
    ...theme.palette,
  },

  // custom styles below

  container: {
    margin: "1em 0",
  },

  heading: {
    borderBottom: "2px solid " + theme.palette.primary.main,
    textTransform: "capitalize",
  },

  table: {
    maxWidth: 800,
    [theme.breakpoints.down("xs")]: {
      maxWidth: 500,
      margin: "10px",
    },
    "& .MuiTableCell-root": {
      padding: 0,
      textAlign: "center",
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.8em",
        paddingLeft: "0",
      },
    },
    "& .MuiCardContent-root": {
      padding: "0 0 1em 2em",
      [theme.breakpoints.down("sm")]: {
        padding: "0 0 1em 1em",
      },
    },
  },

  // used in GroupsDetails and FriendsDetails
  displayName: {
    marginLeft: "5em",
    marginTop: "1em",
    marginBottom: "1em",
    background: theme.palette.secondary.main,
    borderRadius: "10px",
    padding: "0.4em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5em",
      color: "black",
      fontSize: "0.9em",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "2em",
    },
  },

  dropdownTcell: {
    backgroundColor: theme.palette.primary.main,
    width: "5em",

    [theme.breakpoints.down("sm")]: {
      width: "2em",
    },
  },

  // used in Friends and Group

  filterArea: {
    backgroundColor: theme.palette.common.lightGrey,
    height: "3em",
    [theme.breakpoints.down("sm")]: {
      height: "2em",
    },
  },
  formLabel: {
    fontSize: "0.9em",
    marginRight: "5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7em",
      marginRight: "3px",
    },
  },
  formControlLabel: {
    marginRight: "5em",
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
    },
  },
  toggleSwitch: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  detailCellHead: {
    color: theme.palette.primary.main,
    fontSize: "0.875rem",
    fontWeight: "700",
  },
  //detailsIcon hover is not disabled currently. Uncommenting below code will disable hover effect
  detailsIcon: {
    // "&:hover": {
    //   backgroundColor: "transparent",
    // },
  },
});
