import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { CardActionArea } from "@material-ui/core";
import Github from "../../images/github.jpg";

const ProjectDetails = (projects) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

  const classes = useStyles();
  return (
    <div className="education-container">
      <Grid container spacing={3}>
        {projects.projects.projects.map((item) => (
          <Grid item xs={6} key={item.id}>
            <Card className={classes.root} key={item.id}>
              <CardHeader avatar={<Avatar src={Github} />} title="GITHUB" />
              <Typography variant="h6">
                <b>{item.description}</b>
              </Typography>
              <CardActionArea href={item.link} target="_blank">
                <>
                  {item.id ? (
                    <CardMedia component="img" src={Github} />
                  ) : (
                    <CircularProgress />
                  )}
                </>
              </CardActionArea>
              <CardActionArea href={item.readme} target="_blank">
                <Typography align="center">
                  <b>README</b>
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProjectDetails;
