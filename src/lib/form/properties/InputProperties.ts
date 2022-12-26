import { ReactNode } from 'react';

export default interface InputProps {
  label?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  showClear?: boolean;
  pattern?: string;
  errorMessage?: string;
  readonly?: boolean;
  disabled?: boolean;
  required?: boolean;
  key?: string;
  children?: ReactNode;
}
