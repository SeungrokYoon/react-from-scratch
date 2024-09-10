import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

export default function Home() {
  const [numState, setNumState] = useState<{
    [key: string]: string;
    error: string;
  }>({
    aNum: '',
    bNum: '',
    error: '',
  });
  const [result, setResult] = useState('');

  useEffect(() => {
    if (!window.Worker) {
      console.log("Your browser doesn't support web workers.");
      return;
    }
    const testWorker = new Worker(
      new URL('../worker/worker.js', import.meta.url)
    );
    testWorker.onmessage = (e) => {
      setResult(e.data);
    };

    function postMessageToWorker(e) {
      if (e.key === 'Enter') {
        console.log('PostMessage to Worker');
        testWorker.postMessage([numState.aNum, numState.bNum]);
      }
    }
    window.addEventListener('keydown', postMessageToWorker);

    return () => {
      testWorker.terminate();
      window.removeEventListener('keydown', postMessageToWorker);
    };
  }, [numState]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (isNaN(Number(value))) {
      setNumState((prev) => {
        const resetState = Object.keys(prev).reduce((acc, key) => {
          acc[key] = '';
          return acc;
        }, {});
        return { ...prev, ...resetState, error: 'please enter number' };
      });
      return;
    }
    setNumState((prev) => ({
      ...prev,
      [name]: value,
      error: '',
    }));
  };

  return (
    <Main>
      <section>This is Home Page</section>
      <div>
        <Link to="/about">About Page</Link>
      </div>
      <div>
        <Link to="/sign-up">Sign Up</Link>
      </div>
      <div>
        <Link to="/sign-in">Sign In</Link>
      </div>
      <div>
        <Link to="/user">User</Link>
      </div>
      <FlexCol>
        <label htmlFor="aNum">
          aNum
          <input
            type="text"
            name="aNum"
            onChange={handleInputChange}
            value={numState.aNum}
          />
        </label>
        <label htmlFor="bNum">
          bNum
          <input
            type="text"
            name="bNum"
            onChange={handleInputChange}
            value={numState.bNum}
          />
        </label>
        <span>Error: {numState.error}</span>
        <span>Add: {result}</span>
      </FlexCol>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
