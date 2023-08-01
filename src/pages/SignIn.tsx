import { Navigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import useForm from '@Hook/useForm';
import { useState } from 'react';
import PageLayout from '@Page/PageLayout';

export default function SingIn() {
  const { formData, setFormData } = useForm();
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <PageLayout>
      {authenticated && <Navigate replace to="/" />}
      <form>
        <div>로그인</div>
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
            signInWithEmailAndPassword(auth, formData.email, formData.password)
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                alert('로그인이 성공했습니다.');
                setAuthenticated(true);
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
    </PageLayout>
  );
}
