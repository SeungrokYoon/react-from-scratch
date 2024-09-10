import { ComponentPropsWithoutRef, forwardRef } from 'react';

interface MyComponentProps extends ComponentPropsWithoutRef<'button'> {
  text: string;
}

const MyComponent = forwardRef<HTMLButtonElement>(
  (props: MyComponentProps, ref) => {
    return (
      <button type="button" ref={ref} onClick={props.onClick}>
        {props.text}
      </button>
    );
  }
);

export default MyComponent;
