import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
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
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Grid from "@material-ui/core/Grid";
import DeleteCancelModal from "../EasySplit/DeleteCancelModal";
import TextField from "@material-ui/core/TextField";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker } from "@material-ui/pickers";
import useStyles from "../styles/DetailsModalAddDetailsStyles";
import {
  MuiPickersUtilsProvider,
  // KeyboardDatePicker,
} from "@material-ui/pickers";
// redux
import { connect } from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DetailsModal(props) {
  console.log("DetailsModal");
  const {
    userId,

    updateDialogOpen,

    dialogCloseHandler,
    editMode,
    // editCloseHandler,
    editOpenHandler,
    updateHandler,
    deleteHandler,
    currentDetails,
    setCurrentDetails,
    friendName,
    groupName,
  } = props;

  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  // const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  // Edit details related below
  const [paidBy, setPaidBy] = React.useState(currentDetails.paidBy);
  const [splitType, setSplitType] = React.useState(currentDetails.type);
  const [category, setCategory] = React.useState(currentDetails.category);
  const dateFormat = require("dateformat");
  const [selectedDate, setSelectedDate] = React.useState(
    dateFormat(new Date(currentDetails.date), "dd mmm, yyyy")
  );

  const [transactionAmt, setTransactionAmt] = React.useState(
    currentDetails.transactionAmount
  );
  const [oweAmt, setOweAmt] = React.useState(currentDetails.owe);
  const [details, setDetails] = React.useState(currentDetails.details);

  const handleDateChange = (date) => {
    setSelectedDate(dateFormat(date, "dd mmm, yyyy"));
  };

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
      value: "Medical",
      label: "Medical",
    },
    {
      value: "Other",
      label: "Other",
    },
  ];

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
  // jsx related to edit Details

  const editTextFields = {
    editTransactionDate: (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          id="date-picker-dialog"
          format="dd MMM, yyyy"
          color={theme.palette.type === "dark" ? "secondary" : "primary"}
          // value={selectedDate}
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
        id="standard-number"
        type="number"
        color={theme.palette.type === "dark" ? "secondary" : "primary"}
        defaultValue={transactionAmt}
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
        color={theme.palette.type === "dark" ? "secondary" : "primary"}
        type="number"
        classes={{
          root: classes.listItemText,
        }}
        className={classes.detailNumber}
        defaultValue={`${oweAmt}`}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(event) => setOweAmt(event.target.value)}
      />
    ),
    editDetails: (
      <TextField
        id="standard-txt"
        classes={{
          root: classes.listItemText,
        }}
        className={classes.detailText}
        color={theme.palette.type === "dark" ? "secondary" : "primary"}
        defaultValue={currentDetails.details}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(event) => setDetails(event.target.value)}
      />
    ),
  };

  const detailFields = {
    transactionDate: (
      <ListItemText
        classes={{
          root: classes.listItemText,
        }}
        primary={currentDetails.date}
        // primary={selectedDate}
      />
    ),
    transactionAmount: (
      <ListItemText
        classes={{
          root: classes.listItemText,
        }}
        primary={"$" + currentDetails.transactionAmount}
      />
    ),
    paidBy: (
      <ListItemText
        classes={{
          root: classes.listItemText,
        }}
        primary={currentDetails.paidBy}
      />
    ),
    splitType: (
      <ListItemText
        classes={{
          root: classes.listItemText,
        }}
        primary={currentDetails.type}
      />
    ),
    category: (
      <ListItemText
        classes={{
          root: classes.listItemText,
        }}
        primary={currentDetails.category}
      />
    ),
    youOwe:
      currentDetails.owe >= 0 ? (
        <ListItemText
          style={{ color: theme.palette.common.green }}
          classes={{
            root: classes.listItemText,
          }}
          primary={`$${currentDetails.owe}`}
        />
      ) : (
        <ListItemText
          style={{ color: theme.palette.common.red }}
          classes={{
            root: classes.listItemText,
          }}
          primary={`$${currentDetails.owe}`}
        />
      ),
    // <ListItemText
    //   classes={{
    //     root: classes.listItemText,
    //   }}
    //   primary={`$${currentDetails.owe}`}
    // />
    details: (
      <ListItemText
        classes={{
          root: classes.listItemText,
        }}
        style={{ marginLeft: "39px" }}
        primary={details}
      />
    ),
  };

  let transactionDateField = detailFields.transactionDate;
  let transactionAmountField = detailFields.transactionAmount;
  let paidByField = detailFields.paidBy;
  let splitTypeField = detailFields.splitType;
  let categoriesField = detailFields.category;
  let youOweField = detailFields.youOwe;
  let detailsField = detailFields.details;

  if (editMode) {
    transactionDateField = editTextFields.editTransactionDate;
    transactionAmountField = editTextFields.editTransactionAmount;
    paidByField = editTextFields.editPaidBy;
    splitTypeField = editTextFields.editSplitType;
    categoriesField = editTextFields.editCategory;
    youOweField = editTextFields.editYouOwe;
    detailsField = editTextFields.editDetails;
  }

  // Edit details related above

  // related to child container OkCancel Modal below
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);

  const deleteDialogOpenHandler = () => {
    setDeleteDialogOpen(true);
  };

  const deleteDialogCloseHandler = () => {
    setDeleteDialogOpen(false);
  };

  // related to child container OkCancel Modal above

  // onUpdate
  const onUpdateHandler = () => {
    const updateObj = {
      date: selectedDate,
      transactionAmount: transactionAmt,
      paidBy: paidBy,
      type: splitType,
      category: category,
      owe: oweAmt,
      details: details,
      detailId: currentDetails.detailId,
      userId: userId,
    };
    // this method is in FriendsDetails.js
    updateHandler({
      ...updateObj,
    });
    setCurrentDetails({ ...updateObj });
  };

  //onDelete
  const onDeleteHandler = () => {
    const deleteObj = {
      date: selectedDate,
      transactionAmount: transactionAmt,
      paidBy: paidBy,
      type: splitType,
      category: category,
      owe: oweAmt,
      details: details,
      detailId: currentDetails.detailId,
      userId: userId,
    };
    deleteHandler({
      ...deleteObj,
    });
  };

  return (
    <React.Fragment>
      <Dialog
        classes={{ paper: classes.dialog }}
        open={updateDialogOpen}
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

        <form>
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
              <Button
                style={{
                  marginLeft: "35px",
                  color: theme.palette.common.red,
                }}
                onClick={deleteDialogOpenHandler}
                color={theme.palette.type === "light" ? "primary" : "secondary"}
                size={matchesSM ? "small" : "medium"}
              >
                Delete
              </Button>

              <div style={{ marginLeft: "auto" }}>
                <Button
                  onClick={() =>
                    editMode ? onUpdateHandler() : editOpenHandler()
                  }
                  color={
                    theme.palette.type === "light" ? "primary" : "secondary"
                  }
                  size={matchesSM ? "small" : "medium"}
                >
                  {editMode ? "Update" : "Edit"}
                </Button>

                <Button
                  onClick={dialogCloseHandler}
                  color={
                    theme.palette.type === "light" ? "primary" : "secondary"
                  }
                  size={matchesSM ? "small" : "medium"}
                >
                  Cancel
                </Button>
              </div>
            </Grid>
          </DialogActions>
        </form>
      </Dialog>
      {deleteDialogOpen ? (
        <DeleteCancelModal
          dialogOpen={deleteDialogOpen} // it sets open prop to true in the DeleteCancelModal
          deleteHandler={onDeleteHandler}
          deleteDialogCloseHandler={deleteDialogCloseHandler}
        />
      ) : null}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    friendsInfo: state.friends.friendsInfo,
  };
};

export default connect(mapStateToProps)(React.memo(DetailsModal));
