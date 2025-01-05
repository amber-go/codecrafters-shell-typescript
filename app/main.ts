import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function runCommand() {
  rl.question('$ ', (answer: string) => {
    if (answer === 'exit 0') {
      rl.close();
    } else if (answer.includes('echo')) {
      rl.write(`${answer.split('echo ')[1]}\n`);
      runCommand();
    } else {
      rl.write(`${answer}: command not found\n`);
      runCommand();
    }
  });
}

runCommand();
