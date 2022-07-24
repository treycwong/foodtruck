import { ComponentStoryObj, ComponentMeta } from "@storybook/react";

import { Icon } from "./index";

export default {
  title: "Content/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStoryObj<typeof Icon> = (args) => <Icon {...args} />;

export const BasicIcon = Template.bind({});
BasicIcon.args = {
  name: "Home",
};
