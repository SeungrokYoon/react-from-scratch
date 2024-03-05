/**
 * 실습 출처: 김정환 블로그
 * https://jeonghwan-kim.github.io/dev/2020/06/08/html5-form-validation.html
 *
 */

import styled from '@emotion/styled';

export default function Form() {
  return (
    <>
      <form>
        <input
          type="text"
          name="email"
          required
          minLength={4}
          maxLength={20}
          pattern={`^[a-z0-9]+@([a-z0-9]+\\.)+([a-z]{2,4})$`}
        />
        <button type="submit">제출</button>
      </form>
      <form>
        <StyledInput
          type="text"
          name="email"
          required
          minLength={4}
          maxLength={20}
          pattern={'^[a-z0-9]+@([a-z0-9]+[.])+([a-z]{2,4})$'}
        />
        <button type="submit">제출</button>
      </form>
    </>
  );
}

const StyledInput = styled.input`
  &:valid {
    border-color: yellow;
    border-width: 2px;
    background-color: palegreen;
  }
  &:invalid {
    border-color: red;
    border-width: 2px;
    background-color: lightpink;
  }
`;
