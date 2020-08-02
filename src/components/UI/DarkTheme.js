import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import amber from "@material-ui/core/colors/amber";

const grey50 = "#fafafa";
const grey100 = "#f5f5f5";
const grey200 = "#eeeeee";
const grey800 = "#424242";
const grey500 = "#9e9e9e";
const grey700 = "#616161";
const bluegrey = "#455a64";
const green = "#aed581"; // different in Lighttheme
const red = "#ff8f00"; // different in Lighttheme
// const amberSecondary = "#ffc400"; // this is the amber color defined for ease

const darkTheme = createMuiTheme({
  palette: {
    common: {
      lightGrey: grey50,
      lightGreyTwo: grey100,
      grey200: grey200,
      grey500: grey500,
      grey700: grey700,
      grey800: grey800,
      bluegrey: bluegrey,
      green: green,
      red: red,
    },
    primary: purple,
    secondary: amber,
    type: "dark", // different in Lighttheme
  },
  overrides: {
    // different in Lighttheme
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "black",
      },
    },

    // Date picker related

    MuiPickersToolbar: {
      toolbar: {
        // backgroundColor: amber.A200,
      },
    },
    // date
    MuiPickersToolbarText: {
      toolbarTxt: {
        color: amber["400"],
      },
    },
    // when date is clicked then the text color appears primary so should be changed to secondary
    MuiTypography: {
      colorPrimary: {
        color: amber["400"],
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        // backgroundColor: amber.A200,
        // color: "black",
      },
    },
    MuiPickersDay: {
      day: {
        // color: amber.A700,
      },
      daySelected: {
        backgroundColor: amber["400"],
        color: "black",
        "&:hover": {
          backgroundColor: amber["400"],
        },
      },
      dayDisabled: {
        color: amber["100"],
      },
      current: {
        color: amber["900"],
      },
    },

    MuiButton: {
      textPrimary: {
        color: "white",
        "&:hover": {
          backgroundColor: amber["400"],
          color: "black",
        },
      },
    },
    // MuiFab: {
    //   root: {
    //     backgroundColor: "blue",
    //   },
    // },

    // MuiTabsIndicator: {
    //   backgroundColor: "red",
    //   left: "3.1em !important",
    //   width: "4em !important",
    // },
  },
});
export default darkTheme;
