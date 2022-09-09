import React, { useEffect } from "react";
import { Content, Wrapper, Text, Box, Map, MapC } from "./About.styles";

import MapP from "../../images/about1.svg";
import Mision from "../../images/about2.svg";
import Vision from "../../images/about3.svg";

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper id="acerca">
      <Content data-aos="fade-right">
        <Text>
          <h1>Experiencia</h1>
          <p>
            Nuestra matriz se encuentra en Ciudad de México, en donde dio inicio
            a sus actividades hace más de 30 años con la razón social NORFER, la
            calidad y servicio de la empresa la ha mantenido en el mercado por
            estos años, por ello se dio a la tarea de abrir sus servicios a la
            ciudad de Puebla en el año 2016, en donde la empresa a crecido en
            este estado por seguir con los lineamientos de la matriz.
          </p>
          <p>
            Nos identificamos como una empresa responsable, comprometidos con
            las necesidades de nuestros clientes.
          </p>
        </Text>
        <MapC className="right" data-aos="fade-up">
          <Map src={MapP} />
        </MapC>
      </Content>

      <Content data-aos="fade-right">
        <MapC className="dp" data-aos="fade-up">
          <Map src={Mision} />
        </MapC>
        <Text>
          <h1>Objetivo</h1>
          <p>
            Servicio, calidad, y empatía para nuestros cliente en el área de
            impermeabilizantes, remodelaciones y mantenimiento de empresas, así
            como clientes particulares para la solución de sus necesidades
            cumpliendo con los costos y tiempos de ejecución.
          </p>
        </Text>
        <MapC className="db" data-aos="fade-up">
          <Map src={Mision} />
        </MapC>
      </Content>
      <Content data-aos="fade-right">
        <Text>
          <h1>Aptitudes</h1>
          <p>
            Personal técnico capacitado, honestidad, responsabilidad y
            proactividad en obras contratadas para satisfacción total de nuestro
            cliente.
          </p>
        </Text>
        <MapC className="right" data-aos="fade-up">
          <Map src={Vision} />
        </MapC>
      </Content>
    </Wrapper>
  );
};

export default About;
