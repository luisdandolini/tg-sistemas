function isFibonacci(num) {
  let a = 0;
  let b = 1;

  if (num === a || num === b) {
    return true;
  }

  while (b < num) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return b === num;
}

function fibSequenceUpTo(num) {
  let sequence = [0, 1];

  while (sequence[sequence.length - 1] < num) {
    let next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(next);
  }

  return sequence;
}

const numberToCheck = 13;
const sequence = fibSequenceUpTo(numberToCheck);

console.log("Sequência gerada:", sequence.join(", "));

if (isFibonacci(numberToCheck)) {
  console.log(`O número ${numberToCheck} pertence à sequência de Fibonacci!`);
} else {
  console.log(
    `O número ${numberToCheck} NÃO pertence à sequência de Fibonacci.`
  );
}
