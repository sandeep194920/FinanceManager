import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    margin: "1em 0",
    minHeight: "100vh",
  },
  registerLoginContainer: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.common.grey700
        : theme.palette.common.lightGrey,

    width: 500,
    margin: "30px",
    [theme.breakpoints.down("md")]: {
      margin: "20px",
      width: 500,
    },
    [theme.breakpoints.down("xs")]: {
      margin: "5px",
      width: 300,
    },
  },
  registerLoginContainerRow: {
    margin: "1.2em",
    [theme.breakpoints.down("md")]: {
      margin: "1.2em",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0.8em",
    },
  },
  textField: {
    width: "80%",
    [theme.breakpoints.down("xs")]: {
      width: "60%",
    },
  },
  heading: {
    borderBottom:
      theme.palette.type === "dark"
        ? "2px solid " + theme.palette.secondary.main
        : "2px solid " + theme.palette.primary.main,
    textTransform: "capitalize",
  },
}));

export default useStyles;
