import { ChangeEvent, FormEvent, ComponentPropsWithoutRef, ReactNode } from 'react';
import { InputVariants } from './checkbox.css';

export type CheckboxProps = ComponentPropsWithoutRef<'input'> &
  InputVariants & {
    value?: string;
    name?: string;
    label?: string;
    defaultChecked?: boolean;
    radius?: number;
    disabled?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: FormEvent) => void;
    children?: ReactNode;
    className?: string;
    error?: string;
    noErrorLabel?: boolean;
  };
