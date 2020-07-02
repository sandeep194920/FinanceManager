import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
  filterArea: {
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
}));

export default useStyles;
