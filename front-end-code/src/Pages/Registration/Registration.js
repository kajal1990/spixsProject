import React, { useState } from "react";
import axios from "axios";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useRegistrationStyles } from "./RegistrationStyle";
import { useHistory } from "react-router-dom";

const Registration = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userSuccess: "",
  });
  const [message, setMessage] = useState({
    userSuccess: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { userName, userEmail, userPassword } = user;
    if (userName && userEmail && userPassword) {
      axios.post("http://localhost:8080/registration", user).then((res) => {
        if (res.data.registration === "success") {
          setMessage({
            ["userSuccess"]: "Registration sucessful",
          });
          history.push("/login");

          ////pass the data to login page using history.push
          // setTimeout(() => {
          //   history.push(
          //     {
          //       pathname: "/login",
          //       message: "Registration sucessful",
          //     },
          //     60000
          //   );
          // });

          /////

          //////////////////
        } else {
          setMessage({
            ["userSuccess"]: " Registration Failed",
          });
          // alert("login failed");
        }
      });
    } else {
      setMessage({
        ["userSuccess"]: "Failed",
      });
      // alert("invlid input");
    }
  };

  const classes = useRegistrationStyles();

  const avatarStyle = { backgroundColor: "#1bbd7e" };
  //  const btnstyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper elevation={10} className={classes.logInDesign}>
        <Grid align="center">
          <Avatar style={avatarStyle}>{/* <LockOutlinedIcon /> */}</Avatar>
          <h2>Sign Up</h2>
        </Grid>
        {/* <h2 align="center">Sign Up</h2> */}
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
          name="userName"
          value={user.userName}
          onChange={handleChange}
        />
        <TextField
          label="Useremail"
          placeholder="Enter useremail"
          fullWidth
          required
          name="userEmail"
          value={user.userEmail}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          name="userPassword"
          value={user.userPassword}
          onChange={handleChange}
        />

        <Button
          type="submit"
          color="primary"
          variant="contained"
          className={classes.btnStyle}
          fullWidth
          onClick={register}
        >
          <b> Register </b>
        </Button>
        <label> {message.userSuccess}</label>
        <Typography>
          <Link to="/">Terms and conditions.</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Registration;

// const paperStyle = {
//    padding: 20,
//    height: "70vh",
//    width: 280,
//    margin: "20px auto",
//  };
