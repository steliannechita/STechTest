import React from "react";
import { string } from "prop-types";
import { LoaderAndErrorWrapper, SectionHeader } from "../styles/styles";
import WarningIcon from "../assets/images/warning.svg";

const ErrorMsg = ({ text }) => (
  <LoaderAndErrorWrapper>
    <img src={WarningIcon} alt="warning" />
    <SectionHeader>{text}</SectionHeader>
  </LoaderAndErrorWrapper>
);

ErrorMsg.propTypes = {
  text: string,
};

export default ErrorMsg;
