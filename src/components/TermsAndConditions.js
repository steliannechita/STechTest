import React from "react";
import { SectionHeader, Wrapper } from "../styles/styles";
import { tAndC } from "../stub/tAndC";

const TermsAndConditions = () => (
  <Wrapper terms>
    <SectionHeader>Terms & Conditions</SectionHeader>
    <ul>
      {tAndC.map((line) => (
        <li key={line}>{line}</li>
      ))}
    </ul>
  </Wrapper>
);

export default TermsAndConditions;
