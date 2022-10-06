import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from "../components/Button";

const meta: Meta = {
  title: "Button",
  component: Button,
  argTypes: { onClick: { action: "onClick" } },
};

const Template: Story<ButtonProps> = (args) => <Button {...args}></Button>;

export const Default = Template.bind({});
export const Secondary = Template.bind({});

export const Small = Template.bind({});
export const Medium = Template.bind({});

Default.args = {
  children: "Primary",
};

Secondary.args = {
  variant: "secondary",
  children: "secondary",
};

Small.args = {
  size: "sm",
  children: "Button",
};

Medium.args = {
  size: "md",
  children: "Button",
};

export default meta;
