import React from "react";
import { Container, Wrapper } from "./Map.styles";

const Map = () => {
  return (
    <Wrapper>
      <Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7541.758640303932!2d-98.25772802597471!3d19.06904283848995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc6f289e67493%3A0xab1e4c43226f04d7!2sSanta%20Cruz%20Guadalupe%2C%20Puebla!5e0!3m2!1sen!2smx!4v1661558370147!5m2!1sen!2smx"
          width="100%"
          height="400"
        ></iframe>
      </Container>
    </Wrapper>
  );
};

export default Map;
