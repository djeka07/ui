'use client';

import { css, isEmpty, isEnter } from '@djeka07/utils';
import { AnimatePresence, m } from 'framer-motion';
import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  FocusEvent,
  forwardRef,
  KeyboardEvent,
  MouseEvent,
  useState,
} from 'react';
import { For } from '../../for';
import { Icon } from '../../icons';
import { fieldset, label as labelClass, legend, legentSpan } from '../text-inputs/text-input.css';
import {
  error as errorClass,
  errorSvg,
  input,
  InputVariants,
  inputWrapper,
  pill,
  wrapper,
  WrapperVariants,
} from './pill-input.css';

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

type TextInputProps = ComponentPropsWithoutRef<'input'> &
  WrapperVariants &
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
      ...rest
    },
    ref,
  ) => {
    const [value, setValue] = useState(initialValue);
    const [focus, setFocus] = useState(false);
    const hasPills = !isEmpty(pills);
    const internalOnFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
      setFocus(true);
      if (onFocus) {
        onFocus(e);
      }
    };

    const internalOnBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
      setFocus(false);
      if (onBlur) {
        onBlur(e);
      }
    };

    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.code === 'Backspace' && value === '' && hasPills) {
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
        {!!label && (
          <label
            className={labelClass({
              errored: focus && !!error,
              float: focus || !!value || hasPills,
              focus: focus && !error,
            })}
            htmlFor={id || name}
          >
            {label}
          </label>
        )}
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
            {...rest}
          />
          {!!label && (
            <fieldset className={fieldset({ errored: !!error, errorFocus: focus && !!error, focus: focus, radius })}>
              <legend className={legend({ focus: focus || !!value || hasPills })}>
                <span className={legentSpan}>{label}</span>
              </legend>
            </fieldset>
          )}
        </div>
        <AnimatePresence>
          {error && (
            <m.div
              initial={{ opacity: 0, height: '0px' }}
              animate={{ opacity: 1, height: '30px' }}
              exit={{ opacity: 0, height: '0px' }}
            >
              <div className={errorClass}>
                <Icon name="AlertCircle" className={errorSvg} size="small" />
                {error}
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    );
  },
);

PillInput.displayName = 'PillInput';
export default PillInput;
