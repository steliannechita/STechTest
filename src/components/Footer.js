import React from "react";
import styled from "styled-components";
import FacebookIcon from "../assets/images/facebook.svg";
import TwitterIcon from "../assets/images/twitter.svg";

const FooterWrapper = styled.div`
  height: 150px;
  background-image: linear-gradient(to bottom, #158dd4, #56169b);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 46px;
    width: 46px;
    margin: 5px;
    &:hover {
      transition: 0.9s;
      transform: rotateZ(360deg);
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <img src={TwitterIcon} />
    <img src={FacebookIcon} />
  </FooterWrapper>
);

export default Footer;
