#!/usr/bin/env node

import { spawn } from "node:child_process";
import fs from "node:fs";

const env = { ...process.env };

// If running the web server then migrate existing database
if (process.argv.slice(-3).join(" ") === "pnpm run start") {
  const url = new URL(process.env.DATABASE_URL);
  const target = url.protocol === "file:" && url.pathname;

  // restore database if not present and replica exists
  const newDb = target && !fs.existsSync(target);
  // if (newDb && process.env.BUCKET_NAME) {
  //   await exec(`litestream restore -config litestream.yml -if-replica-exists ${target}`)
  // }
  if (newDb && process.env.BUCKET_NAME) {
    if (fs.existsSync("/app/litestream.yml")) {
      await exec(
        `litestream restore -config litestream.yml -if-replica-exists ${target}`,
      );
    } else {
      console.log("Skipping Litestream restore: config file not found");
    }
  }

  // prepare database
  await exec("npx prisma migrate deploy");
  await exec("npx next build --experimental-build-mode generate");
}

// launch application
// if (process.env.BUCKET_NAME) {
//   await exec(`litestream replicate -config litestream.yml -exec ${JSON.stringify(process.argv.slice(2).join(' '))}`)
// } else {
//   await exec(process.argv.slice(2).join(' '))
// }
if (process.env.BUCKET_NAME && fs.existsSync("/app/litestream.yml")) {
  await exec(
    `litestream replicate -config litestream.yml -exec ${JSON.stringify(process.argv.slice(2).join(" "))}`,
  );
} else {
  await exec(process.argv.slice(2).join(" "));
}

function exec(command) {
  const child = spawn(command, { shell: true, stdio: "inherit", env });
  return new Promise((resolve, reject) => {
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${command} failed rc=${code}`));
      }
    });
  });
}
