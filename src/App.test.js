import React from "react";
import { mount, shallow } from "enzyme";
import App from "./App";

describe("Headline of app", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test("Show static headline", () => {
    expect(wrapper.find("h2").text()).toEqual("Counter App");
  });

  test("Counter p", () => {
    expect(wrapper.find(".counter").text()).toEqual("0");
  });

  test("Counter increasing button", () => {
    wrapper.find(".increase").simulate("click");
    expect(wrapper.find(".counter").text()).toEqual("1");
    expect(wrapper.find(".increase").text()).toBe("Increase");
  });
  test("Counter decreasing button", () => {
    wrapper.find(".decrease").simulate("click");
    expect(wrapper.find(".counter").text()).toEqual("0");
    expect(wrapper.find(".decrease").text()).toBe("Decrease");
  });
});
