const timeout = (milliseconds, promise) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('timeout exceeded'));
    }, milliseconds);
    promise.then(resolve, reject);
  });
};

export default timeout;
