import React, { useState, useCallback, useEffect } from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import GroupsDetails from "./GroupsDetails";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
// import { groupsInfo } from "../../data/EasySplit/GroupsInfo";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import useStyles from "../EasySplit/FriendsGroupsStyles";
import { objToArray } from "../../data/helpers/objectToArray";
import { connect } from "react-redux";
import * as actionTypes from "./store/actions";

function GroupsList(props) {
  console.log("Groups");
  const { onInitGroups, groupsInfo } = props;
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

  //converting props.friendsInfo to array
  const groupsArray = objToArray(groupsInfo, "main", "details");

  useEffect(() => {
    onInitGroups();
  }, [onInitGroups]);

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
        Groups
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
                  classes={{ switchBase: classes.toggleSwitch }}
                />
              }
              label={showDetails ? "Hide all details" : "Show all details"}
              labelPlacement="start"
              classes={{ label: classes.formLabel }}
              className={classes.formControlLabel}
            />
          </Grid>
          <Table>
            <TableBody>
              {groupsArray.map((groupInfo, index) => (
                <GroupsDetails
                  key={groupInfo + index}
                  details={groupInfo.details}
                  mainInfo={groupInfo.main}
                  showDetails={showDetails}
                  setShowDetails={switchShowDetails}
                  hideDetails={hideDetails}
                  setHideDetails={switchHideDetails}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    test: state.groups.test,
    groupsInfo: state.groups.groupsInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitGroups: () => dispatch(actionTypes.initGroups()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(GroupsList));
