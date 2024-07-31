import { AnimatePresence, motion } from 'framer-motion';
import { ChangeEvent, FormEvent, KeyboardEvent, forwardRef, useEffect, useState } from 'react';
import { Icon } from '../../icons';
import { InputVariants, childrenClass, errorClass, errorSvg, input, labelClass, root, wrapper } from './checkbox.css';
import { css, isSpace } from '@djeka07/utils';

export type CheckboxProps = InputVariants & {
  value?: string;
  name?: string;
  label?: string;
  defaultChecked?: boolean;
  radius?: number;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FormEvent) => void;
  children?: JSX.Element;
  className?: string;
  error?: string;
  noErrorLabel?: boolean;
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      children,
      className,
      defaultChecked = false,
      disabled,
      error,
      label,
      name,
      noErrorLabel,
      onChange,
      onBlur,
      radius,
      value,
    },
    ref,
  ) => {
    const [isChecked, setIsChecked] = useState(defaultChecked || false);

    useEffect(() => {
      setIsChecked(defaultChecked);
    }, [defaultChecked]);

    const toggleCheckboxChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setIsChecked((prev) => !prev);
      if (onChange) {
        onChange(e);
      }
    };

    const onKeyPress = (e: KeyboardEvent<HTMLSpanElement>) => {
      if (isSpace(e)) {
        setIsChecked((prev) => !prev);
      }
    };
    return (
      <div className={root}>
        <div className={css(className, wrapper({ disabled }))} id={label}>
          <input
            ref={ref}
            name={name}
            className={input({ error: !!error, radius: radius })}
            type="checkbox"
            value={value}
            checked={isChecked}
            onChange={toggleCheckboxChange}
            disabled={disabled}
            onBlur={onBlur}
          />
          {label && (
            <span
              tabIndex={0}
              role="checkbox"
              aria-checked={isChecked}
              onKeyDown={onKeyPress}
              className={labelClass}
              onClick={() => setIsChecked((prev) => !prev)}
            >
              {label}
            </span>
          )}
          {children && <span className={childrenClass({ paddingLeft: !label })}>{children}</span>}
          {!noErrorLabel && (
            <AnimatePresence>
              {!!error && (
                <motion.div
                  initial={{ opacity: 0, height: '0px' }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: '0px' }}
                >
                  <div className={errorClass({ radius })}>
                    <Icon name="AlertCircle" className={errorSvg} size="small" />
                    {error}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>
    );
  },
);

export default Checkbox;
