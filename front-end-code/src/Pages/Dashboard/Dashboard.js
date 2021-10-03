import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { posts } from "./DashboardStyle";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home(props) {
  /// pass the data from loginData to dashboard use
  const loginData = useLocation();
  useEffect(() => {
    console.log("pathaname" + loginData.pathname);
    console.log(" userName " + loginData.userName);
    console.log(" userEmail " + loginData.userEmail);
  });
  /////
  return (
    <div style={{ marginTop: 20, padding: 30 }}>
      <label style={{ color: "red" }}> Hi {loginData.userName}</label>
      <Grid container spacing={40} justify="center">
        {posts.map((post) => (
          <Grid item key={post.title}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={post.image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography component="p">{post.excerpt}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Home;

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
// const backgroundImage = require("../../img/image.jpg");

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     padding: theme.spacing(1),
//     textAlign: "center",
//     //color: theme.palette.text.blue,
//     color: "black",
//     height: "200px",
//     //backgroundColor: "cadetblue",

//     marginTop: "10px",
//     marginLeft: "10px",
//     marginRight: "10px",
//     // overflow: "hidden",
//   },
// }));
// // function GridItem({ classes }) {
// //   return (
// //     // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
// //     // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
// //     // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
// //     <Grid item xs={12} sm={6} md={3}>
// //       <Paper className={classes.paper}>item</Paper>
// //     </Grid>
// //   );
// // }
// export default function AutoGrid() {
//   const classes = useStyles();
//   return (
//     <div>
//       <Grid container spacing={1}>
//         <Grid xs={12} sm={6} md={3}>
//           <Paper className={classes.paper}>
//             <Grid
//               xs={12}
//               justify="space-between"
//               style={{
//                 backgroundImage: `url(${backgroundImage})`,
//                 // height: "300px",
//                 // marginTop: 20,
//                 // backgroundSize: "cover",
//               }}
//             ></Grid>
//           </Paper>
//         </Grid>
//         <Grid xs={12} sm={6} md={3}>
//           <Paper className={classes.paper}>item</Paper>
//         </Grid>
//         <Grid xs={12} sm={6} md={3}>
//           <Paper className={classes.paper}>item</Paper>
//         </Grid>
//         <Grid xs={12} sm={6} md={3}>
//           <Paper className={classes.paper}>item</Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
// const useStyles = makeStyles((theme) => ({
//   paper: {
//     padding: theme.spacing(1),
//     textAlign: "center",
//     color: theme.palette.text.blue,
//     color: "black",
//     height: "200px",
//     backgroundColor: "cadetblue",

//     marginTop: "10px",
//     marginLeft: "10px",
//     marginRight: "10px",
//     // overflow: "hidden",
//   },
// }));
// // function GridItem({ classes }) {
// //   return (
// //     // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
// //     // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
// //     // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
// //     <Grid item xs={12} sm={6} md={3}>
// //       <Paper className={classes.paper}>item</Paper>
// //     </Grid>
// //   );
// // }
// export default function AutoGrid() {
//   const classes = useStyles();
//   return (
//     <div>
//       <Grid container spacing={1}>
//         <Grid xs={12} sm={6} md={3}>
//           <Paper className={classes.paper}>item</Paper>
//         </Grid>
//         <Grid xs={12} sm={6} md={3}>
//           <Paper className={classes.paper}>item</Paper>
//         </Grid>
//         <Grid xs={12} sm={6} md={3}>
//           <Paper className={classes.paper}>item</Paper>
//         </Grid>
//         <Grid xs={12} sm={6} md={3}>
//           <Paper className={classes.paper}>item</Paper>
//         </Grid>
//       </Grid>
//       <Grid container spacing={1}>
//         <Grid xs={12} sm={6} md={3}>
//           <Paper className={classes.paper}>item</Paper>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Paper className={classes.paper}>item</Paper>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Paper className={classes.paper}>item</Paper>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Paper className={classes.paper}>item</Paper>
//         </Grid>
//       </Grid>
//       <Grid container spacing={1}>
//         <Grid item xs={12} sm={6} md={3}>
//           <Paper className={classes.paper}>item</Paper>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Paper className={classes.paper}>item</Paper>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Paper className={classes.paper}>item</Paper>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Paper className={classes.paper}>item</Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }
