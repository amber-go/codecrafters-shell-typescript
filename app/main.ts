import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('$ ', (answer: string) => {
  if (answer === 'invalid_command') {
    console.log(`${answer}: command not found`);
  } else {
    console.log(answer);
  }

  rl.close();
});
