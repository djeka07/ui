import { ReactNode } from 'react';
import { IconNames } from '../icons/svgs';
import { MessageVariants } from './message.css';
import { IconProps } from '../icons/icon.props';

type MessageOmittedVariants = Omit<MessageVariants, 'primary' | 'success' | 'error' | 'warning' | 'info'>;

type MessageNoType = {
  primary?: never;
  secondary?: never;
  success?: never;
  error?: never;
  warning?: never;
  info?: never;
};
type MessagePrimary = {
  primary: true;
  secondary?: never;
  success?: never;
  error?: never;
  warning?: never;
  info?: never;
};
type MessageSecondary = {
  primary?: never;
  secondary: true;
  success?: never;
  error?: never;
  warning?: never;
  info?: never;
};
type MessageSuccess = {
  primary?: never;
  secondary?: never;
  success: true;
  error?: never;
  warning?: never;
  info?: never;
};
type MessageError = { primary?: never; secondary?: never; success?: never; error: true; warning?: never; info?: never };
type MessageWarning = {
  primary?: never;
  secondary?: never;
  success?: never;
  error?: never;
  warning: true;
  info?: never;
};
type MessageInfo = { primary?: never; secondary?: never; success?: never; error?: never; warning?: never; info: true };

export type MessageProps = MessageOmittedVariants & {
  icon?: IconNames;
  iconSize?: IconProps['size'];
  children: ReactNode | ReactNode[];
  direction?: 'column' | 'row';
  show?: boolean;
  wrapperClass?: string;
  margin?: { bottom?: number; top?: number; left?: number; right?: number };
  className?: string;
  innerClass?: string;
} & (MessageNoType | MessagePrimary | MessageSecondary | MessageSuccess | MessageError | MessageInfo | MessageWarning);
