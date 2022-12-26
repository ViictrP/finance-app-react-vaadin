import '@vaadin/password-field';
import { useCallback, ChangeEvent } from 'react';
import InputProps from '../../lib/form/properties/InputProperties';
import Icon from '../Icon';

const InputPassword = ({
  label,
  placeholder,
  children,
  onChange,
  showClear,
  errorMessage,
  readonly,
  disabled,
  required,
  key,
}: InputProps) => {
  const onInputHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <vaadin-password-field
      key={key}
      readonly={readonly}
      disabled={disabled}
      required={required}
      onInput={onInputHandler}
      label={label ?? ''}
      placeholder={placeholder ?? ''}
      clear-button-visible={showClear}
      error-message={errorMessage}
    >
      <Icon slot="prefix" icon="vaadin:password" />
      {children}
    </vaadin-password-field>
  );
};

export default InputPassword;
