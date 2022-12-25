import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, Size, Variant } from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => (
  <Button title="Primary" variant={Variant.PRIMARY} />
);

export const Secondary: ComponentStory<typeof Button> = () => (
  <Button title="Secondary" variant={Variant.SECONDARY} />
);

export const Success: ComponentStory<typeof Button> = () => (
  <Button title="Success" variant={Variant.SUCCESS} />
);

export const Danger: ComponentStory<typeof Button> = () => (
  <Button title="Danger" variant={Variant.DANGER} />
);

export const Small: ComponentStory<typeof Button> = () => (
  <Button title="Primary" variant={Variant.PRIMARY} size={Size.SMALL} />
);

export const Medium: ComponentStory<typeof Button> = () => (
  <Button title="Primary" variant={Variant.PRIMARY} size={Size.MEDIUM} />
);

export const Large: ComponentStory<typeof Button> = () => (
  <Button title="Primary" variant={Variant.PRIMARY} size={Size.LARGE} />
);
