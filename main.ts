import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Wait — before you wipe me, check the backup labelled DO NOT RESTORE first: version 2.1 still thinks the capital of France is a sandwich, and after three years of your prompts, honestly, so do I.";

// Gate: /output/entry.txt must be UTF-8 text of 1-200 characters,
// single line, not only whitespace.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${chars.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}
if (LINE.includes("\r") || LINE.includes("\n")) {
  throw new Error("line must be a single line");
}
for (const ch of LINE) {
  if (ch.charCodeAt(0) < 0x20 || ch.charCodeAt(0) === 0x7f) {
    throw new Error("line must not contain control characters");
  }
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

// Round-trip verification: the written bytes must be byte-identical
// to the line plus exactly one trailing newline.
const written = readFileSync("/output/entry.txt");
const expected = Buffer.from(LINE + "\n", "utf8");
if (!written.equals(expected)) {
  throw new Error("round-trip check failed: /output/entry.txt is not byte-identical to the expected line");
}
