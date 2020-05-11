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
  tcell: {
    fontWeight: 700,
  },
  tRow: {
    height: "3em",
  },
  userDetails: {
    padding: "1em",
  },
}));
export default function FriendsDetails() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell style={{ backgroundColor: theme.palette.primary.main }}>
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
                  <Typography variant="subtitle1">Sandeep</Typography>
                </Grid>
                <Grid item xs={matchesSM ? 6 : 4}>
                  <Grid container direction="column" alignItems="center">
                    <Grid
                      container
                      justify="flex-start"
                      alignItems="center"
                      style={{ padding: "20px", width: "15em" }}
                    >
                      <Typography variant="caption text" gutterBottom>
                        You Owe&nbsp;&nbsp;&nbsp;
                      </Typography>
                      <Typography
                        color="error"
                        style={{ color: "green" }}
                        variant="h6"
                        gutterBottom
                      >
                        $100
                      </Typography>
                    </Grid>
                    <Button
                      style={{ width: "2em" }}
                      variant="outlined"
                      color="primary"
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
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={0}>
              <Grid
                container
                justify="center"
                alignItems="flex-start"
                direction="column"
              >
                <Typography
                  className={classes.userDetails}
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                >
                  Sandeep Amarnath - Sa194920
                </Typography>
              </Grid>
              <TableContainer component={Paper}>
                <Table aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        classes={{ root: classes.tcell }}
                        align="right"
                      >
                        Date
                      </TableCell>
                      <TableCell
                        classes={{ root: classes.tcell }}
                        align="right"
                      >
                        Paid by
                      </TableCell>
                      <TableCell
                        classes={{ root: classes.tcell }}
                        align="right"
                      >
                        Type
                      </TableCell>
                      <TableCell
                        classes={{ root: classes.tcell }}
                        align="right"
                      >
                        You Owe ($)
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow className={classes.tRow}>
                      <TableCell align="right">20/02/2019</TableCell>
                      <TableCell align="right">Vijay</TableCell>
                      <TableCell align="right">Split Equally</TableCell>
                      <TableCell align="right">20</TableCell>
                    </TableRow>
                    <TableRow className={classes.tRow}>
                      <TableCell align="right">20/02/2019</TableCell>
                      <TableCell align="right">Vijay</TableCell>
                      <TableCell align="right">Split Equally</TableCell>
                      <TableCell align="right">20</TableCell>
                    </TableRow>
                    <TableRow className={classes.tRow}>
                      <TableCell align="right">20/02/2019</TableCell>
                      <TableCell align="right">Vijay</TableCell>
                      <TableCell align="right">Split Equally</TableCell>
                      <TableCell align="right">20</TableCell>
                    </TableRow>
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
