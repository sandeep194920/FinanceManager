import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  dialog: {
    margin: "auto",
  },
  dialogContainer: {},
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

export default function DetailsModal(props) {
  const { dialogOpen, dialogCloseHandler } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  //   const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <React.Fragment>
      <Dialog
        className={classes.dialog}
        open={dialogOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={dialogCloseHandler}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          <Typography
            color={theme.palette.type === "light" ? "primary" : "secondary"}
            variant={matchesSM ? "subtitle2" : "body1"}
          >
            Sandeep Amarnath (Sa194920)
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Grid
            className={classes.dialogContainer}
            container
            spacing={2}
            direction="column"
          >
            <Grid container item justify="space-between" alignItems="center">
              <Typography
                className={classes.detailHead}
                variant="subtitle2"
                color="textPrimary"
              >
                Transaction Date &nbsp;
              </Typography>
              <Typography variant="subtitle2" color="textPrimary">
                20 Mar 2019
              </Typography>
            </Grid>

            <Grid container item justify="space-between" alignItems="center">
              <Typography
                className={classes.detailHead}
                variant="subtitle2"
                color="textPrimary"
              >
                Transaction Amount &nbsp;
              </Typography>
              <Typography variant="subtitle2" color="textPrimary">
                20$
              </Typography>
            </Grid>

            <Grid container item justify="space-between" alignItems="center">
              <Typography
                className={classes.detailHead}
                variant="subtitle2"
                color="textPrimary"
              >
                Paid by &nbsp;
              </Typography>
              <Typography variant="subtitle2" color="textPrimary">
                You
              </Typography>
            </Grid>

            <Grid container item justify="space-between" alignItems="center">
              <Typography
                className={classes.detailHead}
                variant="subtitle2"
                color="textPrimary"
              >
                Split type &nbsp;
              </Typography>
              <Typography variant="subtitle2" color="textPrimary">
                Equal
              </Typography>
            </Grid>

            <Grid container item justify="space-between" alignItems="center">
              <Typography
                className={classes.detailHead}
                variant="subtitle2"
                color="textPrimary"
              >
                Category &nbsp;
              </Typography>
              <Typography variant="subtitle2" color="textPrimary">
                Entertainment
              </Typography>
            </Grid>

            <Grid container item justify="space-between" alignItems="center">
              <Typography
                className={classes.detailHead}
                variant="subtitle2"
                color="textPrimary"
              >
                Details &nbsp;
              </Typography>
              <Typography variant="subtitle2" color="textPrimary">
                Watched Starwars movie
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={dialogCloseHandler}
            color={theme.palette.type === "light" ? "primary" : "secondary"}
          >
            Edit
          </Button>
          <Button
            onClick={dialogCloseHandler}
            color={theme.palette.type === "light" ? "primary" : "secondary"}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
