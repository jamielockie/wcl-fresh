import React, { FC } from "react";
import styled from "styled-components";

import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1.5;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  &:hover {
  }
  &:active {
  }
`;

const Button: FC<ButtonProps> = ({ disabled, onClick, children, ...props }) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
