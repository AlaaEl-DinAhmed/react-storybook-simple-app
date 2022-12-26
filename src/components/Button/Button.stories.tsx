import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, Size, Variant } from "./Button";

export default {
  title: "Action/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Primary",
  variant: Variant.PRIMARY,
  size: Size.SMALL,
};

export const Secondary = Template.bind({});

Secondary.args = {
  label: "Secondary",
  variant: Variant.SECONDARY,
};

export const Success = Template.bind({});

Success.args = {
  label: "Success",
  variant: Variant.SUCCESS,
};

export const Danger = Template.bind({});

Danger.args = {
  label: "Danger",
  variant: Variant.DANGER,
};

export const Small = Template.bind({});

Small.args = {
  label: "Small",
  size: Size.SMALL,
};

export const Medium = Template.bind({});

Medium.args = {
  label: "Medium",
  size: Size.MEDIUM,
};

export const Large = Template.bind({});

Large.args = {
  label: "Large",
  size: Size.LARGE,
};
