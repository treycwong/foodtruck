import { render } from "@/test-utils";

import { Logo } from "./Logo";

describe("Logo test cases", () => {
  it("Render check", () => {
    const { asFragment } = render(<Logo>FoodTruck</Logo>);
    expect(asFragment()).toMatchSnapshot();
  });
  it("Render with custom size", () => {
    const { asFragment } = render(<Logo size={10}>FoodTruck</Logo>);
    expect(asFragment()).toMatchSnapshot();
  });
});
