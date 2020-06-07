import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const vpurple = "#F0A6CA";
const vyellow = "#271F33";

export default createMuiTheme({
  palette: {
    common: {
      purple: `${vpurple}`,
      yellow: `${vyellow}`,
    },

    primary: {
      main: `${vyellow}`,
    },

    secondary: {
      main: `${vpurple}`,
    },
  },
});
