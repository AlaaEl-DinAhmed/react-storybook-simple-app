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
  onClick: () => void;
};

export const Button = ({
  label,
  variant = Variant.PRIMARY,
  size = Size.SMALL,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonWrapper variant={variant} size={size} onClick={onClick}>
      {label}
    </ButtonWrapper>
  );
};
