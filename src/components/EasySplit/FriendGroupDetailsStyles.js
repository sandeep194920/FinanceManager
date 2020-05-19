import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // css common to GroupDetails and FriendsDetails
  dropdownTcell: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.common.grey500
        : theme.palette.primary.main,
    width: "5em",

    [theme.breakpoints.down("sm")]: {
      width: "4em",
    },

    [theme.breakpoints.down("xs")]: {
      width: "2em",
    },
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
    marginLeft: "5em",
    marginTop: "1em",
    marginBottom: "1em",
    // backgroundColor:
    //   theme.palette.type === "dark"
    //     ? theme.palette.secondary.light
    //     : theme.palette.secondary.main,
    borderRadius: "10px",
    padding: "0.4em",
    // color: "black",
    color:
      theme.palette.type === "dark"
        ? theme.palette.secondary.main
        : theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5em",
      // color: "black",
      fontSize: "0.9em",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "2em",
    },
  },
  username: {
    marginRight: "5em",
    marginTop: "1em",
    marginBottom: "1em",
    borderRadius: "10px",
    // backgroundColor:
    //   theme.palette.type === "dark"
    //     ? theme.palette.secondary.light
    //     : theme.palette.secondary.main,
    color:
      theme.palette.type === "dark"
        ? theme.palette.secondary.main
        : theme.palette.primary.main,
    padding: "0.4em",
    // color: "black",

    [theme.breakpoints.down("sm")]: {
      marginRight: "5em",
      // color: "black",
      fontSize: "0.9em",
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: "2em",
    },
  },
  detailCellHead: {
    color:
      theme.palette.type === "dark"
        ? theme.palette.secondary.main
        : theme.palette.primary.main,
    fontSize: "0.875rem",
    fontWeight: "700",
  },
  //detailsIcon hover is not disabled currently. Uncommenting below code will disable hover effect
  detailsIcon: {
    // "&:hover": {
    //   backgroundColor: "transparent",
    // },
  },
  displayCard: {
    backgroundColor:
      theme.palette.type === "dark"
        ? undefined // taken from the paper
        : theme.palette.common.lightGrey,
  },
  darkDisplayCard: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.common.grey700
        : theme.palette.common.lightGrey,
    // borderBottom
    //   theme.palette.type === "dark"
    //     ? "0.6px solid " + theme.palette.common.lightGrey
    //     : "none",
    // borderTop:
    //   theme.palette.type === "dark"
    //     ? "0.6px solid " + theme.palette.common.lightGrey
    //     : "none",
    // borderRight:
    //   theme.palette.type === "dark"
    //     ? "0.6px solid " + theme.palette.common.lightGrey
    //     : "none",
  },

  // css related to GroupDetails component only
  memberCount: {
    paddingTop: "1em",
    fontStyle: "italic",
  },
  groupNameMembers: {
    marginTop: "3em",
  },
}));

export default useStyles;
