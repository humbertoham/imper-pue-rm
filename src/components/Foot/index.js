import React from "react";
import { Content, Wrapper, Red } from "./Foot.styles";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Foot = () => (
  <Wrapper>
    <Content>
      <Red href="https://www.facebook.com/Impermeabilizantes-distribuci%C3%B3n-y-colocaci%C3%B3n-Imper-110507207404330">
        <FontAwesomeIcon icon={faFacebookF} />
      </Red>
      <p>© Copyright 2022 IMPER PUE RM</p>
    </Content>
  </Wrapper>
);

export default Foot;
