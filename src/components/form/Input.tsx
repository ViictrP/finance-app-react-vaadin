import '@vaadin/text-field';
import { ChangeEvent, useCallback } from 'react';

interface InputProps {
  label?: string;
  onChange?: (value: string) => void;
}

const Input = ({ label, onChange }: InputProps) => {
  const onInputHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <vaadin-text-field
      onInput={onInputHandler}
      label={label ?? ''}
    ></vaadin-text-field>
  );
};

export default Input;
