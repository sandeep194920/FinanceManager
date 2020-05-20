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

const useStyles = makeStyles((theme) => ({
  dialog: {
    margin: "auto",
  },
  dialogContainer: {
    // marginBottom: "1em",
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
  listItemTextHead: {
    marginRight: "6em",
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
        <DialogTitle
          style={{ marginTop: "1em", marginLeft: "5%" }}
          id="alert-dialog-slide-title"
        >
          <Typography
            color={theme.palette.type === "light" ? "primary" : "secondary"}
            variant={matchesSM ? "subtitle2" : "body1"}
          >
            Sandeep Amarnath (Sa194920)
          </Typography>
        </DialogTitle>
        <DialogContent className={classes.dialogContainer}>
          <List>
            <ListItem>
              <ListItemIcon classes={{ root: classes.listIcon }}>
                <DateRangeIcon
                  color={
                    theme.palette.type === "dark" ? "secondary" : "primary"
                  }
                />
              </ListItemIcon>
              <ListItemText
                classes={{ root: classes.listItemTextHead }}
                primary="Transaction Date"
              />
              <ListItemText primary="20 March 2020" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon classes={{ root: classes.listIcon }}>
                <AccountBalanceWalletOutlinedIcon
                  color={
                    theme.palette.type === "dark" ? "secondary" : "primary"
                  }
                />
              </ListItemIcon>
              <ListItemText
                classes={{ root: classes.listItemTextHead }}
                style={{ marginRight: "0em" }}
                primary="Transaction Amount"
              />
              <ListItemText primary="100$" />
            </ListItem>
            <Divider />

            <ListItem>
              <ListItemIcon classes={{ root: classes.listIcon }}>
                <PersonOutlineOutlinedIcon
                  color={
                    theme.palette.type === "dark" ? "secondary" : "primary"
                  }
                />
              </ListItemIcon>
              <ListItemText
                classes={{ root: classes.listItemTextHead }}
                // style={{ marginRight: "0em" }}
                primary="Paid by"
              />
              <ListItemText primary="You" />
            </ListItem>
            <Divider />

            <ListItem>
              <ListItemIcon classes={{ root: classes.listIcon }}>
                <CallSplitIcon
                  color={
                    theme.palette.type === "dark" ? "secondary" : "primary"
                  }
                />
              </ListItemIcon>
              <ListItemText
                classes={{ root: classes.listItemTextHead }}
                style={{ marginRight: "8em" }}
                primary="Split"
              />
              <ListItemText primary="Equal" />
            </ListItem>
            <Divider />

            <ListItem>
              <ListItemIcon classes={{ root: classes.listIcon }}>
                <CategoryIcon
                  color={
                    theme.palette.type === "dark" ? "secondary" : "primary"
                  }
                />
              </ListItemIcon>
              <ListItemText
                classes={{ root: classes.listItemTextHead }}
                style={{ marginRight: "9.5em" }}
                primary="Category"
              />
              <ListItemText primary="Entertainment" />
            </ListItem>
            <Divider />

            <ListItem>
              <ListItemIcon classes={{ root: classes.listIcon }}>
                <DetailsIcon
                  color={
                    theme.palette.type === "dark" ? "secondary" : "primary"
                  }
                />
              </ListItemIcon>
              <ListItemText
                classes={{ root: classes.listItemTextHead }}
                style={{ marginRight: "11em" }}
                primary="Details"
              />
              <ListItemText primary="Starwars movie" />
            </ListItem>
            <Divider />
          </List>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
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
