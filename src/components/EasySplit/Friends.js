import React, { useState, useCallback } from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FriendsshowDetails from "./FriendsDetails";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
// import { friendsInfo } from "../../data/EasySplit/FriendsInfo"; // This comes from friendsReducer
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import useStyles from "../EasySplit/FriendsGroupsStyles";
import { objToArray } from "../../data/helpers/objectToArray";
// redux
import { connect } from "react-redux";

function FriendsList(props) {
  console.log("Friends");
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

  // convert props.friendsInfo object to array --> firebase accepts only objects but down we are using in array format, so we do this conversion
  // const friendsArr = [];
  // let friendsDetails = [];
  // const friendsKeys = Object.keys(friendsInfoTest); // this will have Sa194920
  // // now i need Sa194920[main] and Sa194920[details]
  // // let friendsDetailsKey = Object.keys(friendsInfoTest.details); // this gives keys like 0,1,2 ...
  // // console.log(friendsKeys);

  // // Get the size of an object
  // Object.size = function (obj) {
  //   let size = 0,
  //     details;
  //   for (details in obj) {
  //     if (obj.hasOwnProperty(details)) size++;
  //   }
  //   return size;
  // };

  // friendsKeys.map((user, index) => {
  //   for (let i = 0; i < Object.size(friendsInfoTest[user]["details"]); i++) {
  //     friendsDetails.push({ ...friendsInfoTest[user]["details"][i] });
  //   }
  //   return 0;
  // });

  // friendsKeys.forEach((user) => {
  //   friendsArr.push({
  //     main: friendsInfoTest[user]["main"],
  //     details: friendsDetails,
  //   });
  // });

  const friendsArray = objToArray(props.friendsInfo, "main", "details");
  // console.log(friendsArray);

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
          <Table>
            <TableBody>
              {friendsArray.map((friendInfo, index) => (
                <FriendsshowDetails
                  key={friendInfo + index}
                  details={friendInfo.details}
                  mainInfo={friendInfo.main}
                  showDetails={showDetails}
                  setShowDetails={switchShowDetails}
                  hideDetails={hideDetails}
                  setHideDetails={switchHideDetails}
                />
              ))}
            </TableBody>

            {/* <TableBody>
             {}
            </TableBody> */}
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    test: state.friends.test,
    friendsInfo: state.friends.friendsInfo,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onIngredientAdded: (ingName) =>
//       dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),
//     onIngredientRemoved: (ingName) =>
//       dispatch({
//         type: actionTypes.REMOVE_INGREDIENT,
//         ingredientName: ingName,
//       }),
//   };
// };

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(React.memo(FriendsList));
