import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  box: {
    color: "white",
    fontWeight: 500,
    paddingLeft: "6.4em",
    backgroundColor: theme.palette.secondary,
    [theme.breakpoints.down("md")]: {
      paddingLeft: "6.7em",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "2em",
    },
  },
  category: {
    backgroundColor: "yellow",
    borderRadius: "1px",
    padding: "5px",
    fontWeight: 500,
    lineHeight: "1px",
    color: "black",
    fontSize: "0.9em",

    [theme.breakpoints.down("sm")]: {
      padding: "5px",
      fontSize: "0.8em",
    },
  },
  rowDetails: {
    backgroundColor: theme.palette.primary.light,
    color: "white",
  },
  description: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9em",
    },
  },
}));

export default function MyTableRow(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell align="left">{props.name}</TableCell>
        <TableCell align="left">{props.date}</TableCell>
        {matchesSM ? null : (
          <React.Fragment>
            <TableCell align="left">{props.category}</TableCell>
            <TableCell align="left">{props.owe}</TableCell>
          </React.Fragment>
        )}

        <TableCell align="left">{props.owed}</TableCell>
        <TableCell align="left">
          <Button
            variant="contained"
            color="secondary"
            style={{ width: "5em", textTransform: "none" }}
          >
            Pay
          </Button>
        </TableCell>
      </TableRow>

      <TableRow className={classes.rowDetails}>
        <TableCell
          className={classes.box}
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  container
                  item
                  justify="space-between"
                  style={{ paddingTop: "2em" }}
                >
                  <Typography
                    // style={{ paddingBottom: "10px", paddingTop: "10px" }}
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                  >
                    March 2, 2019
                  </Typography>
                  <Typography variant="subtitle6">
                    <span className={classes.category}>Entertainment</span>
                  </Typography>
                </Grid>
                <Grid item style={{ paddingBottom: "2em" }}>
                  <Typography
                    // style={{ paddingBottom: "20px", letterSpacing: "1px" }}
                    variant="subtitle2"
                    gutterBottom
                    component="div"
                    className={classes.description}
                  >
                    You owe Sandeep -{" "}
                    <span style={{ fontWeight: 700, fontSize: "1em" }}>
                      100$
                    </span>{" "}
                    for the Movie
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
