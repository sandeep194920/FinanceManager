import React, { useState, useCallback, useEffect } from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FriendsshowDetails from "./FriendsDetails";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import useStyles from "../styles/FriendsGroupsStyles";
import * as actionTypes from "./store/actions";
import LinearProgress from "@material-ui/core/LinearProgress";
// redux

import { connect } from "react-redux";

function FriendsList(props) {
  console.log("Friends");
  const { onInitFriends, friendsInfo, loading } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  // switch show and hide details
  const [showDetails, switchShowDetails] = useState(false);
  const [hideDetails, switchHideDetails] = useState(false);

  const showDetailsToggleHandler = useCallback(() => {
    switchShowDetails(true);
    switchHideDetails(false);
  }, [switchShowDetails, switchHideDetails]);

  const hideDetailsToggleHandler = useCallback(() => {
    switchShowDetails(false);
    switchHideDetails(true);
  }, [switchHideDetails, switchShowDetails]);

  useEffect(() => {
    onInitFriends();
  }, [onInitFriends]);

  let friends = (
    <LinearProgress
      color={theme.palette.type === "dark" ? "secondary" : "primary"}
    />
  );
  if (!loading) {
    friends = (
      <Table>
        <TableBody>
          {friendsInfo.map((friendInfo, index) => (
            <FriendsshowDetails
              key={friendInfo + index}
              //details={friendInfo.details}

              friend={friendInfo}
              mainInfo={friendInfo.main}
              showDetails={showDetails}
              setShowDetails={switchShowDetails}
              hideDetails={hideDetails}
              setHideDetails={switchHideDetails}
            />
          ))}
        </TableBody>
      </Table>
    );
  }

  return (
    <Grid
      className={classes.container}
      container
      direction="column"
      alignItems="center"
    >
      <Typography
        className={classes.heading}
        variant={matchesSM ? "subtitle1" : "h6"}
        gutterBottom
      >
        Friends
      </Typography>
      <Grid container justify="center">
        <TableContainer className={classes.table} component={Paper}>
          <Grid
            container
            className={classes.filterArea}
            justify="flex-end"
            alignItems="center"
          >
            <FormControlLabel
              value={showDetails}
              checked={showDetails}
              control={
                <Switch
                  size={matchesXS ? "small" : "medium"}
                  onChange={
                    showDetails
                      ? hideDetailsToggleHandler
                      : showDetailsToggleHandler
                  }
                  color={
                    theme.palette.type === "dark" ? "secondary" : "primary"
                  }
                  classes={{
                    switchBase: classes.toggleSwitch,
                  }}
                />
              }
              label={showDetails ? "Hide all details" : "Show all details"}
              labelPlacement="start"
              classes={{ label: classes.formLabel }}
              className={classes.formControlLabel}
            />
          </Grid>
          {friends}
        </TableContainer>
      </Grid>
    </Grid>
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
    onInitFriends: () => dispatch(actionTypes.initFriends()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(FriendsList));
