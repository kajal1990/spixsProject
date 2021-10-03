import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { useHeaderStyles } from "./Headerstyle";

// const useStyles = makeStyles({
//   // This group of buttons will be aligned to the right
//   rightToolbar: {
//     marginLeft: "auto",
//     marginRight: -12,
//   },
//   menuButton: {
//     marginRight: 16,
//     marginLeft: -12,
//   },
//   loginButton: {
//     marginLeft: "auto",
//     // variant: "primary",
//     // variant: "title",
//     // color: "inherit",
//   },
// });

export default function Demo() {
  const classes = useHeaderStyles();
  return (
    <AppBar className={classes.headerStyle}>
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          aria-label="Menu"
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit">
          Shopping Site
        </Typography>

        <IconButton color="currentColor" variant="title" size="medium">
          <Link color="inherit" to="/">
            Home
          </Link>
        </IconButton>

        <IconButton className={classes.loginButton}>
          <Link to="/login">Login</Link>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
