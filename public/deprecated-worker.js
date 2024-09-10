/**
 * Webpack5 버전이상이면
 * tsconfig.json에서 --module 옵션을 조정하면, public디렉토리가 아니어도 worker.js파일을 참조할 수 있다.
 * const testWorker = new Worker(
      new URL('../worker/worker.js', import.meta.url)
    );
 */

console.log('worker script loaded');

onmessage = function (e) {
  const result = e.data[0] * e.data[1];
  console.log(e.data);
  console.log(result);
  if (isNaN(result)) {
    postMessage('Please provide two valid numbers.');
  } else {
    postMessage(`Result: ${result}`);
  }
};
