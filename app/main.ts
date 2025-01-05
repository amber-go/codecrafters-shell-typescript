import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('$ ', (answer: string) => {
  console.log(`${answer}: command not found`);
});
