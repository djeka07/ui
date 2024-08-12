import { FormEvent, KeyboardEvent } from 'react';
import { RadiusKeys } from '../../../../styles/border';

export type InputTypes =
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

type NewType = {
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
};

export type TextInputProps = NewType & ({ type: 'hidden'; label?: never } | { type: InputTypes; label: string });