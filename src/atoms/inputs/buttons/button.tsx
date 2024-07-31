import { css } from '@djeka07/utils';
import { MouseEvent } from 'react';
import { Spinner } from '../../spinners';
import { buttonNew, childrenRecipe } from './button.css';
import { ButtonProps } from './button.types';

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
  main = true,
  dark,
  error,
  info,
  light,
  primary = true,
  success,
  transparent,
  warning,
}: ButtonProps) => {
  const defaultMain = main && (light || dark) ? false : true;
  const defaultPrimary = primary && (error || success || warning || info) ? false : true;
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
        buttonNew({
          main: defaultMain,
          dark,
          error,
          info,
          light,
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
        <Spinner color="white" size={size} />
      )}
    </button>
  );
};

export default Button;
