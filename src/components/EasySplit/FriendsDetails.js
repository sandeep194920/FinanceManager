import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Grid from "@material-ui/core/Grid";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles((theme) => ({
  dropdownTcell: {
    ...theme.dropdownTcell,
  },
  tcell: {
    fontWeight: 700,
  },
  tRow: {
    height: "3em",
  },
  userDetails: {
    padding: "1em",
  },
  displayName: {
    ...theme.displayName,
  },
  username: {
    marginRight: "5em",
    marginTop: "1em",
    marginBottom: "1em",
    borderRadius: "10px",
    backgroundColor: theme.palette.secondary.main,
    padding: "0.4em",

    [theme.breakpoints.down("sm")]: {
      marginRight: "5em",
      color: "black",
      fontSize: "0.9em",
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: "2em",
    },
  },
}));
export default function FriendsDetails(props) {
  const { name, oweAmount, details, showDetails } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);
  const detailsTableHead = ["Date", "Paid By", "Category", "You Owe($)"];

  return (
    <React.Fragment>
      <TableRow>
        <TableCell className={classes.dropdownTcell}>
          <IconButton
            size="small"
            style={{ color: "white" }}
            aria-label="expand row"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          <Card>
            <CardContent>
              <Grid container alignItems="center" justify="space-between">
                <Grid item>
                  <Typography variant={matchesSM ? "subtitle2" : "body1"}>
                    {name}
                  </Typography>
                </Grid>
                <Grid item xs={matchesSM ? 6 : 4}>
                  <Grid container direction="column" alignItems="center">
                    <Grid
                      container
                      justify="flex-start"
                      alignItems="center"
                      style={{ padding: "20px", width: "15em" }}
                    >
                      <Typography variant="caption" gutterBottom>
                        You Owe&nbsp;&nbsp;&nbsp;
                        {oweAmount > 0 ? <span>&nbsp;&nbsp;&nbsp;</span> : null}
                      </Typography>
                      <Typography
                        style={{
                          color: oweAmount >= 0 ? "green" : "red",
                        }}
                        variant={matchesSM ? "subtitle2" : "h6"}
                        gutterBottom
                      >
                        {oweAmount > 0
                          ? "$" + oweAmount
                          : "- $" + oweAmount * -1}
                      </Typography>
                    </Grid>
                    <Button
                      style={{ width: "2em" }}
                      variant="outlined"
                      color="primary"
                      size={matchesSM ? "small" : "medium"}
                    >
                      Pay
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell colSpan={6}>
          <Collapse in={open || showDetails} timeout="auto" unmountOnExit>
            <Box margin={0}>
              <Grid container justify="space-between">
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  className={classes.displayName}
                >
                  Sandeep Amarnath
                </Typography>
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  className={classes.username}
                >
                  Sa194920
                </Typography>
              </Grid>
              <TableContainer component={Paper}>
                <Table aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      {detailsTableHead.map((tableCell) => (
                        <TableCell
                          key={tableCell}
                          classes={{ root: classes.tcell }}
                          align="right"
                        >
                          {tableCell}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {details.map((record, index) => (
                      <TableRow key={record + index} className={classes.tRow}>
                        <TableCell align="right">{record.date}</TableCell>
                        <TableCell align="right">{record.paidBy}</TableCell>
                        <TableCell align="right">{record.type}</TableCell>
                        <TableCell align="right">{record.owe}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
