import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import amber from "@material-ui/core/colors/amber";
// import green from "@material-ui/core/colors/green";

const grey50 = "#fafafa";
const grey100 = "#f5f5f5";
const grey800 = "#424242";
const grey500 = "#9e9e9e";
const greenAmount = "#2e7d32";
const redAmount = "#c62828";

// const theme = createMuiTheme({
//   palette: {
//     common: {
//       lightGrey: grey50,
//       lightGreyTwo: grey100,
//       grey500: grey500,
//       grey800: grey800,
//       greenAmount: greenAmount,
//       redAmount: redAmount,
//     },
//     primary: purple,
//     secondary: amber,
//     // type: "dark",
//   },
// });

const lightTheme = createMuiTheme({
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
    // type: "dark",
  },

  // palette: {
  //   ...theme.palette,
  //   types: "dark",
  //   common: {
  //     ...theme.palette.common,
  //     greenAmount:
  //       theme.palette.type === "dark"
  //         ? theme.palette.common.greenAmount
  //         : "green",
  //     redAmount:
  //       theme.palette.type === "dark" ? theme.palette.common.redAmount : "red",
  //   },
  // },

  // overrides: {
  //   MuiAppBar: {
  //     colorPrimary: {
  //       backgroundColor:
  //         defaultTheme.palette.type === "dark"
  //           ? "black"
  //           : defaultTheme.palette.primary.main,
  //     },
  //   },
  // },
});
export default lightTheme;
// overrides: {
//   MuiAppBar: {
//     colorPrimary: {
//       backgroundColor:
//         theme.palette.type === "dark" ? "black" : theme.palette.primary.main,
//     },
//   },
// },
