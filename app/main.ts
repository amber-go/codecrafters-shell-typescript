import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getCommandType(command: string) {
  switch (command) {
    case 'echo':
      return 'echo is a shell builtin';
    case 'exit':
      return 'exit is a shell builtin';
    case 'type':
      return 'type is a shell builtin';
    default:
      return `${command}: command not found`;
  }
}

function runCommand() {
  rl.question('$ ', (answer: string) => {
    if (answer.includes('type')) {
      rl.write(`${getCommandType(answer.split('type ')[1])}\n`);
      runCommand();
    } else if (answer.includes('echo')) {
      rl.write(`${answer.split('echo ')[1]}\n`);
      runCommand();
    } else if (answer === 'exit 0') {
      rl.close();
    } else {
      rl.write(`${answer}: command not found\n`);
      runCommand();
    }
  });
}

runCommand();
