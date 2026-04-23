import React from 'react';

import * as S from './styles';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: S.ButtonVariant;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<IButtonProps> = ({
  variant = 'solid',
  fullWidth = false,
  children,
  ...props
}) => {
  return (
    <S.Button $variant={variant} $fullWidth={fullWidth} {...props}>
      {children}
    </S.Button>
  );
};