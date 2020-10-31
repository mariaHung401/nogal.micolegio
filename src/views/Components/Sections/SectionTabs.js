import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GroupIcon from '@material-ui/icons/Group';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1>
                <strong>Visión</strong>
              </h1>
              <CustomTabs
                headerColor="success"
                tabs={[
                  {
                    tabIcon: EmojiEventsIcon,
                    tabContent: (
                      <h5 className={classes.textCenter}>
                        Ser una institución educativa con <br /> fundamento democrático y énfasis <br /> en la participación y la orientación <br /> del proceso educativo, que cumpla la <br /> función socializadora e inclusiva, <br /> de acuerdo con la normativa <br /> vigente.
                      </h5>
                    ),
                  },
                  {
                    tabIcon: SentimentVerySatisfiedIcon,
                    tabContent: (
                      <h5 className={classes.textCenter}>
                        Promover la formación integral de sus estudiantes mediante la actualización profesional y el desarrollo personal de su recurso humano, la adaptación de los mismos a un proceso de enseñanza cónsono, para generar una participación efectiva en las diferentes dimensiones de la vida social.
                      </h5>
                    ),
                  },
                  {
                    tabIcon: GroupIcon,
                    tabContent: (
                      <h5 className={classes.textCenter}>
                        La Unidad Educativa Dr. Héctor Martínez del Castillo se proyecta como canal de integración de los estudiantes y la comunidad, con elevados valores éticos y de justicia social.
                      </h5>
                    ),
                  },
                ]}
              />
              <br />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h1>
                <strong>Misión</strong>
              </h1>
              <CustomTabs
                headerColor="success"
                tabs={[
                  {
                    tabIcon: AccessibilityNewIcon,
                    tabContent: (
                      <h5 className={classes.textCenter}>
                        La Unidad Educativa Dr. Héctor Martínez del castillo tiene como misión la formación educativa de niños, adolescentes y jóvenes en los niveles correspondientes al subsistema de Educación Inicial, Primaria y Media General, con el propósito de prepararlos para un ingreso exitoso en las distintas universidades del territorio nacional.                      
                      </h5>
                    ),
                  },
                  {
                    tabIcon: LocalLibraryIcon,
                    tabContent: (
                      <h5 className={classes.textCenter}>
                        Además es nuestra misión fomentar en los estudiantes el gusto por la lectura, el desarrollo del hábito lector y el interés por las expresiones regionales y nacionales; por esta razón se procura realzar nuestras manifestaciones artísticas y culturales a través de la implantación de actividades institucionales con el fin de difundir conocimientos educativos culturales y de alto valor significativo para el logro de una educación integral y de calidad.                      
                      </h5>
                    ),
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
