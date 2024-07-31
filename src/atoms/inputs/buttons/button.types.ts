import { ButtonVariants, ChildrenVariants } from './button.css';
import { MouseEvent, ReactNode } from 'react';

type ButtonOmittedVariants = Omit<ButtonVariants, 'primary' | 'success' | 'error'|'warning' |'info' | 'light' | 'main' | 'dark'>

type ButtonNoType = { primary?: never; success?: never; error?: never; warning?: never; info?: never; }
type ButtonPrimary = { primary: true; success?: never; error?: never; warning?: never; info?: never; }
type ButtonSuccess = { primary?: never; success: true; error?: never; warning?: never; info?: never; };
type ButtonError = { primary?: never; success?: never; error: true; warning?: never; info?: never; };
type ButtonWarning = { primary?: never; success?: never; error?: never; warning: true; info?: never; };
type ButtonInfo = { primary?: never; success?: never; error?: never; warning?: never; info: true; };

type ButtonLight = { light: true; main?: never; dark?: never; }
type ButtonMain = { light?: never; main: true; dark?: never; }
type ButtonDark = { light?: never; main?: never; dark: true; }
type ButtonNoLightMainDark = { light?: never; main?: never; dark?: never}

export type ButtonProps = ButtonOmittedVariants &
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
  } 
  & (ButtonNoType | ButtonPrimary | ButtonSuccess | ButtonError | ButtonWarning | ButtonInfo)
  & (ButtonLight | ButtonMain | ButtonDark | ButtonNoLightMainDark)