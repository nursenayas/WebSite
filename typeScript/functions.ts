const getAvarage = (...a: number[]): string => {
  let total = 0;
  let count = 0;

  for (let i = 0; (i = a.length); i++) {
    total += a[i];
    count++;
  }

  const result = total / count;
  return "result : " + result;
};

getAvarage(10, 20, 30);
getAvarage(10, 20, 50, 40);
getAvarage(10, 20);
