import { IconProps } from '../../icons/icon.type';
import { ActionButtonStyleVariant } from './action-button.css';
import { ButtonProps } from './button.type';

export type ActionButtonProps = Pick<ButtonProps, 'children' | 'className' | 'disabled' | 'isLoading' | 'onClick'> &
  ActionButtonStyleVariant & {
    description?: string;
    iconName?: IconProps['name'];
  };