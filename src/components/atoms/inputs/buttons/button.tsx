import { css } from '@djeka07/utils';
import { MouseEvent } from 'react';
import { Spinner } from '../../spinners';
import { button, childrenRecipe, spinner } from './button.css';
import { ButtonProps } from './button.type';

const Button = ({
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
  align = 'flex-start',
  justify = 'flex-start',
  size = 'normal',
  type = 'button',
  wide = false,
  error,
  info,
  primary = true,
  success,
  transparent,
  warning,
}: ButtonProps) => {
  const defaultPrimary = primary && (error || success || warning || info || transparent) ? false : true;
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
          error,
          info,
          primary: defaultPrimary,
          success,
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
    >
      {!isLoading ? (
        <span
          tabIndex={-1}
          className={css(
            childrenRecipe({ size, primary, error, info, success, transparent, direction, align, justify }),
            innerClass,
          )}
        >
          {children}
        </span>
      ) : (
        <Spinner
          className={spinner({ error, info, outlined, primary: defaultPrimary, success, transparent, warning })}
          color="white"
          size={size}
        />
      )}
    </button>
  );
};

export default Button;
