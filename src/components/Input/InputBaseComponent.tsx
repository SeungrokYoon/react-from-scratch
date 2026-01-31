import { InputHTMLAttributes, forwardRef } from 'react';

type InputBaseComponentProps = InputHTMLAttributes<HTMLInputElement>;

/**
 *
 * @description 가장 기본적인 Input 태그를 JSX로 변환한 컴포넌트
 */
export const InputBaseComponent = forwardRef<
  HTMLInputElement,
  InputBaseComponentProps
>(function BaseInput(props, ref) {
  return <input {...props} ref={ref} />;
});
