#!/usr/bin/env node

import { spawn } from "child_process";

// runs database migrations
await exec("npx prisma migrate deploy");
// starts the application
await exec(process.argv.slice(2).join(" "));

function exec(command) {
  const child = spawn(command, {
    shell: true,
    stdio: "inherit",
    env: { ...process.env },
  });
  return new Promise((resolve, reject) => {
    child.on("exit", (code) => {
      code === 0
        ? resolve()
        : reject(new Error(`${command} failed rc=${code}`));
    });
  });
}
