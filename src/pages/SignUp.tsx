import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import useForm from '@Hook/useForm';
import PageLayout from '@Page/PageLayout';
import Form from '@Component/Form';

export default function SignUp() {
  const { formData, setFormData } = useForm();
  return (
    <PageLayout>
      <form>
        <div>회원가입</div>
        <label>
          email
          <input
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData.setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          password
          <input
            type="password"
            value={formData.password}
            onChange={(e) => {
              setFormData.setPassword(e.target.value);
            }}
          />
        </label>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            const auth = getAuth();
            createUserWithEmailAndPassword(
              auth,
              formData.email,
              formData.password
            )
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                alert('회원가입이 완료되었습니다');
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode + errorMessage);
              });
          }}
        >
          submit
        </button>
      </form>
      <Form />
    </PageLayout>
  );
}
