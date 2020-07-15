import React from "react";
import NavigationItems from "./NavigationItems";
import NavigationItem from './NavigationItem/NavigationItem'
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({
  adapter: new Adapter(),
});


describe("<NavigationItems/>", () => {
  it("should render two <NavigationItem/> elements if not authnticated", () => {
    const wrapper = shallow(<NavigationItems />);
    expect(wrapper.find(NavigationItem)).toHaveLength(2)
  });
});
