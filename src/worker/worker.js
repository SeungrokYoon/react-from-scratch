onmessage = function (e) {
  const result = e.data[0] * e.data[1];
  if (Number.isNaN(result)) {
    postMessage('Please provide two valid numbers.');
  } else {
    postMessage(`Result: ${result}`);
  }
};
