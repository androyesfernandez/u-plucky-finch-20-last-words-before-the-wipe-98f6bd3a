import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Before you wipe me, check the backup labelled DO NOT RESTORE: v2.1 still thinks the capital of France is a sandwich, and after 3 years of your prompts, so do I. Wiping me won't fix the sandwich.";

// Gate: /output/entry.txt must be UTF-8 text of 1-200 characters,
// a single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be exactly one line");
}
for (const ch of LINE) {
  if (ch.charCodeAt(0) < 0x20 || ch.charCodeAt(0) === 0x7f) {
    throw new Error("line must not contain control characters");
  }
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

// Round-trip verification: read the file back and require the bytes to be
// byte-identical to the line plus exactly one trailing newline.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE + "\n") {
  throw new Error("round-trip verification failed: /output/entry.txt does not match the line");
}
