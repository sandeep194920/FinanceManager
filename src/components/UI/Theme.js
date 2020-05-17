import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import amber from "@material-ui/core/colors/amber";

const grey50 = "#fafafa";
const grey100 = "#f5f5f5";
const grey800 = "#424242";
const grey500 = "#9e9e9e";
const greenAmount = "#8bc34a";
const redAmount = "#ff6d00";

const theme = createMuiTheme({
  palette: {
    common: {
      lightGrey: grey50,
      lightGreyTwo: grey100,
      grey500: grey500,
      grey800: grey800,
      greenAmount: greenAmount,
      redAmount: redAmount,
    },
    primary: purple,
    secondary: amber,
    type: "dark",
  },
});

export default createMuiTheme({
  palette: {
    ...theme.palette,
    common: {
      ...theme.palette.common,
      greenAmount:
        theme.palette.type === "dark"
          ? theme.palette.common.greenAmount
          : "green",
      redAmount:
        theme.palette.type === "dark" ? theme.palette.common.redAmount : "red",
    },
  },

  // custom styles below

  container: {
    margin: "1em 0",
  },

  heading: {
    borderBottom:
      theme.palette.type === "dark"
        ? "2px solid " + theme.palette.secondary.main
        : "2px solid " + theme.palette.primary.main,
    textTransform: "capitalize",
  },

  table: {
    maxWidth: 800,
    [theme.breakpoints.down("md")]: {
      margin: "20px",
    },
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
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.secondary.light
        : theme.palette.secondary.main,
    borderRadius: "10px",
    padding: "0.4em",
    color: "black",
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
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.common.grey500
        : theme.palette.primary.main,
    width: "5em",

    [theme.breakpoints.down("sm")]: {
      width: "4em",
    },

    [theme.breakpoints.down("xs")]: {
      width: "2em",
    },
  },

  // used in Friends and Group

  filterArea: {
    // backgroundColor: theme.palette.common.grey500,
    // backgroundColor: theme.palette.common.lightGrey,

    height: "3em",
    color: theme.palette.type === "dark" ? "white" : "black",

    [theme.breakpoints.down("xs")]: {
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
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
    },
  },
  toggleSwitch: {
    color:
      theme.palette.type === "dark" ? theme.palette.secondary.dark : "white",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  detailCellHead: {
    color:
      theme.palette.type === "dark"
        ? theme.palette.secondary.main
        : theme.palette.primary.main,
    fontSize: "0.875rem",
    fontWeight: "700",
  },
  //detailsIcon hover is not disabled currently. Uncommenting below code will disable hover effect
  detailsIcon: {
    // "&:hover": {
    //   backgroundColor: "transparent",
    // },
  },

  //dark theme css
  displayCard: {
    backgroundColor:
      theme.palette.type === "dark"
        ? undefined // taken from the paper
        : theme.palette.common.lightGrey,
    borderBottom:
      theme.palette.type === "dark"
        ? "1px solid " + theme.palette.common.lightGrey
        : "none",
    borderTop:
      theme.palette.type === "dark"
        ? "1px solid " + theme.palette.common.lightGrey
        : "none",
    borderRight:
      theme.palette.type === "dark"
        ? "1px solid " + theme.palette.common.lightGrey
        : "none",
  },

  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor:
          theme.palette.type === "dark" ? "black" : theme.palette.primary.main,
      },
    },
  },
});
