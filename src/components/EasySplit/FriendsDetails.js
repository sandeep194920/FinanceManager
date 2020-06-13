import React, { useEffect, useState, useCallback } from "react";
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
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import CallMadeIcon from "@material-ui/icons/CallMade";
import useStyles from "./FriendGroupDetailsStyles";
import DetailsModal from "./DetailsModal";
import * as actionTypes from "./store/actions";
import { connect } from "react-redux";

function FriendsDetails(props) {
  console.log("FriendsDetails");

  const {
    friend,
    // details,
    mainInfo,
    showDetails,
    hideDetails,
    setHideDetails,
    setShowDetails,
    friendsInfo,
    onUpdateFriends,
  } = props;
  const theme = useTheme();
  const classes = useStyles();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const [open, setOpen] = useState(false);
  //edit
  const [editMode, setEditMode] = useState(false);
  //dialog
  const [dialogOpen, setDialogOpen] = useState(false);
  const detailsTableHead = ["Date", "Amount", "Paid", "Split", "You Owe($)"];

  const [currentDetails, setCurrentDetails] = useState({});

  if (matchesSM) {
    detailsTableHead.splice(2, 1);
  }

  const dialogOpenHandler = useCallback(() => {
    setDialogOpen(true);
  }, [setDialogOpen]);

  const dialogCloseHandler = useCallback(() => {
    setDialogOpen(false);
    setEditMode(false);
  }, [setDialogOpen, setEditMode]);

  useEffect(() => {
    if (hideDetails) {
      setHideDetails(false);
      setOpen(false);
    } else if (showDetails) {
      setOpen(true);
    }
  }, [hideDetails, setHideDetails, showDetails]);

  const rowDropdownHandler = () => {
    setOpen(!open);
    setHideDetails(false);
    setShowDetails(false);
  };

  //dialog
  const editOpenHandler = useCallback(() => {
    setEditMode(true);
  }, [setEditMode]);

  const editCloseHandler = useCallback(() => {
    setEditMode(false);
  }, [setEditMode]);

  const updateHandler = useCallback(
    (updateDetails) => {
      // updateHandler has been called in Friends.js
      // here we need to update the data by using action creator and then close the handler
      // console.log();
      console.log("The user is id " + updateDetails.userId);
      onUpdateFriends(updateDetails, friendsInfo);
      editCloseHandler();
    },
    [editCloseHandler, friendsInfo, onUpdateFriends]
  );
  console.log("The friend is ");
  console.log(friend);
  return (
    <React.Fragment>
      <TableRow>
        <TableCell className={classes.dropdownTcell}>
          <IconButton
            size="small"
            style={{ color: "white" }}
            aria-label="expand row"
            onClick={rowDropdownHandler}
          >
            {open || showDetails ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </IconButton>
        </TableCell>
        <TableCell>
          <Card
            className={[classes.displayCard, classes.darkDisplayCard].join(" ")}
          >
            <CardContent>
              <Grid container alignItems="center" justify="space-between">
                <Grid item>
                  <Typography variant={matchesXS ? "subtitle2" : "body1"}>
                    {mainInfo.displayName}
                  </Typography>
                </Grid>
                <Grid item xs={matchesXS ? 6 : 4}>
                  <Grid container direction="column" alignItems="center">
                    <Grid
                      container
                      justify="flex-start"
                      alignItems="center"
                      style={{ padding: "20px", width: "15em" }}
                    >
                      <Typography variant="caption" gutterBottom>
                        You Owe&nbsp;&nbsp;&nbsp;
                        {mainInfo.oweAmount > 0 ? (
                          <span>&nbsp;&nbsp;&nbsp;</span>
                        ) : null}
                      </Typography>
                      <Typography
                        style={{
                          color:
                            mainInfo.oweAmount >= 0
                              ? theme.palette.common.green
                              : theme.palette.common.red,
                        }}
                        variant={matchesXS ? "subtitle2" : "h6"}
                        gutterBottom
                      >
                        {mainInfo.oweAmount > 0
                          ? "$" + mainInfo.oweAmount
                          : "- $" + mainInfo.oweAmount * -1}
                      </Typography>
                    </Grid>
                    <Button
                      style={{
                        width: "2em",
                      }}
                      variant="outlined"
                      color={
                        theme.palette.type === "dark" ? "secondary" : "primary"
                      }
                      size={matchesXS ? "small" : "medium"}
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
        <TableCell className={classes.displayCard} colSpan={6}>
          <Collapse
            in={(open || showDetails) && !hideDetails}
            timeout="auto"
            unmountOnExit
          >
            <Box>
              <Grid container justify="space-between">
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  className={classes.displayName}
                >
                  {mainInfo.fullName}
                </Typography>
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  className={classes.username}
                >
                  User ID - {mainInfo.userId}
                </Typography>
              </Grid>
              <TableContainer className={classes.displayCard} component={Paper}>
                <Table aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      {detailsTableHead.map((tableCell) => (
                        <TableCell
                          key={tableCell}
                          classes={{ root: classes.tcell }}
                        >
                          {tableCell}
                        </TableCell>
                      ))}
                      <TableCell
                        className={classes.detailCellHead}
                        classes={{ root: classes.tcell }}
                      >
                        Details
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {friend.details.map((record, index) => {
                      console.log("The record is ");
                      // console.log(record);
                      return (
                        <TableRow key={record + index} className={classes.tRow}>
                          <TableCell>{record.date}</TableCell>
                          <TableCell>{record.transactionAmount}</TableCell>
                          {matchesSM ? null : (
                            <TableCell>{record.paidBy}</TableCell>
                          )}
                          <TableCell>{record.type}</TableCell>
                          <TableCell>{record.owe}</TableCell>
                          <TableCell>
                            <IconButton
                              onClick={() => {
                                dialogOpenHandler();
                                setCurrentDetails({ ...record });
                              }}
                              disableRipple
                              classes={{ root: classes.detailsIcon }}
                            >
                              <CallMadeIcon
                                fontSize={matchesSM ? "small" : "default"}
                                color={
                                  theme.palette.type === "dark"
                                    ? "secondary"
                                    : "primary"
                                }
                              />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      {/* When clicked on the details icon */}
      {dialogOpen ? ( // performance optimized here due to this check
        <DetailsModal
          dialogOpen={dialogOpen}
          editMode={editMode}
          dialogCloseHandler={dialogCloseHandler}
          editCloseHandler={editCloseHandler}
          updateHandler={updateHandler}
          editOpenHandler={editOpenHandler}
          currentDetails={currentDetails}
          setCurrentDetails={setCurrentDetails}
          userId={friend.main.userId}
        />
      ) : null}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.friends.loading,
    friendsInfo: state.friends.friendsInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateFriends: (updateFriends, currentFriends) =>
      dispatch(actionTypes.updateFriends(updateFriends, currentFriends)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(FriendsDetails));
