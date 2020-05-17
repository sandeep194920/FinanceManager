import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import amber from "@material-ui/core/colors/amber";
// import green from "@material-ui/core/colors/green";

const grey50 = "#fafafa";
const grey100 = "#f5f5f5";
const grey800 = "#424242";
const grey500 = "#9e9e9e";
const greenAmount = "#8bc34a";
const redAmount = "#ff6d00";

const darkTheme = createMuiTheme({
  palette: {
    common: {
      lightGrey: grey50,
      lightGreyTwo: grey100,
      grey500: grey500,
      grey800: grey800,
      greenAmount: greenAmount,
      redAmount: redAmount,
    },
    primary: purple,
    secondary: amber,
    type: "dark",
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "black",
      },
    },
  },
});
export default darkTheme;
