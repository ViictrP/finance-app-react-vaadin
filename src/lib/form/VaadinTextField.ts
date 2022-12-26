import { ChangeEvent, ReactNode } from 'react';

interface VaadinTextField {
  key?: string;
  onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  'helper-text'?: string;
  theme?: 'helper-above-field';
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  'error-message'?: string;
  'clear-button-visible'?: boolean;
  pattern?: string;
  children?: ReactNode;
}

export default VaadinTextField;
