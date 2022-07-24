import { FC, MouseEvent } from "react";
import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/react";

import { AppTheme } from "@/styles/themes";
import { boxShadow, transition, borderRadius } from "@/components/styles";

export type Color = "primary" | "secondary" | "danger" | "warning";

export type Props = {
  /** Text in the button */
  children: string;
  /** Button color */
  color?: Color;
  /** Click handler */
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const getColors = (theme: AppTheme, color?: Color): SerializedStyles => {
  switch (color) {
    case "secondary":
      return css`
        color: ${theme.font.regular};
      `;
    case "primary":
    case "danger":
      return css`
        background: ${theme.components[color]};
        color: ${theme.font.button};
      `;
    case "warning":
      return css`
        background: ${theme.components[color]};
        color: ${theme.font.warning};
      `;
    default:
      return css``;
  }
  /* switch (color) {
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
  } */
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
  ${borderRadius};
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

type DefinedButton = Omit<Props, "color">;

export const PrimaryButton: FC<DefinedButton> = (props) => (
  <Button color="primary" {...props} />
);

export const SecondaryButton: FC<DefinedButton> = (props) => (
  <Button color="secondary" {...props} />
);

export const DangerButton: FC<DefinedButton> = (props) => (
  <Button color="danger" {...props} />
);

export const WarningButton: FC<DefinedButton> = (props) => (
  <Button color="warning" {...props} />
);
