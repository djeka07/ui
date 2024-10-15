'use client';

import { css } from '@djeka07/utils';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChangeEvent,
  FocusEvent,
  FormEvent,
  forwardRef,
  HTMLInputTypeAttribute,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { mergeRefs } from '../../../../helpers/refs';
import { Icon } from '../../icons';
import {
  error as errorClass,
  errorSvg,
  fieldset,
  iconWrapper,
  input,
  label as labelClass,
  legend,
  legentSpan,
  root,
  wrapper,
} from './text-input.css';
import { TextInputProps } from './text-input.type';

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      name,
      type,
      autoComplete,
      className,
      error,
      full = true,
      id,
      label,
      size = 'normal',
      onBlur,
      readOnly,
      disabled,
      onChange,
      onClick,
      onFocus,
      onKeyDown,
      placeholder,
      radius = 'small',
      backgroundColor = 'main',
      value,
      defaultValue,
      ...rest
    }: TextInputProps,
    ref,
  ) => {
    const [focus, setFocus] = useState(false);
    const [inputValue, setValue] = useState(defaultValue || value);
    const localRef = useRef<HTMLInputElement>(null);
    const [autoFocus, setAutoFocus] = useState(false);

    const internalOnFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
      setFocus(true);
      if (onFocus) {
        onFocus(e);
      }
    };

    const internalOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value);
      if (onChange) {
        onChange(e);
      }
    };

    const internalOnBlur = (e: FormEvent<HTMLInputElement>) => {
      setFocus(false);
      if (onBlur) {
        onBlur(e);
      }
    };

    const checkIfAutoFocus = useCallback(() => {
      try {
        if (localRef?.current?.matches(':autofill')) {
          setAutoFocus(true);
        }
      } catch {
        setAutoFocus(false);
      }
    }, [localRef]);

    useEffect(() => {
      checkIfAutoFocus();
    }, [checkIfAutoFocus]);

    return (
      <div className={root({ width: full ? 'full' : undefined, opacicy: !!readOnly || !!disabled })}>
        <div className={wrapper({ width: full ? 'full' : undefined })}>
          {!!label && (
            <label
              className={labelClass({
                errored: focus && !!error,
                float: focus || autoFocus || !!inputValue,
                focus: focus && !error,
                size,
              })}
              htmlFor={id || name}
            >
              {label}
            </label>
          )}
          <input
            ref={mergeRefs(ref, localRef)}
            disabled={disabled}
            onClick={(e) => onClick?.(e)}
            onChange={internalOnChange}
            onFocus={internalOnFocus}
            onBlur={internalOnBlur}
            readOnly={readOnly}
            onKeyDown={(e) => onKeyDown?.(e)}
            autoComplete={autoComplete}
            id={id || name}
            placeholder={focus || !label ? placeholder : undefined}
            value={inputValue || ''}
            name={name}
            type={type as HTMLInputTypeAttribute}
            className={css(input({ focus, errorFocus: focus && !!error, size }), className)}
            {...rest}
          />
          {!!readOnly ||
            (!!disabled && (
              <Icon
                name="Slash"
                wrapperClass={iconWrapper}
                boxShadow={false}
                padding="medium"
                color="input"
                background={backgroundColor}
                size="normal"
              />
            ))}
          {type !== 'hidden' && (
            <fieldset className={fieldset({ errored: !!error, errorFocus: focus && !!error, focus: focus, radius })}>
              <legend className={legend({ focus: focus || autoFocus || !!inputValue })}>
                {!!label && <span className={legentSpan}>{label}</span>}
              </legend>
            </fieldset>
          )}
        </div>
        <AnimatePresence>
          {!!error && (
            <motion.div
              initial={{ opacity: 0, height: '0px', overflow: 'hidden' }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: '0px', overflow: 'hidden' }}
            >
              <div className={errorClass({ radius })}>
                <Icon className={errorSvg} name="AlertCircle" color="error-dark" size="small" />
                {error}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';
export default TextInput;
