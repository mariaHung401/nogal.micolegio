import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Carousel from "react-slick";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Success from "components/Typography/Success.js";

import image1 from "assets/img/colegio/cuadro.png";
import image2 from "assets/img/colegio/cuadro1.png";
import image3 from "assets/img/colegio/cuadro2.png";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center" xs={12} sm={12} md={12}>
          <GridItem xs={12} sm={12} md={12}>
            <Success>
              <h3>
                <strong>Objetivos institucionales</strong>
              </h3>
            </Success>
          </GridItem>
          <br />
          <GridItem xs={12} sm={7} md={4}>
            <Carousel {...settings}>
              <div>
                <img src={image1} className="slick-image" />
              </div>
            </Carousel>
            <h4>
              <strong>
                Ofrecer un aprendizaje significativo, <br />
                dándole a los estudiantes <br /> herramientas útiles para que lleguen a la reflexión y ejerciten el <br />
                pensamiento crítico de sus propios planteamientos.
              </strong>
            </h4>
          </GridItem>
          <br />
          <GridItem xs={12} sm={7} md={4}>
            <Carousel {...settings}>
              <div>
                <img src={image2} className="slick-image" />
              </div>
            </Carousel>
            <h4>
              <strong>
                Capacitar al equipo docente para la <br />
                búsqueda constante de información <br />
                y actualización en sus respectivas <br />
                áreas de especialidad, con el fin <br />
                de brindar calidad a la educación <br />
                de nuestros estudiantes.
              </strong>
            </h4>
          </GridItem>
          <br />
          <GridItem xs={12} sm={7} md={4}>
            <Carousel {...settings}>
              <div>
                <img src={image3} className="slick-image" />
              </div>
            </Carousel>
            <h4>
              <strong>
                Fortalece las <br />
                bases que permitan elevar <br />
                la eficiencia y el desarrollo <br />
                de las acciones para presentar <br />
                soluciones concretas frente <br />
                a las dificultades o situaciones <br />
                del ámbito escolar y social.
              </strong>
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
