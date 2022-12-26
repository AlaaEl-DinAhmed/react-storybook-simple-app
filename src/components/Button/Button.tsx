import { Button as ButtonWrapper } from "./style";

export enum Variant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUCCESS = "success",
  DANGER = "danger",
}

export enum Size {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export type ButtonProps = {
  label: string;
  variant: Variant;
  size?: Size;
  click: () => void;
};

export const Button = ({
  label,
  variant = Variant.PRIMARY,
  size = Size.SMALL,
  click,
}: ButtonProps) => {
  const clicked = () => {
    console.log("CLICKED");
  };
  return (
    <ButtonWrapper variant={variant} size={size} onClick={click}>
      {label}
    </ButtonWrapper>
  );
};
