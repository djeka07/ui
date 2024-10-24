import { IconProps } from '../../icons/icon.props';
import { ActionButtonStyleVariant } from './action-button.css';
import { ButtonProps } from './button.props';

export type ActionButtonProps = Pick<
  ButtonProps,
  'children' | 'className' | 'disabled' | 'isLoading' | 'onClick' | 'label'
> &
  ActionButtonStyleVariant & {
    description?: string;
    iconName?: IconProps['name'];
  };
