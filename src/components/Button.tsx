import '@vaadin/button';
import { useCallback } from 'react';
import ButtonProperties from '../lib/form/properties/ButtonProperties';

const Button = ({
  theme,
  danger,
  success,
  contrast,
  size,
  onClick,
  children,
  disabled,
}: ButtonProperties) => {
  const getTheme = (): string | typeof theme => {
    if (danger) return `${theme} error`;
    if (success) return `${theme} success`;
    if (contrast) return `${theme} contrast`;
    else return theme;
  };

  const onClickHandler = useCallback(() => {
    onClick && onClick();
  }, [onClick]);

  return (
    <vaadin-button
      theme={`${getTheme()}`}
      size={size}
      disabled={disabled}
      onClick={onClickHandler}
    >
      {children}
    </vaadin-button>
  );
};

export default Button;
