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
    fontSize: "1rem",
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

  addDetail: {
    "&.MuiButtonBase-root": {
      "&:hover": {
        backgroundColor:
          theme.palette.type === "dark"
            ? theme.palette.secondary.dark
            : theme.palette.primary.dark,
      },
      backgroundColor:
        theme.palette.type === "dark"
          ? theme.palette.secondary.A400
          : theme.palette.primary[400],

      width: "2.3em",
      height: "1.75em",
      marginRight: "2.8em",
      [theme.breakpoints.down("sm")]: {
        width: "2em",
        height: "1em",
        marginRight: "2.7em",
      },
      [theme.breakpoints.down("xs")]: {
        width: "30px",
        marginRight: "1.3em",
        // backgroundColor: "transparent",
        boxShadow: "none",
      },
    },

    color: theme.palette.type === "dark" ? theme.palette.grey500 : "#fff",
    fontSize: "1.5em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      // color:
      //   theme.palette.type === "dark"
      //     ? theme.palette.secondary.main
      //     : theme.palette.primary["400"],
    },
  },

  username: {
    marginRight: "5em",
    marginTop: "1em",
    marginBottom: "1em",
    borderRadius: "10px",
    fontSize: "1rem",
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
