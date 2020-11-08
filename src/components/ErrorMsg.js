import React from "react";
import { LoaderAndErrorWrapper, SectionHeader } from "../styles/styles";
import WarningIcon from "../assets/images/warning.svg";

const ErrorMsg = ({ text }) => (
  <LoaderAndErrorWrapper>
    <img src={WarningIcon} alt="warning" />
    <SectionHeader>{text}</SectionHeader>
  </LoaderAndErrorWrapper>
);

export default ErrorMsg;
