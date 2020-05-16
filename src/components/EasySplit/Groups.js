import React, { useState } from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import GroupsDetails from "./GroupsDetails";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { groupsInfo } from "../../data/EasySplit/GroupsInfo";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles((theme) => ({
  groupContainer: {
    ...theme.container,
  },
  groupHeading: {
    ...theme.heading,
  },
  table: {
    ...theme.table,
  },
  filterArea: {
    ...theme.filterArea,
  },
  formLabel: {
    ...theme.formLabel,
  },
  formControlLabel: {
    ...theme.formControlLabel,
  },
  toggleSwitch: {
    ...theme.toggleSwitch,
  },
}));

export default function GroupsList(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  // switch details
  const [showDetails, switchShowDetails] = useState(false);
  const [hideDetails, switchHideDetails] = useState(false);

  const showDetailsToggleHandler = () => {
    switchShowDetails(true);
    switchHideDetails(false);
  };

  const hideDetailsToggleHandler = () => {
    switchShowDetails(false);
    switchHideDetails(true);
  };

  return (
    <Grid
      className={classes.groupContainer}
      container
      direction="column"
      alignItems="center"
    >
      <Typography
        className={classes.groupHeading}
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
                  onChange={
                    showDetails
                      ? hideDetailsToggleHandler
                      : showDetailsToggleHandler
                  }
                  color="primary"
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
              {groupsInfo.map((groupInfo, index) => (
                <GroupsDetails
                  key={groupInfo + index}
                  name={groupInfo.main.displayName}
                  oweAmount={groupInfo.main.oweAmount}
                  details={groupInfo.details}
                  showDetails={showDetails}
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
