import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // css common to DetailsModal and AddDetails

  dialog: {
    width: "40%",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  dialogTitle: {
    padding: "30px 30px 20px 45px",
  },
  dialogContainer: {
    "&.MuiDialogContent-root": {
      paddingTop: 0,
    },
    [theme.breakpoints.down("xs")]: {
      padding: "5px 5px",
    },
  },
  dialogActions: {
    marginBottom: "1em",
    marginRight: "1em",
  },
  detailItem: {
    marginBottom: "10px",
  },
  detailHead: {
    marginRight: "7em",
  },
  listIcon: {
    minWidth: "38px",
  },
  listItemText: {
    flex: "inherit",
    [theme.breakpoints.down("xs")]: {
      "& .MuiTypography-body1": {
        fontSize: "0.8em",
      },
      "& .MuiInputBase-root": {
        fontSize: "0.8em",
      },
    },
  },
  detailDate: {
    [theme.breakpoints.down("xs")]: {
      width: "6.5em",
    },
  },
  dropDownText: {
    minWidth: "10.2em",
    [theme.breakpoints.down("xs")]: {
      minWidth: "6.5em",
      "& .MuiTypography-body1": {
        fontSize: "0.8em",
      },
      "& .MuiInputBase-root": {
        fontSize: "0.8em",
      },
    },
  },
  detailNumber: {
    [theme.breakpoints.down("xs")]: {
      width: "6.5em",
    },
  },
  detailText: {
    [theme.breakpoints.down("xs")]: {
      width: "6.5em",
    },
  },
}));
export default useStyles;
