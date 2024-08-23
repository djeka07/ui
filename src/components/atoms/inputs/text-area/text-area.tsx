'use client';
import { css, isBackSpace, isEnterWithoutShift, isEnterWithShift } from '@djeka07/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { FormEvent, forwardRef, KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';
import { mergeRefs } from '../../../../helpers/refs';
import { RadiusKeys } from '../../../../styles/border';
import { Icon } from '../../icons';
import {
  errorSvg,
  fieldset,
  iconWrapper,
  input,
  label as labelClass,
  legend,
  legentSpan,
  root,
  wrapper,
} from '../text-inputs/text-input.css';
import { getHeight } from './get-height';

type TextAreaProps = {
  name: string;
  id?: string;
  defaultValue?: string;
  value?: string;
  maxHeight?: number;
  readOnly?: boolean;
  disabled?: boolean;
  full?: boolean;
  autoComplete?: string;
  radius?: RadiusKeys;
  onChange?: (event: FormEvent) => void;
  onFocus?: (event: FormEvent) => void;
  onBlur?: (event: FormEvent) => void;
  onEnterWithoutShift?: (event: KeyboardEvent) => void;
  label?: string;
  placeholder?: string;
  className?: string;
  error?: string;
  backgroundColor?: 'light' | 'main' | 'dark';
};

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      name,
      autoComplete,
      className,
      readOnly,
      error,
      id,
      label,
      maxHeight = 100,
      onFocus,
      onBlur,
      full = true,
      onChange,
      onEnterWithoutShift,
      placeholder,
      disabled,
      radius,
      value,
      defaultValue,
      backgroundColor = 'main',
    },
    ref,
  ) => {
    const errorRef = useRef<HTMLDivElement>(null);
    const localRef = useRef<HTMLTextAreaElement>(null);
    const [height, setHeight] = useState<number>(42);
    const [focus, setFocus] = useState(false);
    const [autoFocus, setAutoFocus] = useState(false);
    const [inputValue, setValue] = useState(defaultValue || value);

    const onKeyDown = (event: KeyboardEvent) => {
      if (isEnterWithoutShift(event) && onEnterWithoutShift) {
        event.preventDefault();
        onEnterWithoutShift(event);
        setTimeout(() => {
          setHeight(42);
          if (localRef?.current) {
            localRef.current.rows = 1;
          }
        }, 0);
      } else if (isBackSpace(event)) {
        const lastRow = localRef?.current?.value.split('\n')?.at(-1);
        if (!lastRow) {
          setHeight((prev) => (prev <= 42 || prev - 14 <= 42 ? 42 : prev - 14));
        }
      } else if (isEnterWithShift(event)) {
        if (localRef?.current) {
          setHeight(42);
          localRef.current.rows = localRef.current.rows + 1;
          const height = getHeight(localRef?.current?.scrollHeight as number, maxHeight as number);
          setHeight(height);
        }
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

    const internalOnChange = (event: FormEvent<HTMLTextAreaElement>) => {
      setValue(event.currentTarget.value);

      if (onChange) {
        onChange(event);
      }
    };

    const internalOnFocus = (e: FormEvent<HTMLTextAreaElement>) => {
      setFocus(true);
      onFocus?.(e);
    };

    const internalOnBlur = (e: FormEvent<HTMLTextAreaElement>) => {
      setFocus(false);
      onBlur?.(e);
    };

    return (
      <div className={root({ width: full ? 'full' : undefined, opacicy: !!readOnly || !!disabled })}>
        <div className={wrapper({ width: full ? 'full' : undefined })}>
          {!!label && (
            <label
              className={labelClass({
                errored: focus && !!error,
                float: focus || autoFocus || !!inputValue,
                focus: focus && !error,
              })}
              htmlFor={id || name}
            >
              {label}
            </label>
          )}
          <textarea
            ref={mergeRefs(ref, localRef)}
            rows={1}
            value={inputValue || ''}
            style={{ height: `${height}px` }}
            autoComplete={autoComplete}
            id={id || name}
            disabled={disabled}
            placeholder={placeholder}
            onKeyDown={onKeyDown}
            onFocus={internalOnFocus}
            onBlur={internalOnBlur}
            onChange={internalOnChange}
            name={name}
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
              initial={{ opacity: 0, height: '0px' }}
              animate={{ opacity: 1, height: `${errorRef?.current?.clientHeight}px` }}
              exit={{ opacity: 0, height: '0px' }}
            >
              <div className={error} ref={errorRef}>
                <Icon name="AlertCircle" className={errorSvg} size="small" />
                {error}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  },
);
TextArea.displayName = 'TextArea';
export default TextArea;
