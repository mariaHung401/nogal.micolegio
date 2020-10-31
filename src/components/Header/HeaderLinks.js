import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Button from "components/CustomButtons/Button.js";

import ListItem from "@material-ui/core/ListItem";
import PersonIcon from "@material-ui/icons/Person";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem} justify="center">
        <Button
          href="#"
          className={classes.navLink}
          onClick={(e) => e.preventDefault()}
          color="white"
        >
          <EmojiPeopleIcon className={classes.icons} /> Preescolar
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          className={classes.navLink}
          onClick={(e) => e.preventDefault()}
          color="white"
        >
          <EmojiPeopleIcon className={classes.icons} /> Primaria
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          className={classes.navLink}
          onClick={(e) => e.preventDefault()}
          color="white"
        >
          <PersonIcon className={classes.icons} /> Bachillerato
        </Button>
      </ListItem>
    </List>
  );
}
