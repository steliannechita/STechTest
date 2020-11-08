import React from "react";
import { LoaderAndErrorWrapper, SectionHeader } from "./styles";
import WarningIcon from "../assets/images/warning.svg";

const ErrorMsg = ({ text }) => (
  <LoaderAndErrorWrapper>
    <img src={WarningIcon} />
    <SectionHeader>{text}</SectionHeader>
  </LoaderAndErrorWrapper>
);

export default ErrorMsg;
