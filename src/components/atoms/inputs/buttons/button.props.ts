import { ButtonVariants, ChildrenVariants } from './button.css';
import { MouseEvent, ReactNode, ComponentPropsWithoutRef } from 'react';

type ButtonOmittedVariants = Omit<ButtonVariants, 'primary' | 'success' | 'error' | 'warning' | 'info' | 'transparent'>;

type ButtonNoType = {
  primary?: never;
  success?: never;
  error?: never;
  warning?: never;
  info?: never;
  transparent?: never;
};
type ButtonPrimary = {
  primary: true;
  secondary?: never;
  success?: never;
  error?: never;
  warning?: never;
  info?: never;
  transparent?: never;
};
type ButtonSecondary = {
  primary?: never;
  secondary: true;
  success?: never;
  error?: never;
  warning?: never;
  info?: never;
  transparent?: never;
};
type ButtonSuccess = {
  primary?: never;
  secondary?: never;
  success: true;
  error?: never;
  warning?: never;
  info?: never;
  transparent?: never;
};
type ButtonError = {
  primary?: never;
  secondary?: never;
  success?: never;
  error: true;
  warning?: never;
  info?: never;
  transparent?: never;
};
type ButtonWarning = {
  primary?: never;
  secondary?: never;
  success?: never;
  error?: never;
  warning: true;
  info?: never;
  transparent?: never;
};
type ButtonInfo = {
  primary?: never;
  secondary?: never;
  success?: never;
  error?: never;
  warning?: never;
  info: true;
  transparent?: never;
};
type ButtonTransparent = {
  primary?: never;
  secondary?: never;
  success?: never;
  error?: never;
  warning?: never;
  info?: true;
  transparent: true;
};

export type ButtonProps = ComponentPropsWithoutRef<'button'> &
  ButtonOmittedVariants &
  ChildrenVariants & {
    label: string;
    type?: 'submit' | 'button' | 'reset';
    round?: boolean;
    wide?: boolean;
    fullWidthMobile?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    isLoading?: boolean;
    children: ReactNode;
    className?: string;
    innerClass?: string;
  } & (
    | ButtonNoType
    | ButtonPrimary
    | ButtonSecondary
    | ButtonSuccess
    | ButtonError
    | ButtonWarning
    | ButtonInfo
    | ButtonTransparent
  );
