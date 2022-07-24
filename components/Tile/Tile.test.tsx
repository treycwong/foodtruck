import { render } from "@/test-utils";

import { Tile } from "./Tile";

describe("Tile test cases", () => {
  it("Tile render check", () => {
    const { asFragment } = render(
      <Tile header="Lorem ipsum dolor sit amet">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia maxime
        officia sed magnam nisi dignissimos vitae temporibus omnis dolore
        nostrum.
      </Tile>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
