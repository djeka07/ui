'use client';

import { useDidUpdate } from '@djeka07/hooks';
import { css, isObjectEmpty } from '@djeka07/utils';
import { AnimatePresence, m } from 'framer-motion';
import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, JSX, useState } from 'react';
import { RadiusKeys } from '../../../../styles/border';
import { Icon } from '../../icons';
import {
  error as errorClass,
  errorSvg,
  fieldset,
  label as labelClass,
  legend,
  legentSpan,
  root,
  wrapper,
} from '../text-inputs/text-input.css';
import { dropDown, iconWrapper } from './drop-down.css';

type SelectEventProps = {
  value: string;
  isDefault: boolean;
};

export type SelectProps = Omit<ComponentPropsWithoutRef<'select'>, 'size'> & {
  id?: string;
  initialValue?: string | number;
  name: string;
  radius?: RadiusKeys;
  size?: 'small' | 'normal';
  defaultItem?: { name: string; value: string };
  items: {
    name: string;
    value: string;
    isDisabled?: boolean;
    isSelected?: boolean;
  }[];
  onChange?: (props: SelectEventProps) => void;
  onBlur?: (props: SelectEventProps) => void;
  error?: string;
  label?: string;
  full?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
  selectClassName?: string;
  ariaLabel?: string;
  tabIndex?: number;
};

const DropDown = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      id,
      name,
      defaultItem,
      items,
      size = 'normal',
      onChange,
      onBlur,
      error,
      label,
      disabled,
      className,
      selectClassName,
      ariaLabel,
      tabIndex,
      full = true,
      readOnly,
      radius,
      ...rest
    }: SelectProps,
    ref,
  ): JSX.Element => {
    const selectedItem = items?.find((val) => val.isSelected);
    const [focus, setFocus] = useState(false);

    const [selectedValue, setSelectedValue] = useState(
      !isObjectEmpty(selectedItem) ? selectedItem?.value : defaultItem?.value,
    );

    useDidUpdate(() => {
      if (selectedItem?.value !== selectedValue) {
        const value = selectedItem?.value || defaultItem?.value;
        setSelectedValue(value);
      }
    }, [selectedItem?.isSelected, selectedItem?.value]);

    const internalOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
      const { value } = event.target;
      setSelectedValue(value);
      setFocus(false);
      if (onChange) {
        onChange({ value, isDefault: value === '' });
      }
    };

    const internalOnBlur = (event: ChangeEvent<HTMLSelectElement>) => {
      if (onBlur) {
        const { value } = event.target;
        onBlur({ value, isDefault: value === '' });
      }
      setFocus(false);
    };

    const internalSetFocus = () => {
      setFocus(true);
    };

    return (
      <div className={css(root({ width: full ? 'full' : undefined, opacicy: !!readOnly || !!disabled }), className)}>
        <div className={wrapper({ width: full ? 'full' : undefined })}>
          {label && (
            <label
              className={labelClass({
                errored: focus && !!error,
                float: focus || !!selectedValue,
                focus: focus && !error,
                size,
              })}
              htmlFor={id || name}
            >
              {label}
            </label>
          )}
          <div className={iconWrapper}>
            <Icon name="Down" color="input" />
          </div>
          <select
            ref={ref}
            name={name}
            id={id}
            value={selectedValue}
            className={css(dropDown({ size }), selectClassName)}
            disabled={disabled}
            onChange={internalOnChange}
            onBlur={internalOnBlur}
            onFocus={internalSetFocus}
            aria-label={ariaLabel}
            tabIndex={tabIndex}
            {...rest}
          >
            {!!defaultItem && (
              <option key={'default'} value={defaultItem.value}>
                {defaultItem.name}
              </option>
            )}
            {items?.map((item) => (
              <option key={`${item.name}-${item.value}`} disabled={item.isDisabled} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>

          <fieldset className={fieldset({ errored: !!error, errorFocus: focus && !!error, focus: focus, radius })}>
            <legend className={legend({ focus: focus || !!selectedValue })}>
              {!!label && <span className={legentSpan}>{label}</span>}
            </legend>
          </fieldset>
          <AnimatePresence>
            {!!error && (
              <m.div
                initial={{ opacity: 0, height: '0px', overflow: 'hidden' }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: '0px', overflow: 'hidden' }}
              >
                <div className={errorClass({ radius })}>
                  <Icon className={errorSvg} name="AlertCircle" color="error-dark" size="small" />
                  {error}
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  },
);

DropDown.displayName = 'DropDown';
export default DropDown;
