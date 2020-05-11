import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import FriendsDetails from "../components/FriendsDetails";

const useStyles = makeStyles((theme) => ({
  table: {
    marginTop: 100,
    maxWidth: 800,
    [theme.breakpoints.down("xs")]: {
      maxWidth: 500,
      margin: "10px",
    },
    "& .MuiTableCell-root": {
      padding: 0,
      textAlign: "center",
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.8em",
        paddingLeft: "0",
      },
    },
    "& .MuiCardContent-root": {
      padding: "0 0 1em 2em",
      [theme.breakpoints.down("sm")]: {
        padding: "0 0 1em 1em",
      },
    },
  },
}));

export default function FriendsList(props) {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <TableContainer className={classes.table} component={Paper}>
        <Table>
          <TableBody>
            <FriendsDetails />
            <FriendsDetails />
            <FriendsDetails />
            <FriendsDetails />
            <FriendsDetails />
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
