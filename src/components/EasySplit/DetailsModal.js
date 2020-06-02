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
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Grid from "@material-ui/core/Grid";
import OkCancelModal from "../EasySplit/OkCancelModal";
import TextField from "@material-ui/core/TextField";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker } from "@material-ui/pickers";
import {
  MuiPickersUtilsProvider,
  // KeyboardDatePicker,
} from "@material-ui/pickers";

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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DetailsModal(props) {
  console.log("DetailsModal");
  const {
    dialogOpen,
    dialogCloseHandler,
    editMode,
    editCloseHandler,
    editOpenHandler,
    currentDetails,
  } = props;

  // currentDetails date format update
  const formattedDate = currentDetails.date.split("-");
  const day = formattedDate[0];
  const month = formattedDate[1];
  const year = formattedDate[2];

  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  // const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  // Edit details related below
  const [paidBy, setPaidBy] = React.useState(currentDetails.paidBy);
  const [splitType, setSplitType] = React.useState(currentDetails.type);
  const [category, setCategory] = React.useState(currentDetails.category);
  const [selectedDate, setSelectedDate] = React.useState(
    // new Date("2014-08-18" + "T21:11:54")
    new Date(`${year}-${month}-${day}T21:11:54`)
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const whopaid = [
    {
      value: "you",
      label: "You",
    },
    {
      value: "sandeep",
      label: "Sandeep",
    },
  ];

  const splitTypes = [
    {
      value: "equal",
      label: "Equal",
    },
    {
      value: "nosplit",
      label: "No Split",
    },
    {
      value: "custom",
      label: "Custom",
    },
  ];

  const categories = [
    {
      value: "entertainment",
      label: "Entertainment",
    },
    {
      value: "groceries",
      label: "Groceries",
    },
    {
      value: "movies",
      label: "Movies",
    },
    {
      value: "other",
      label: "Other",
    },
  ];

  // jsx related to edit Details

  const editTextFields = {
    editTransactionDate: (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          id="date-picker-dialog"
          format="MM/dd/yyyy"
          color={theme.palette.type === "dark" ? "secondary" : "primary"}
          value={selectedDate}
          onChange={handleDateChange}
          classes={{
            root: classes.listItemText,
          }}
          className={classes.detailDate}
        />
      </MuiPickersUtilsProvider>
    ),
    editTransactionAmount: (
      <TextField
        id="standard-number"
        type="number"
        color={theme.palette.type === "dark" ? "secondary" : "primary"}
        defaultValue={currentDetails.transactionAmount}
        classes={{
          root: classes.listItemText,
        }}
        className={classes.detailNumber}
        InputLabelProps={{
          shrink: true,
        }}
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
        {whopaid.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
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
        defaultValue={`${currentDetails.owe}`}
        InputLabelProps={{
          shrink: true,
        }}
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
    youOwe: (
      <ListItemText
        classes={{
          root: classes.listItemText,
        }}
        primary={`$${currentDetails.owe}`}
      />
    ),
    details: (
      <ListItemText
        classes={{
          root: classes.listItemText,
        }}
        style={{ marginLeft: "39px" }}
        primary={currentDetails.details}
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
                  onClick={editMode ? editCloseHandler : editOpenHandler}
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
      <OkCancelModal
        dialogOpen={deleteDialogOpen}
        dialogCloseHandler={deleteDialogCloseHandler}
      />
    </React.Fragment>
  );
}

export default React.memo(DetailsModal);
