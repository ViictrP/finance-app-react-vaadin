import { ChangeEvent } from 'react';

interface VaadinTextField {
  key?: string;
  onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  'helper-text'?: string;
  theme?: 'helper-above-field';
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
}

export default VaadinTextField;
