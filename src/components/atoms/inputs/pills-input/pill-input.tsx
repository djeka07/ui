'use client';

import { ChangeEvent, KeyboardEvent, useState, FocusEvent, MouseEvent, forwardRef } from 'react';
import { Icon } from '../../icons';
import { AnimatePresence, motion } from 'framer-motion';
import {
  error as errorClass,
  errorSvg,
  input,
  InputVariants,
  inputWrapper,
  label as labelClass,
  pill,
  wrapper,
  WrapperVariants,
} from './pill-input.css';
import { css, isEmpty, isEnter } from '@djeka07/utils';
import { For } from '../../for';

export type TextEvent = InputEvent & {
  currentTarget: HTMLInputElement;
  target: Element;
};

export type TextClickEvent = MouseEvent & {
  currentTarget: HTMLInputElement;
  target: Element;
};

export type TextFocusEvent = FocusEvent & {
  currentTarget: HTMLInputElement;
  target: Element;
};

type Pill = {
  id: string;
  label: string;
};

type TextInputProps = WrapperVariants &
  InputVariants & {
    pills?: Pill[];
    type: string;
    name: string;
    value?: string;
    id?: string;
    autoComplete?: string;
    onClick?: (event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement, Element>) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement, Element>) => void;
    onDeletePill?: (id: string) => void;
    label?: string;
    placeholder?: string;
    wrapperClass?: string;
    className?: string;
    error?: string;
  };

const PillInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      name,
      type,
      autoComplete,
      className,
      error,
      id,
      label,
      onBlur,
      onChange,
      onClick,
      onDeletePill,
      onFocus,
      pills,
      placeholder,
      radius,
      value: initialValue,
      width,
      wrapperClass,
    },
    ref,
  ) => {
    const [value, setValue] = useState(initialValue);

    const internalOnFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
      if (onFocus) {
        onFocus(e);
      }
    };

    const internalOnBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
      if (onBlur) {
        onBlur(e);
      }
    };

    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.code === 'Backspace' && value === '' && !isEmpty(pills)) {
        onDeletePill?.(pills![pills!.length - 1]?.id);
      }
    };

    const internalOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      setValue(value);
      onChange?.(e);
    };

    const internalKeyPress = (e: KeyboardEvent, id: string) => {
      if (isEnter(e)) {
        onDeletePill?.(id);
      }
    };

    return (
      <div className={css(wrapperClass, wrapper({ width }))}>
        {!!label && <span className={labelClass}>{label}</span>}
        <div className={inputWrapper({ radius })}>
          <For each={pills} keyed="id">
            {(p) => (
              <span
                role="button"
                onKeyDown={(e) => internalKeyPress(e, p.id)}
                onClick={() => onDeletePill?.(p.id)}
                className={pill}
                tabIndex={0}
              >
                {p.label} <Icon size="small" name="Close" />
              </span>
            )}
          </For>
          <input
            ref={ref}
            onClick={(e) => onClick?.(e)}
            onFocus={internalOnFocus}
            onBlur={internalOnBlur}
            onKeyDown={onKeyPress}
            autoComplete={autoComplete}
            id={id || name}
            placeholder={placeholder}
            value={value || ''}
            onChange={internalOnChange}
            name={name}
            type={type}
            className={css(input, className)}
          />
        </div>
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, height: '0px' }}
              animate={{ opacity: 1, height: '30px' }}
              exit={{ opacity: 0, height: '0px' }}
            >
              <div className={errorClass}>
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

PillInput.displayName = 'PillInput';
export default PillInput;
