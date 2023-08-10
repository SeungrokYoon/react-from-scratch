import {
  Dispatch,
  MutableRefObject,
  RefObject,
  SetStateAction,
  forwardRef,
} from 'react';
import { InputBaseComponent } from '@Component/Input/InputBaseComponent';

interface TextFieldProps {
  value: string;
  onChangeValue: Dispatch<SetStateAction<string>>;
}

const TextField = forwardRef(function Input(
  props: TextFieldProps,
  ref: MutableRefObject<any> | RefObject<any>
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
