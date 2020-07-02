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
const green = "#2e7d32"; // different in DarkTheme
const red = "#c62828"; // different in DarkTheme

const lightTheme = createMuiTheme({
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
    type: "light", // different in DarkTheme. By default it is light but just mentioned it here.
  },
  overrides: {
    // MuiFab: {
    //   root: {
    //     backgroundColor: purple[300],
    //     color: "white",
    //     marginRight: "5em",
    //     width: "35px",
    //     height: "25px",
    //     "&:hover": {
    //       backgroundColor: purple[500],
    //     },
    //   },
    // },
  },
});
export default lightTheme;
