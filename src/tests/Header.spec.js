import React from "react";
import { render } from "@testing-library/react";
import { Header } from "../components";
import { apiResponse } from "../stub/apiResponseObject";

describe('Header', ()=>{
  test("renders joinButton within the Header", () => {
    const { getByRole } = render(<Header data={apiResponse} />);
    const joinButton = getByRole("button");
    expect(joinButton).toBeInTheDocument();
  });
  test('title header has the right text',()=>{
    const { getAllByRole } = render(<Header data={apiResponse} />);
    const titileHeader = getAllByRole("heading")[0];
    expect(titileHeader).toHaveTextContent("Play'n GO Tournament")
  })
})
