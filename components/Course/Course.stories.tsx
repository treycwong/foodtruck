import { expect } from "@storybook/jest";
import { screen } from "@storybook/testing-library";
import { ComponentStoryObj, ComponentMeta } from "@storybook/react";

import { Course } from "./Course";

export default {
  title: "Content/Course",
  component: Course,
} as ComponentMeta<typeof Course>;

export const BasicCourse: ComponentStoryObj<typeof Course> = {
  play: async () => {
    await expect(screen.getByRole("heading")).toBeInTheDocument();
    await expect(screen.getByRole("img")).toBeInTheDocument();
    await expect(screen.getByRole("link")).toBeInTheDocument();
  },
  args: {
    header: "Cowboys Food Truck",
    link: "/hands-on-reactjs",
    imageProps: {
      width: 1368,
      height: 770,
      alt: "Cowboys Food Truck",
      src: "/covers/cowboys-food-truck.jpg",
    },
    children: (
      <>
        Texas-inspired Malaysian twist. Affordable & Halal American BBQ,
        Brisket, Ribs, Lambs & More.
        <ul>
          <li>Location: Shell TTDI</li>
          <li>Hours: Tues-Sun (6-10pm)</li>
          <li>Price: RM16++</li>
        </ul>
      </>
    ),
  },
  argTypes: {
    children: {
      control: false,
    },
  },
};
