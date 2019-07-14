function timeout(ms) {
  console.log('in time out func');
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  console.log('before timeout func');
  await timeout(ms);
  console.log(value);
}

asyncPrint('hello world', 2000);
