import React from 'react';
import { shallow } from 'enzyme';
import Header from "../components/Header";
import { apiResponse } from "../stub/apiResponseObject";

it('renders correctly', () => {
  const header = shallow(<Header data={apiResponse}/>)
  expect(header).toMatchSnapshot();
});
