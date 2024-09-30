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
  success?: never;
  error?: never;
  warning?: never;
  info?: never;
  transparent?: never;
};
type ButtonSuccess = {
  primary?: never;
  success: true;
  error?: never;
  warning?: never;
  info?: never;
  transparent?: never;
};
type ButtonError = {
  primary?: never;
  success?: never;
  error: true;
  warning?: never;
  info?: never;
  transparent?: never;
};
type ButtonWarning = {
  primary?: never;
  success?: never;
  error?: never;
  warning: true;
  info?: never;
  transparent?: never;
};
type ButtonInfo = { primary?: never; success?: never; error?: never; warning?: never; info: true; transparent?: never };
type ButtonTransparent = {
  primary?: never;
  success?: never;
  error?: never;
  warning?: never;
  info?: true;
  transparent: true;
};

export type ButtonProps = ComponentPropsWithoutRef<'button'> &
  ButtonOmittedVariants &
  ChildrenVariants & {
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
  } & (ButtonNoType | ButtonPrimary | ButtonSuccess | ButtonError | ButtonWarning | ButtonInfo | ButtonTransparent);
