import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import { useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// const theme = useTheme();
const classes = useStyles();
const [paidBy, setPaidBy] = React.useState("you");
const [splitType, setSplitType] = React.useState("equal");
const [category, setCategory] = React.useState("Entertainment");

const useStyles = makeStyles((theme) => ({
  listItemText: {
    flex: "inherit",
    [theme.breakpoints.down("xs")]: {
      "& .MuiTypography-body1": {
        fontSize: "0.8em",
      },
    },
  },
}));

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

export const editTextFields = {
  editTransactionDate: (
    <TextField
      id="date"
      type="date"
      color={theme.palette.type === "dark" ? "secondary" : "primary"}
      defaultValue="2017-05-24"
      InputLabelProps={{
        shrink: true,
      }}
    />
  ),
  editTransactionAmount: (
    <TextField
      id="standard-number"
      type="number"
      color={theme.palette.type === "dark" ? "secondary" : "primary"}
      defaultValue="2400"
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
      color={theme.palette.type === "dark" ? "secondary" : "primary"}
      type="number"
      defaultValue="1200"
      InputLabelProps={{
        shrink: true,
      }}
    />
  ),
  editYouOwe: (
    <TextField
      color={theme.palette.type === "dark" ? "secondary" : "primary"}
      type="number"
      defaultValue="1200"
      InputLabelProps={{
        shrink: true,
      }}
    />
  ),
  editDetails: (
    <TextField
      id="standard-txt"
      color={theme.palette.type === "dark" ? "secondary" : "primary"}
      defaultValue="Watched Starwars movie"
      InputLabelProps={{
        shrink: true,
      }}
    />
  ),
};

export const detailFields = {
  transactionDate: (
    <ListItemText
      classes={{
        root: classes.listItemText,
      }}
      primary="20 March 2020"
    />
  ),
  transactionAmount: (
    <ListItemText
      classes={{
        root: classes.listItemText,
      }}
      primary="200$"
    />
  ),
  paidBy: (
    <ListItemText
      classes={{
        root: classes.listItemText,
      }}
      primary="You"
    />
  ),
  splitType: (
    <ListItemText
      classes={{
        root: classes.listItemText,
      }}
      primary="Equal"
    />
  ),
  category: (
    <ListItemText
      classes={{
        root: classes.listItemText,
      }}
      primary="Entertainment"
    />
  ),
  youOwe: (
    <ListItemText
      classes={{
        root: classes.listItemText,
      }}
      primary="1200$"
    />
  ),
  details: (
    <ListItemText
      classes={{
        root: classes.listItemText,
      }}
      style={{ marginLeft: "39px" }}
      primary="Watched Starwars"
    />
  ),
};
