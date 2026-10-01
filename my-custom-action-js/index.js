const fs = require('node:fs');
const { randomUUID } = require('node:crypto');

function getRequiredInput(name) {
  const value = process.env[`INPUT_${name.toUpperCase()}`] ?? '';
  if (!value.trim()) {
    throw new Error(`Required input '${name}' was not provided.`);
  }
  return value.trim();
}

function run() {
  const username = getRequiredInput('username');
  const greeting = getRequiredInput('greeting');
  const message = `${greeting}, ${username}!`;
  const outputPath = process.env.GITHUB_OUTPUT;

  if (!outputPath) {
    throw new Error('GITHUB_OUTPUT is not set.');
  }

  const delimiter = `ghadelimiter_${randomUUID()}`;
  if (message.includes(delimiter)) {
    throw new Error('The generated output contains the output delimiter.');
  }

  console.log(message);
  fs.appendFileSync(outputPath, `message<<${delimiter}\n${message}\n${delimiter}\n`, 'utf8');
}

try {
  run();
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
