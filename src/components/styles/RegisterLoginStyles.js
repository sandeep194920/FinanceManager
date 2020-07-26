import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    margin: "1em 0",
    minHeight: "100vh",
  },
  heading: {
    borderBottom:
      theme.palette.type === "dark"
        ? "2px solid " + theme.palette.secondary.main
        : "2px solid " + theme.palette.primary.main,
    textTransform: "capitalize",
  },

  registerLoginContainer: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.common.grey700
        : theme.palette.common.lightGrey,

    width: 500,
    margin: "30px",
    [theme.breakpoints.down("md")]: {
      margin: "40px",
      width: 600,
    },
    [theme.breakpoints.down("xs")]: {
      margin: "30px auto",
      width: 300,
    },
  },
  registerLoginContainerRow: {
    margin: "1.9em",
    [theme.breakpoints.down("md")]: {
      margin: "1.2em",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "30px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "5px",
    },
  },
  textField: {
    width: "80%",
    [theme.breakpoints.down("xs")]: {
      width: "70%",
    },
  },
  icon: {
    marginRight: "0.5em",
    marginTop: "0.4em",
    cursor: "default",
    [theme.breakpoints.down("xs")]: {
      marginRight: "0.3em",
    },
  },
  btn: {
    marginBottom: "2em",
    [theme.breakpoints.down("xs")]: {
      marginRight: "1em",
    },
  },
  CardContent: {
    padding: "0",
  },
}));

export default useStyles;
