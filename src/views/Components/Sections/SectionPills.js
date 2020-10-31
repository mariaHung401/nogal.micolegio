import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

import FaceIcon from '@material-ui/icons/Face';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';

import Success from "components/Typography/Success.js";
import Quote from "components/Typography/Quote.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center" xs={12} sm={12} md={12}>
          <div className={classes.typo}>
            <Success>
              <h3>
                <strong>Actividades que ofrecemos</strong>
              </h3>
            </Success>
            <Quote
              text="Si plantas hoy un nogal, lo estarás plantando para tus nietos"
              author="George Orwell"
            />
          </div>
        </GridContainer>
        <div>
          <h3>
            <strong>En el horario matutino:</strong>
          </h3>
          <GridContainer justify="center">
            <GridItem xs={5} sm={3} md={3}>
              <InfoArea
                title="Inicial (Sala de 5 años)."
                icon={FaceIcon}
                iconColor="warning"
                vertical
              />
            </GridItem>
            <GridItem xs={5} sm={3} md={3}>
              <InfoArea
                title="Primaria completa."
                icon={EmojiEmotionsIcon}
                iconColor="rose"
                vertical
              />
            </GridItem>
            <GridItem xs={5} sm={3} md={3}>
              <InfoArea
                title="Media General hasta 5to año."
                icon={SupervisorAccountIcon}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={5} sm={3} md={3}>
              <InfoArea
                title="Educación personalizada"
                icon={ImportContactsIcon}
                iconColor="danger"
                vertical
              />
            </GridItem>
            <GridItem xs={5} sm={3} md={3}>
              <InfoArea
                title="Equipo psicosocial."
                icon={PeopleAltIcon}
                iconColor="primary"
                vertical
              />
            </GridItem>
            <GridItem xs={6} sm={4} md={4}>
              <InfoArea
                title="Estructura lingüística y destrezas matemáticas"
                icon={EmojiSymbolsIcon}
                iconColor="warning"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <InfoArea
                title="Áreas extracurriculares:"
                icon={SpeakerNotesIcon}
                iconColor="info"
                vertical
              />
              <h4>
                inglés, religión, educación musical, danza, etiqueta y protocolo.
              </h4>
            </GridItem>
          </GridContainer>
          <div>
            <h3>
              <strong>En el horario vespertino:</strong>
            </h3>
            <GridContainer justify="center">
              <GridItem xs={5} sm={3} md={3}>
                <InfoArea
                  title="Tareas dirigidas."
                  icon={LocalLibraryIcon}
                  iconColor="success"
                  vertical
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <InfoArea
                  title="Club deportivo con las siguientes disciplinas: "
                  icon={SportsKabaddiIcon}
                  iconColor="danger"
                  vertical
                />
                <h4>
                  futbol sala, baloncesto, karate, ajedrez, teatro, taller de inglés.
                </h4>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
