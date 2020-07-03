import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import SideMenu from "./SideMenu";
import SocialLinks from "./SocialLinks";
import EmailIcon from "@material-ui/icons/Email";
import Grid from "@material-ui/core/Grid";
import HomeIcon from "@material-ui/icons/Home";
import ProfileImage from "../../images/profile.jpg";
import ReceiptIcon from "@material-ui/icons/Receipt";
import Button from "@material-ui/core/Button";
import Resume from "../../images/Resume.pdf";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    backgroundColor: theme.palette.background.green,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "lightcoral",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <h4 className="name">KISHAN AGARWAL</h4>
        <div className="profile-info">
          <img src={ProfileImage} className="avatar" align="center" />
          <div className="profile-intro">
            <Typography paragraph>
              My name is Kishan Agarwal and I am a software engineer. Welcome to
              my personal website
            </Typography>
          </div>
          <SocialLinks />
        </div>

        <div className={classes.toolbar} />
        <Divider />
        <SideMenu />
        <br />
        <div className="mb-4">
          <Button target="_blank" className="resumeButton" href={Resume}>
            <ReceiptIcon />
            <span className="d-none d-md-inline">View Resume</span>
          </Button>
        </div>
        <br />
        <Divider />
        <div className="connect-grid">
          <Typography className="connect">Lets Connect</Typography>
          <Grid
            container
            direction="row"
            alignItems="center"
            className="email-move"
          >
            <Grid>
              <a href="mailto:kishan007agarwal@gmail.com">
                <EmailIcon className={classes.email} />
              </a>
            </Grid>
            <Grid item className="emailId">
              kishan007agarwal@gmail.com
            </Grid>
          </Grid>
        </div>
        <Divider />
        <div className="connect-grid">
          <Typography className="connect">Lives In:</Typography>
          <Grid container direction="row" className="address">
            <Grid>
              <HomeIcon className={classes.HomeIcon} />
            </Grid>
            <Grid item className="emailId">
              San Francisco Bay Area
            </Grid>
          </Grid>
        </div>
        <Divider />
        <div className="footer-sidemenu">© 2020 Copyright: Kishan Agarwal</div>
      </Drawer>
    </div>
  );
}
