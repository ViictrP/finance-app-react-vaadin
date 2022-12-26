import '@vaadin/email-field';
import InputProps from '../../lib/form/properties/InputProperties';
import { ChangeEvent, useCallback } from 'react';
import Icon from '../Icon';

const InputEmail = ({
  label,
  placeholder,
  children,
  onChange,
  showClear,
  pattern,
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
    <vaadin-email-field
      key={key}
      readonly={readonly}
      disabled={disabled}
      required={required}
      onInput={onInputHandler}
      label={label ?? ''}
      placeholder={placeholder ?? 'username@example.com'}
      clear-button-visible={showClear}
      pattern="a@a.com"
      error-message={errorMessage}
    >
      <Icon slot="prefix" icon="vaadin:at" />
      {children}
    </vaadin-email-field>
  );
};

export default InputEmail;
