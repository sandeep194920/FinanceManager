import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import CallSplitIcon from "@material-ui/icons/CallSplit";
import CategoryIcon from "@material-ui/icons/Category";
import DetailsIcon from "@material-ui/icons/Details";
import Grid from "@material-ui/core/Grid";

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
  listIcon: {
    minWidth: "38px",
  },
  listItemText: {
    flex: "inherit",
    [theme.breakpoints.down("xs")]: {
      "& .MuiTypography-body1": {
        fontSize: "0.8em",
      },
    },
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
  // const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <React.Fragment>
      <Dialog
        classes={{ paper: classes.dialog }}
        open={dialogOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={dialogCloseHandler}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          disableTypography
          classes={{ root: classes.dialogTitle }}
          id="alert-dialog-slide-title"
        >
          <Typography
            color={theme.palette.type === "light" ? "primary" : "secondary"}
            variant={matchesSM ? "subtitle2" : "subtitle1"}
          >
            Sandeep Amarnath (Sa194920)
          </Typography>
        </DialogTitle>

        <Grid container>
          <DialogContent classes={{ root: classes.dialogContainer }}>
            <List>
              <ListItem>
                <Grid container alignItems="center" justify="space-between">
                  <Grid item style={{ display: "inherit" }}>
                    <ListItemIcon classes={{ root: classes.listIcon }}>
                      <DateRangeIcon
                        fontSize={matchesSM ? "small" : "default"}
                        color={
                          theme.palette.type === "dark"
                            ? "secondary"
                            : "primary"
                        }
                      />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        root: classes.listItemText,
                      }}
                      primary={matchesSM ? "Date" : "Transaction Date"}
                    />
                  </Grid>
                  <Grid>
                    <ListItemText
                      classes={{
                        root: classes.listItemText,
                      }}
                      primary="20 March 2020"
                    />
                  </Grid>
                </Grid>
              </ListItem>
              <Divider />

              <ListItem>
                <Grid container alignItems="center" justify="space-between">
                  <Grid item style={{ display: "inherit" }}>
                    <ListItemIcon classes={{ root: classes.listIcon }}>
                      <AccountBalanceWalletOutlinedIcon
                        fontSize={matchesSM ? "small" : "default"}
                        color={
                          theme.palette.type === "dark"
                            ? "secondary"
                            : "primary"
                        }
                      />
                    </ListItemIcon>
                    <ListItemText
                      classes={{ root: classes.listItemText }}
                      primary={matchesSM ? "Amount" : "Transaction Amount"}
                    />
                  </Grid>
                  <Grid>
                    <ListItemText
                      classes={{
                        root: classes.listItemText,
                      }}
                      primary="200$"
                    />
                  </Grid>
                </Grid>
              </ListItem>
              <Divider />

              <ListItem>
                <Grid container alignItems="center" justify="space-between">
                  <Grid item style={{ display: "inherit" }}>
                    <ListItemIcon classes={{ root: classes.listIcon }}>
                      <PersonOutlineOutlinedIcon
                        fontSize={matchesSM ? "small" : "default"}
                        color={
                          theme.palette.type === "dark"
                            ? "secondary"
                            : "primary"
                        }
                      />
                    </ListItemIcon>
                    <ListItemText
                      classes={{ root: classes.listItemText }}
                      primary="Paid by"
                    />
                  </Grid>
                  <Grid>
                    <ListItemText
                      classes={{
                        root: classes.listItemText,
                      }}
                      primary="You"
                    />
                  </Grid>
                </Grid>
              </ListItem>
              <Divider />

              <ListItem>
                <Grid container alignItems="center" justify="space-between">
                  <Grid item style={{ display: "inherit" }}>
                    <ListItemIcon classes={{ root: classes.listIcon }}>
                      <CallSplitIcon
                        fontSize={matchesSM ? "small" : "default"}
                        color={
                          theme.palette.type === "dark"
                            ? "secondary"
                            : "primary"
                        }
                      />
                    </ListItemIcon>
                    <ListItemText
                      classes={{ root: classes.listItemText }}
                      primary="Split type"
                    />
                  </Grid>
                  <Grid>
                    <ListItemText
                      classes={{
                        root: classes.listItemText,
                      }}
                      primary="Equal"
                    />
                  </Grid>
                </Grid>
              </ListItem>
              <Divider />

              <ListItem>
                <Grid container alignItems="center" justify="space-between">
                  <Grid item style={{ display: "inherit" }}>
                    <ListItemIcon classes={{ root: classes.listIcon }}>
                      <CategoryIcon
                        fontSize={matchesSM ? "small" : "default"}
                        color={
                          theme.palette.type === "dark"
                            ? "secondary"
                            : "primary"
                        }
                      />
                    </ListItemIcon>
                    <ListItemText
                      classes={{ root: classes.listItemText }}
                      primary="Category"
                    />
                  </Grid>
                  <Grid>
                    <ListItemText
                      classes={{
                        root: classes.listItemText,
                      }}
                      primary="Entertainment"
                    />
                  </Grid>
                </Grid>
              </ListItem>
              <Divider />

              <ListItem>
                <Grid container alignItems="center" justify="space-between">
                  <Grid item style={{ display: "inherit" }}>
                    <ListItemIcon classes={{ root: classes.listIcon }}>
                      <DetailsIcon
                        fontSize={matchesSM ? "small" : "default"}
                        color={
                          theme.palette.type === "dark"
                            ? "secondary"
                            : "primary"
                        }
                      />
                    </ListItemIcon>
                    <ListItemText
                      classes={{ root: classes.listItemText }}
                      primary="Details"
                    />
                  </Grid>
                  <Grid>
                    <ListItemText
                      classes={{
                        root: classes.listItemText,
                      }}
                      style={{ marginLeft: "39px" }}
                      primary="Watched Starwars"
                    />
                  </Grid>
                </Grid>
              </ListItem>
              <Divider />
            </List>
          </DialogContent>
        </Grid>
        <DialogActions className={classes.dialogActions}>
          <Button
            onClick={dialogCloseHandler}
            color={theme.palette.type === "light" ? "primary" : "secondary"}
            size={matchesSM ? "small" : "medium"}
          >
            Edit
          </Button>
          <Button
            onClick={dialogCloseHandler}
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
