import { MouseEvent, ReactNode } from 'react';
import { Spinner } from '../../spinners';
import { button, ButtonVariants, childrenRecipe, ChildrenVariants } from './button.css';
import { css } from '@djeka07/utils';

export type ButtonProps = ButtonVariants &
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
  };

const Button = ({
  children,
  className,
  color,
  disabled = false,
  fullWidthMobile = true,
  innerClass,
  isLoading = false,
  onClick,
  round = false,
  outlined,
  direction = 'row',
  align = 'flex-start',
  justify = 'flex-start',
  size = 'normal',
  type = 'button',
  wide = false,
}: ButtonProps) => {
  const internalOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      disabled={disabled || isLoading}
      onClick={internalOnClick}
      className={css(
        button({
          color,
          fullWidthMobile,
          outlined,
          wide,
          round,
          disabled: disabled || isLoading,
        }),
        className,
      )}
      type={type}
    >
      {!isLoading ? (
        <span tabIndex={-1} className={css(childrenRecipe({ size, color, direction, align, justify }), innerClass)}>
          {children}
        </span>
      ) : (
        <Spinner color="light" size={size} />
      )}
    </button>
  );
};

export default Button;
