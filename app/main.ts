import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function runCommand() {
  rl.question('$ ', (answer: string) => {
    if (answer === 'exit 0') {
      rl.close();
    } else {
      rl.write(`${answer}: command not found\n`);
      runCommand();
    }
  });
}

runCommand();
