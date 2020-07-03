import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import AssignmentIcon from "@material-ui/icons/Assignment";

export default function SideMenu() {
  const menuItems = [
    {
      icon: <PersonIcon />,
      text: "ABOUT ME",
      link: "/",
      index: 0,
    },
    {
      icon: <WorkOutlineIcon />,
      text: "EXPERIENCE",
      link: "/experience",
      index: 2,
    },
    {
      icon: <AssignmentIcon />,
      text: "PROJECT",
      link: "/projects",
      index: 1,
    },
    {
      icon: <LibraryBooksIcon />,
      text: "BLOG",
      link: "/blogs",
      index: 3,
    },
  ];
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      {menuItems.map((item) => (
        <ListItem
          button
          component={Link}
          key={item.text}
          to={item.link}
          selected={selectedIndex === item.index}
          onClick={(event) => handleListItemClick(event, item.index)}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>

          <ListItemText className="linkText">{item.text}</ListItemText>
        </ListItem>
      ))}
    </div>
  );
}
