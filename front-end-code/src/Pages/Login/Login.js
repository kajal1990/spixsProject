import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, useHistory } from "react-router-dom";
import { useLoginStyles } from "./LoginStyle";
import axios from "axios";

const Login = () => {
  /////
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  ///// pass the data from registration to login use
  // const location = useLocation();
  // useEffect(() => {
  //   console.log("pathaname" + location.pathname);
  //   console.log(" message name " + location.message);
  // });
  ///////

  const LoginApi = () => {
    const { email, password } = user;
    if (email && password) {
      axios.post("http://localhost:8080/login", user).then((res) => {
        if (res.data.login === "success") {
          var userName = res.data.name;
          var userEmail = res.data.email;
          // history.push("/dashBoard");
          history.push({
            pathname: "/dashBoard",
            userName: userName,
            userEmail: userEmail,
          });
        } else {
          // alert("login failed");
        }
      });
    } else {
      alert("invlid input");
    }
  };

  const classes = useLoginStyles();
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  //  const btnstyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper elevation={10} className={classes.logInDesign}>
        <Grid align="center">
          <Avatar style={avatarStyle}>{/* <LockOutlinedIcon /> */}</Avatar>
          <h2>Log In</h2>
        </Grid>
        <TextField
          label="Email"
          placeholder="Enter Email"
          fullWidth
          required
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          className={classes.btnStyle}
          fullWidth
          onClick={LoginApi}
        >
          Log in
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?
          <Button>
            <Link to="/registration">Sign Up</Link>
          </Button>
          {/* <label> {location.message}</label> */}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
