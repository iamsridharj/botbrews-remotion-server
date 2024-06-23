const { exec } = require('child_process');
const { promisify } = require('util');
const path = require('path');

const execPromise = promisify(exec);

async function runCommand(command) {
  try {
    const { stdout, stderr } = await execPromise(command, { maxBuffer: 1024 * 1024 * 20 }); // Set maxBuffer to 20MB
    if (stderr) {
      console.error(`stderr: ${stderr}`);
    }
    console.log(`stdout: ${stdout}`);
  } catch (error) {
    console.error(`Error executing command: ${error.message}`);
  }
}

module.exports = runCommand;
