import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

import Success from "components/Typography/Success";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center" xs={12} sm={12} md={12}>
            <h3>
              <strong>Contacta con nosotros!!</strong>
            </h3>
          </GridContainer>
          <Button
            href="https://www.instagram.com/colegiohmdelcastillo/"
            color="rose"
          >
            <i className={classes.socials + " fab fa-instagram"} />
            siguenos
          </Button>
          <hr />
          <GridContainer justify="center" xs={12} sm={12} md={12}>
            <Success>
              <h3>CORREO</h3>
              <h6>colegiohmdelcastillo@gmail.com</h6>
            </Success>
          </GridContainer>
          <GridContainer justify="center" xs={12} sm={12} md={12}>
            <Button simple>
              <Success>
                <h4>DIRECCIÓN</h4>
                <h6>
                  Urbanización <br />
                  Monte Claro calle J Nº 12-70, <br />
                  Maracaibo, Edo. Zulia.
                </h6>
              </Success>
              <hr />
            </Button>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
