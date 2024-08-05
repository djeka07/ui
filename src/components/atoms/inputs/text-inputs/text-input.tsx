import React, { HTMLInputTypeAttribute } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FocusEvent, FormEvent, forwardRef, KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';
import mergeRefs from '../../../../helpers/refs';
import { Icon } from '../../icons';
import {
  label as classLabel,
  error as errorClass,
  errorSvg,
  fieldset,
  iconWrapper,
  input,
  legend,
  legentSpan,
  root,
  wrapper,
} from './text-input.css';
import { css } from '@djeka07/utils';
import { RadiusKeys } from '~/styles/border';

export type TextFocusEvent = FocusEvent & {
  currentTarget: HTMLInputElement;
  target: Element;
};

type InputTypes =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

export type TextInputProps = {
  name: string;
  value?: string;
  defaultValue?: string;
  full?: boolean;
  id?: string;
  autoComplete?: string;
  radius?: RadiusKeys;
  disabled?: boolean;
  readOnly?: boolean;
  backgroundColor?: 'light' | 'main' | 'dark';
  onClick?: (event: FormEvent<HTMLInputElement>) => void;
  onChange?: (event: FormEvent<HTMLInputElement>) => void;
  onBlur?: (event: FormEvent<HTMLInputElement>) => void;
  onFocus?: (event: FormEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  error?: string | undefined;
} & ({ type: 'hidden'; label?: never } | { type: InputTypes; label: string });

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
    }: TextInputProps,
    ref,
  ) => {
    const [focus, setFocus] = useState(false);
    const [inputValue, setValue] = useState(defaultValue || value);
    const localRef = useRef<HTMLInputElement>();
    const [autoFocus, setAutoFocus] = useState(false);

    const internalOnFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
      setFocus(true);
      if (onFocus) {
        onFocus(e);
      }
    };

    const internalOnChange = (e: FormEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value);
      if (onChange) {
        onChange(e);
      }
    };

    const internalOnBlur = (e: TextFocusEvent) => {
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
      } catch (error) {
        console.log(error);
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
              className={classLabel({
                errored: focus && !!error,
                float: focus || autoFocus || !!inputValue,
                focus: focus && !error,
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
            placeholder={focus ? placeholder : undefined}
            value={inputValue || ''}
            name={name}
            type={type as HTMLInputTypeAttribute}
            className={css(input({ focus, errorFocus: focus && !!error }), className)}
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
          {!!label && (
            <fieldset className={fieldset({ errored: !!error, errorFocus: focus && !!error, focus: focus, radius })}>
              <legend className={legend({ focus: focus || autoFocus || !!inputValue })}>
                <span className={legentSpan}>{label}</span>
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

export default TextInput;
