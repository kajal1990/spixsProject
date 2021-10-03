import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
//import { useHeaderStyles } from "./Headerstyle";

const useStyles = makeStyles((theme) => ({
  footer: {
    // backgroundColor: theme.palette.common.pink,
    //width: "100%",
    bottom: "0",
    position: "fixed",
    backgroundColor: "burlywood",
  },
}));

export default function Demo() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.footer}>
      <Toolbar>
        <Typography variant="body2" color="textSecondary" text-align="center">
          Copyright ©{" "}
          <Link color="inherit" href="https://material-ui.com/">
            Your Website
          </Link>{" "}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
