import { ReactNode } from "react";

export default interface ButtonProperties {
  theme?: 'primary' | 'secondary' | 'tertiary' | 'tertiary-inline' | 'icon';
  danger?: boolean;
  success?: boolean;
  contrast?: boolean;
  size?: 'large' | 'normal' | 'small';
  onClick?: () => void;
  children?: ReactNode;
  disabled?: boolean;
}
