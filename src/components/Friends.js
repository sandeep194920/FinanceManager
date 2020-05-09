import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { makeStyles } from "@material-ui/core/styles";
import MyTableRow from "./Table/MyTableRow";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    maxWidth: 800,
    margin: "auto",
  },
  tcell: {
    fontWeight: 700,
  },
}));
export default function Friends(props) {
  const classes = useStyles();

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="center" classes={{ root: classes.tcell }} />
            <TableCell align="center" classes={{ root: classes.tcell }}>
              Friend
            </TableCell>
            <TableCell align="center" classes={{ root: classes.tcell }}>
              Transaction Date
            </TableCell>
            <TableCell align="center" classes={{ root: classes.tcell }}>
              Category
            </TableCell>
            <TableCell align="center" classes={{ root: classes.tcell }}>
              You Owe
            </TableCell>
            <TableCell align="center" classes={{ root: classes.tcell }}>
              You Owed
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <MyTableRow />
          <MyTableRow />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
