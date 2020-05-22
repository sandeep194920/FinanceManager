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
  },
});
export default darkTheme;
