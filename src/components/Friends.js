import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import MyTableRow from "./Table/MyTableRow";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  table: {
    // minWidth: 650,
    maxWidth: 800,
    // margin: "auto",
    [theme.breakpoints.down("xs")]: {
      maxWidth: 500,
      margin: "10px",
    },
    "& .MuiTableCell-root": {
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.8em",
        paddingLeft: "0",
      },
    },
  },
  tcell: {
    fontWeight: 700,
  },
}));
export default function Friends(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  //   const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  let tableHeadingData = [
    { name: "" },
    { name: "Friend" },
    { name: matchesSM ? "Date" : "Transaction Date" },
    { name: "Category" },
    { name: "You Owe" },
    { name: "You Owed" },
  ];

  if (matchesSM) {
    tableHeadingData = tableHeadingData.filter(
      (data) => data.name !== "Category" && data.name !== "You Owe"
    );
  }

  const tableRowData = [
    {
      name: "Sandeep",
      date: "02/03/2019",
      category: "Entertainment",
      owe: "100",
      owed: "-",
    },
    {
      name: "Kiran",
      date: "01/04/2019",
      category: "Grocery",
      owe: "-",
      owed: "29.50",
    },
    {
      name: "Ritu",
      date: "12/07/2019",
      category: "Bakery",
      owe: "12.50",
      owed: "-",
    },
    {
      name: "Anand",
      date: "08/09/2019",
      category: "Snacks",
      owe: "14",
      owed: "48",
    },
  ];
  return (
    <Grid container justify="center">
      <TableContainer className={classes.table} component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              {tableHeadingData.map((data) => (
                <TableCell
                  key={data.name}
                  align="left"
                  classes={{ root: classes.tcell }}
                >
                  {data.name}
                </TableCell>
              ))}
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRowData.map((data) => (
              <MyTableRow
                key={data.name}
                name={data.name}
                date={data.date}
                category={data.category}
                owe={data.owe}
                owed={data.owed}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
