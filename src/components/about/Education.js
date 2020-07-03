import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import CircularProgress from "@material-ui/core/CircularProgress";
import { CardActionArea } from "@material-ui/core";
import Purdue from "../../images/purdue.png";
import JNTUH from "../../images/jntu_1.png";
import PurdueAvatar from "../../images/purdueLogo.jpg";
import JNTUHAvatar from "../../images/jntuh-logo.jpg";

const Education = (school) => {
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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const te = school;

  return (
    <div className="education-container">
      <Grid container spacing={3}>
        {te.school.schools.map((item) => (
          <Grid item xs={6} key={item.id}>
            <Card className={classes.root} key={item.id}>
              <CardHeader
                avatar={
                  item.id == 1 ? (
                    <Avatar src={PurdueAvatar} />
                  ) : (
                    <Avatar src={JNTUHAvatar} />
                  )
                }
                title={item.school}
                subheader={item.location}
              />
              <CardActionArea href={item.link} target="_blank">
                <>
                  {item.id ? (
                    item.id == 1 ? (
                      <CardMedia component="img" src={Purdue} />
                    ) : (
                      <CardMedia component="img" src={JNTUH} />
                    )
                  ) : (
                    <CircularProgress />
                  )}
                </>
              </CardActionArea>
              <Typography className="degree-text">{item.Degree}</Typography>
              <CardActions disableSpacing>
                <Typography
                  variant="body2"
                  className="courses-container"
                  color="textSecondary"
                  component="p"
                >
                  Relevant Courses
                </Typography>
                <div className="expandIcon-container">
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </div>
              </CardActions>

              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    {item.relevantCourses.split(",").map((course) => (
                      <span key={course}>
                        <KeyboardArrowRightIcon />
                        {course}
                        <br />
                      </span>
                    ))}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Education;
