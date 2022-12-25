import styled, { css } from "styled-components";
import { Size, Variant } from "./Button";

export interface Props {
  variant: Variant;
  size: Size;
}

export const Button = styled.button<Props>`
  border-color: transparent;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  padding: 0.25em 1em;
  ${(props: Props) => {
    switch (props.variant) {
      case "primary":
        return css`
          background-color: #007bff;
        `;
      case "secondary":
        return css`
          background-color: #6c757d;
        `;
      case "success":
        return css`
          background-color: #4caf50;
        `;
      case "danger":
        return css`
          background-color: #f44336;
        `;
    }
  }}
  ${(props: Props) => {
    switch (props.size) {
      case "small":
        return css`
          font-size: 1rem;
        `;
      case "medium":
        return css`
          font-size: 1.25rem;
        `;
      case "large":
        return css`
          font-size: 1.5rem;
        `;
    }
  }}
`;
