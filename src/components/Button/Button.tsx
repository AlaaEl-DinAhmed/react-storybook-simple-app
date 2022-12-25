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
  title: string;
  variant: Variant;
  size?: Size;
};

export const Button = ({
  title,
  variant = Variant.PRIMARY,
  size = Size.SMALL,
}: ButtonProps) => {
  return (
    <ButtonWrapper variant={variant} size={size}>
      {title}
    </ButtonWrapper>
  );
};
