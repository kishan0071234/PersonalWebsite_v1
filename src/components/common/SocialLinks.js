import React from "react";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import Medium from "../../images/medium.png";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <ListItem>
        <GitHubIcon
          onClick={() =>
            window.open("https://github.com/kishan0071234", "_blank")
          }
        />
        <LinkedInIcon
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/kishan-agarwal-95112551/",
              "_blank"
            )
          }
        />
        <Avatar
          src={Medium}
          className="medium-avatar"
          onClick={() =>
            window.open("https://medium.com/@kishan007agarwal", "_blank")
          }
        />
      </ListItem>
    </div>
  );
}
