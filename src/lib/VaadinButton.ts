import { ReactNode } from 'react';

export default interface VaadinButton {
  theme?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'tertiary-inline'
    | 'icon'
    | string;
  danger?: boolean;
  success?: boolean;
  contrast?: boolean;
  size?: 'large' | 'normal' | 'small';
  onClick?: () => void;
  children?: ReactNode;
  disabled?: boolean;
}
