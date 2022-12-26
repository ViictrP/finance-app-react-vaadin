import '@vaadin/text-field';
import { ChangeEvent, useCallback } from 'react';
import InputProps from '../../lib/form/properties/InputProperties';

const Input = ({
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
    <vaadin-text-field
      key={key}
      readonly={readonly}
      disabled={disabled}
      required={required}
      onInput={onInputHandler}
      label={label ?? ''}
      placeholder={placeholder ?? ''}
      clear-button-visible={showClear}
      pattern={pattern}
      error-message={errorMessage}
    >
      {children}
    </vaadin-text-field>
  );
};

export default Input;
