import { MouseEvent } from "react";
import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/react";

import { AppTheme } from "@/styles/themes";
import { boxShadow, transition } from "@/components/styles";

export type Color = "primary" | "secondary" | "danger" | "warning";

export type Props = {
  children: string;
  color?: Color;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const getColors = (theme: AppTheme, color?: Color): SerializedStyles => {
  switch (color) {
    case "primary":
      return css`
        background: #2efc32;
      `;
    case "secondary":
      return css`
        background: #cccccc;
      `;
    case "danger":
      return css`
        color: #fff;
        background: #00239e;
      `;
    case "warning":
      return css`
        color: #dddddd;
      `;
    default:
      return css``;
  }
};

export const Button = styled.button<Props>`
  all: unset;
  display: flex;
  justify-self: center;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  font-size: 1.6rem;
  width: 15rem;
  height: 4rem;
  border-radius: 1rem;
  transition: all 0.4s ease;
  ${({ color, theme }) => getColors(theme, color)};
  &:hover {
    color: grey;
  }
  ${transition()}
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)}
  &:active {
    ${({ theme }) =>
      boxShadow(theme.components.shadow1, theme.components.shadow2, true)}
  }
  /* box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2); */
`;

Button.defaultProps = {
  color: "primary",
};
