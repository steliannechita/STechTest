import React from "react";
import styled from "styled-components";
import FacebookIcon from "../assets/images/facebook.svg";
import TwitterIcon from "../assets/images/twitter.svg";

const FooterWrapper = styled.div`
  height: 150px;
  background-image: linear-gradient(to bottom, #158dd4, #56169b);
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  p {
    margin-bottom:10px;
    font-family: "Barlow condensed";
    font-size: 16px;
    font-weight: 600;
    color: #f9cb11;
  }
  img {
    height: 46px;
    width: 46px;
    margin: 5px;
    &:hover {
      transition: 0.9s;
      transform: rotateZ(360deg);
      cursor: pointer;
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <p>Share this Tournament</p>
    <div>
      <img src={TwitterIcon} alt="twitter" />
      <img src={FacebookIcon} alt="facebook" />
    </div>
  </FooterWrapper>
);

export default Footer;
