import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
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
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function OkCancelModal(props) {
  const { dialogOpen, deleteDialogCloseHandler, deleteHandler } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <React.Fragment>
      <Dialog
        classes={{ paper: classes.dialog }}
        open={dialogOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={deleteDialogCloseHandler}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          disableTypography
          //   classes={{ root: classes.dialogTitle }}
          id="alert-dialog-slide-title"
        >
          <Typography variant={matchesSM ? "subtitle2" : "subtitle1"}>
            Are you sure you want to delete this transaction ?
          </Typography>
        </DialogTitle>
        <DialogActions className={classes.dialogActions}>
          <Button
            onClick={() => {
              deleteHandler();
              deleteDialogCloseHandler();
            }}
            color={theme.palette.type === "light" ? "primary" : "secondary"}
            size={matchesSM ? "small" : "medium"}
          >
            Delete
          </Button>
          <Button
            onClick={deleteDialogCloseHandler}
            color={theme.palette.type === "light" ? "primary" : "secondary"}
            size={matchesSM ? "small" : "medium"}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
