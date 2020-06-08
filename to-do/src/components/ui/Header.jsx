import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h3" color="secondary">
            To Do or Not To Do
          </Typography>{" "}
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
