import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import useStyles from "../styles/DetailsModalAddDetailsStyles";
import Grid from "@material-ui/core/Grid";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DateRangeIcon from "@material-ui/icons/DateRange";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import CallSplitIcon from "@material-ui/icons/CallSplit";
import CategoryIcon from "@material-ui/icons/Category";
import DetailsIcon from "@material-ui/icons/Details";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import TextField from "@material-ui/core/TextField";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker } from "@material-ui/pickers";
import * as actionTypes from "./store/actions";
import { connect } from "react-redux";
import {
  MuiPickersUtilsProvider,
  // KeyboardDatePicker,
} from "@material-ui/pickers";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const AddDetails = (props) => {
  const {
    userId,
    addDialogOpen,
    dialogCloseHandler,
    // addHandler,
    // addDetails,
    // setAddDetails,
    friendName,
    groupName,
    onAddDetailsForFriend, // doesnt come from FriendsDetails but comes from mapStateToProps
    onAddDetailsForGroup, // doesnt come from GroupsDetails but comes from mapStateToProps
  } = props;

  const whopaidFriend = [
    {
      value: "You",
      label: "You",
    },
    {
      value: friendName,
      label: friendName,
    },
  ];

  const whopaidGroup = [
    {
      value: "You",
      label: "You",
    },
    {
      value: groupName,
      label: groupName,
    },
  ];

  const splitTypes = [
    {
      value: "Equal",
      label: "Equal",
    },
    {
      value: "No Split",
      label: "No Split",
    },
    {
      value: "Custom",
      label: "Custom",
    },
  ];

  const categories = [
    {
      value: "Entertainment",
      label: "Entertainment",
    },
    {
      value: "Groceries",
      label: "Groceries",
    },
    {
      value: "Movies",
      label: "Movies",
    },
    {
      value: "Other",
      label: "Other",
    },
  ];

  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  // Edit details related below
  const [paidBy, setPaidBy] = React.useState(whopaidFriend[0].value);
  const [splitType, setSplitType] = React.useState(splitTypes[0].value);
  const [category, setCategory] = React.useState(categories[0].value);
  const dateFormat = require("dateformat");
  const [selectedDate, setSelectedDate] = React.useState(
    dateFormat(new Date(), "dd mmm, yyyy")
  );

  const [transactionAmt, setTransactionAmt] = React.useState("");
  const [oweAmt, setOweAmt] = React.useState("");
  const [details, setDetails] = React.useState("");

  // useEffect(() => {
  //   setSplitType();
  //   setCategory();
  //   setPaidBy();
  // }, [
  //   setSplitType,
  //   setCategory,
  //   setPaidBy,
  //   categories,
  //   splitTypes,
  //   whopaidFriend,
  // ]);

  const handleDateChange = (date) => {
    setSelectedDate(dateFormat(date, "dd mmm, yyyy"));
  };

  const onAddHandler = (event) => {
    event.preventDefault();
    const addObject = {
      date: selectedDate,
      transactionAmount: transactionAmt,
      paidBy: paidBy,
      type: splitType,
      category: category,
      owe: oweAmt,
      details: details,
      // detailId: currentDetails.detailId, // we will add it in the action creator because we don't know which index it should go to yet. We get the detailIds from firestore for this user and then increment the detailId and add it
      userId: userId,
    };
    // addHandler({
    //   ...addObject,
    // });
    console.log("The add Object is ");
    console.log(addObject);
    if (friendName) {
      console.log("FRIEND IS COMING");
      onAddDetailsForFriend(addObject);
    } else if (groupName) {
      console.log("GROUP IS COMING");
      onAddDetailsForGroup(addObject);
    }
    dialogCloseHandler();
  };
  // depends if it comes from FriendsDetails or GroupsDetails
  // if friendName is not null then it comes from FriendsDetails
  // if groupName is not null then it comes from GroupsDetails
  let whoPaid = [];
  let detailsName = null;
  if (friendName) {
    detailsName = friendName;
    console.log("The friendName is " + friendName);
    console.log("The groupName is " + groupName);
    whoPaid = whopaidFriend.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ));
  } else if (groupName) {
    detailsName = groupName;
    console.log("The friendName is " + friendName);
    console.log("The groupName is " + groupName);
    whoPaid = whopaidGroup.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ));
  }

  const editAddFields = {
    editTransactionDate: (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          id="date-picker-dialog"
          format="dd MMM, yyyy"
          color={theme.palette.type === "dark" ? "secondary" : "primary"}
          value={selectedDate}
          onChange={handleDateChange}
          classes={{
            root: classes.listItemText,
          }}
          maxDate={new Date()}
          className={classes.detailDate}
        />
      </MuiPickersUtilsProvider>
    ),
    editTransactionAmount: (
      <TextField
        required
        type="number"
        color={theme.palette.type === "dark" ? "secondary" : "primary"}
        defaultValue=""
        classes={{
          root: classes.listItemText,
        }}
        className={classes.detailNumber}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(event) => setTransactionAmt(event.target.value)}
      />
    ),
    editPaidBy: (
      <TextField
        id="standard-select-currency-native"
        classes={{ root: classes.dropDownText }}
        select
        value={paidBy}
        color={theme.palette.type === "dark" ? "secondary" : "primary"}
        onChange={(event) => setPaidBy(event.target.value)}
        SelectProps={{
          native: true,
        }}
      >
        {whoPaid}
      </TextField>
    ),
    editSplitType: (
      <TextField
        id="standard-select-currency-native"
        classes={{ root: classes.dropDownText }}
        select
        value={splitType}
        color={theme.palette.type === "dark" ? "secondary" : "primary"}
        onChange={(event) => setSplitType(event.target.value)}
        SelectProps={{
          native: true,
        }}
      >
        {splitTypes.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
    ),
    editCategory: (
      <TextField
        id="standard-select-currency-native"
        classes={{ root: classes.dropDownText }}
        select
        value={category}
        color={theme.palette.type === "dark" ? "secondary" : "primary"}
        onChange={(event) => setCategory(event.target.value)}
        // classes={{
        //   root: classes.listItemText,
        // }}
        SelectProps={{
          native: true,
        }}
      >
        {categories.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
    ),
    editYouOwe: (
      <TextField
        required
        color={theme.palette.type === "dark" ? "secondary" : "primary"}
        type="number"
        classes={{
          root: classes.listItemText,
        }}
        className={classes.detailNumber}
        defaultValue={oweAmt}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(event) => setOweAmt(event.target.value)}
      />
    ),
    editDetails: (
      <TextField
        required
        id="standard-txt"
        classes={{
          root: classes.listItemText,
        }}
        className={classes.detailText}
        color={theme.palette.type === "dark" ? "secondary" : "primary"}
        defaultValue={details}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(event) => setDetails(event.target.value)}
      />
    ),
  };

  let transactionDateField = editAddFields.editTransactionDate;
  let transactionAmountField = editAddFields.editTransactionAmount;
  let paidByField = editAddFields.editPaidBy;
  let splitTypeField = editAddFields.editSplitType;
  let categoriesField = editAddFields.editCategory;
  let youOweField = editAddFields.editYouOwe;
  let detailsField = editAddFields.editDetails;

  return (
    <Dialog
      classes={{ paper: classes.dialog }}
      open={addDialogOpen}
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
          {`${detailsName} (${userId})`}
        </Typography>
      </DialogTitle>

      <form onSubmit={(event) => onAddHandler(event)}>
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
                  <Grid>{transactionDateField}</Grid>
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
                  <Grid>{transactionAmountField}</Grid>
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
                  <Grid>{paidByField}</Grid>
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
                  <Grid>{splitTypeField}</Grid>
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
                  <Grid>{categoriesField}</Grid>
                </Grid>
              </ListItem>
              <Divider />

              <ListItem>
                <Grid container alignItems="center" justify="space-between">
                  <Grid item style={{ display: "inherit" }}>
                    <ListItemIcon classes={{ root: classes.listIcon }}>
                      <AttachMoneyIcon
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
                      primary="You Owe"
                    />
                  </Grid>
                  <Grid>{youOweField}</Grid>
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
                  <Grid>{detailsField}</Grid>
                </Grid>
              </ListItem>
              <Divider />
            </List>
          </DialogContent>
        </Grid>
        <DialogActions className={classes.dialogActions}>
          <Grid container>
            {/* <Button
              style={{
                marginLeft: "35px",
                color: theme.palette.common.red,
              }}
              onClick={deleteDialogOpenHandler}
              color={theme.palette.type === "light" ? "primary" : "secondary"}
              size={matchesSM ? "small" : "medium"}
            >
              Delete
            </Button> */}

            <div style={{ marginLeft: "auto" }}>
              <Button
                type="submit"
                // onClick={onAddHandler}
                // onClick={(event) => {
                //   event.preventDefault();
                //   onAddHandler(event);
                // }}
                color={theme.palette.type === "light" ? "primary" : "secondary"}
                size={matchesSM ? "small" : "medium"}
              >
                Add
              </Button>

              <Button
                onClick={dialogCloseHandler}
                color={theme.palette.type === "light" ? "primary" : "secondary"}
                size={matchesSM ? "small" : "medium"}
              >
                Cancel
              </Button>
            </div>
          </Grid>
        </DialogActions>
      </form>
    </Dialog>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddDetailsForFriend: (newDetails) =>
      dispatch(actionTypes.addDetailsFriend(newDetails)),
    onAddDetailsForGroup: (newDetails) =>
      dispatch(actionTypes.addDetailsGroup(newDetails)),
  };
};

export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps
)(React.memo(AddDetails));
