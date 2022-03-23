import React, { FC } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { KraftTheme } from '../theme';
import { Button } from '../../../core/components/Button/Button';

import { ButtonProps } from './Button.types';

const StyledButton = styled(Button)`
  border: 5px solid ${({ theme }) => theme.contentSecondary};
  background-color: white;
  color: ${({ theme }) => theme.contentPrimary};
  font-weight: 800;
  font-size: 28px;
  padding: 6px 12px;
  border-radius: 50%;
`;

export const KraftButton: FC<ButtonProps> = ({
  disabled,
  onClick,
  children,
  ...props
}) => {
  return (
    <ThemeProvider theme={KraftTheme}>
      <StyledButton onClick={onClick} disabled={disabled} {...props}>
        {children}
      </StyledButton>
    </ThemeProvider>
  );
};
