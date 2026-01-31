import { forwardRef } from 'react';

// Div 컴포넌트: ref를 외부에서 전달받을 수 있음
export const DivWithRef = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  return <div {...props} ref={ref} contentEditable={true} />;
});

DivWithRef.displayName = 'DivWithRef';

// Input 컴포넌트: ref를 외부에서 전달받을 수 있음
export const InputWithRef = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return <input {...props} ref={ref} />;
});

InputWithRef.displayName = 'InputWithRef';
