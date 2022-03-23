import { ReactNode, MouseEventHandler, FC } from 'react';

interface ButtonProps$1 {
    children: ReactNode;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare const Button: FC<ButtonProps$1>;

interface ButtonProps {
    children: ReactNode;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare const KraftButton: FC<ButtonProps>;

export { Button, KraftButton };
