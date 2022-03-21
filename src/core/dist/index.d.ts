import { ReactNode, MouseEventHandler, FC } from 'react';

interface ButtonProps {
    children: ReactNode;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare const Button: FC<ButtonProps>;

export { Button };
