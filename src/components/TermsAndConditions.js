import React from "react";
import { SectionHeader, Wrapper } from "./styles";
import { tAndC } from "../stub/tAndC";

const TermsAndConditions = () => (
  <Wrapper>
    <SectionHeader>Terms & Conditions</SectionHeader>
    <ul>
      {tAndC.map((line,index) => (
        <li key={line}>{line}</li>
      ))}
    </ul>
  </Wrapper>
);

export default TermsAndConditions;
