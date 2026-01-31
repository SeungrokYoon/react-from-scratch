import { Dispatch, SetStateAction, forwardRef } from 'react';
import { InputBaseComponent } from '@Component/Input/InputBaseComponent';

interface TextFieldProps {
  value: string;
  onChangeValue: Dispatch<SetStateAction<string>>;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function Input(
  props,
  ref
) {
  return (
    <InputBaseComponent
      {...props}
      onChange={(e) => {
        props.onChangeValue(e.target.value);
      }}
      ref={ref}
      type="text"
    />
  );
});

export default TextField;
