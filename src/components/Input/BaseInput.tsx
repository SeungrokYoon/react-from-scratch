import { HTMLAttributes, MutableRefObject, forwardRef } from 'react';

interface BaseInputProps extends HTMLAttributes<HTMLInputElement> {}

/**
 *
 * @description 가장 기본적인 Input 태그를 JSX로 변환한 컴포넌트
 */
export const BaseInput = forwardRef(function BaseInput(
  props: BaseInputProps,
  ref: MutableRefObject<HTMLInputElement>
) {
  return <input {...props} ref={ref} />;
});
