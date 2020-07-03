import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import EsuranceLogo from "../../images/esuranceLogo.png";
import IBMLogo from "../../images/ibm1.png";
import PurdueLogo2 from "../../images/purdueLogo2.png";
import CharterGlobal from "../../images/charter-global.jpg";
import OpenText from "../../images/open_text.png";

const ExperienceTimeline = (experience) => {
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: "6px 16px",
      whiteSpace: "pre-line",
      width: "100%",
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
  }));

  const classes = useStyles();
  return (
    <Timeline align="alternate">
      {experience.experience.experience.map((item) => (
        <TimelineItem key={item.company}>
          <TimelineOppositeContent>
            <Typography
              variant="body2"
              color="textSecondary"
              className="timeline"
            >
              {item.period}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              {item.company == "Esurance" ? (
                <Avatar src={EsuranceLogo} />
              ) : null}
              {item.company == "IBM" ? <Avatar src={IBMLogo} /> : null}
              {item.company == "Purdue University Northwest" ? (
                <Avatar src={PurdueLogo2} />
              ) : null}
              {item.company == "Charter Global" ? (
                <Avatar src={CharterGlobal} />
              ) : null}
              {item.company == "Open Text" ? <Avatar src={OpenText} /> : null}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper variant="outlined" square className={classes.paper}>
              <Typography variant="h5">
                <b>{item.company}</b>
              </Typography>
              <Typography variant="h6">
                <i>{item.location}</i>
              </Typography>
              <br />
              <Typography variant="h6">
                <b>{item.position}</b>
              </Typography>
              <br />
              <Typography>{item.description}</Typography>
            </Paper>
          </TimelineContent>
          <br />
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ExperienceTimeline;
