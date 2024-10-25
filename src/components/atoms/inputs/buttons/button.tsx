'use client';

import { css } from '@djeka07/utils';
import { MouseEvent } from 'react';
import { Spinner } from '../../spinners';
import { button, childrenRecipe, spinner } from './button.css';
import { ButtonProps } from './button.props';

const Button = ({
  label,
  children,
  className,
  disabled = false,
  fullWidthMobile = true,
  innerClass,
  isLoading = false,
  onClick,
  round = false,
  outlined,
  direction = 'row',
  align = 'center',
  justify = 'center',
  size = 'normal',
  type = 'button',
  wide = false,
  error,
  info,
  primary = true,
  secondary,
  success,
  transparent,
  warning,
  ...rest
}: ButtonProps) => {
  const defaultPrimary = primary && (error || success || warning || info || transparent) ? false : true;
  const internalOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      aria-label={label}
      disabled={disabled || isLoading}
      onClick={internalOnClick}
      className={css(
        button({
          error,
          info,
          primary: defaultPrimary,
          success,
          secondary,
          transparent,
          warning,
          fullWidthMobile,
          outlined,
          wide,
          round,
          disabled: disabled || isLoading,
        }),
        className,
      )}
      type={type}
      {...rest}
    >
      {!isLoading ? (
        <span
          tabIndex={-1}
          className={css(
            childrenRecipe({ size, primary, secondary, error, info, success, transparent, direction, align, justify }),
            innerClass,
          )}
        >
          {children}
        </span>
      ) : (
        <Spinner
          className={spinner({
            error,
            info,
            outlined,
            secondary,
            primary: defaultPrimary,
            success,
            transparent,
            warning,
          })}
          color="white"
          size={size}
        />
      )}
    </button>
  );
};

export default Button;
