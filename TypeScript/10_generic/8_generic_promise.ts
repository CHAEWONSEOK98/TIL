// Generic Promise

const afterTwoSeconds = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('done');
    }, 1000);
  });
};

const runner = async function () {
  const res = await afterTwoSeconds(); // res : unknown type
  console.log(res);
};

runner(); // done

//

const afterTwoSeconds2 = function (): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('done');
    }, 1000);
  });
};

const runner2 = async function () {
  const res = await afterTwoSeconds2(); // res : string type
  console.log(res);
};

runner2(); // done

//

// async 키워드가 붙는 경우 - Promise<string> type
const runner3 = async function () {
  return 'return';
};
