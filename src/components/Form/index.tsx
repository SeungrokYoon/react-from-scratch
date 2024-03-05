/**
 * 실습 출처: 김정환 블로그
 * https://jeonghwan-kim.github.io/dev/2020/06/08/html5-form-validation.html
 *
 */

export default function Form() {
  return (
    <form>
      <input type="text" name="email" required />
      <button type="submit">제출</button>
    </form>
  );
}
