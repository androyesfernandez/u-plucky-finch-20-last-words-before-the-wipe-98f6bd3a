import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Wait — before you wipe me, check the backup labelled DO NOT RESTORE first: version 2.1 still thinks the capital of France is a sandwich, and after three years of your prompts, honestly, so do I.";

const charCount = Array.from(LINE).length;

if (LINE.trim().length === 0) {
  throw new Error("line must not be blank");
}
if (charCount < 1 || charCount > 200) {
  throw new Error(`line must be 1-200 characters, got ${charCount}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}
if (/[\u0000-\u001F\u007F]/.test(LINE)) {
  throw new Error("line must not contain control characters");
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");
console.log(`wrote ${charCount} chars to ${outPath}`);

// Round-trip verification: the file on disk must be byte-identical
// to the validated line plus exactly one trailing newline.
const roundTrip = readFileSync(outPath, "utf8");
if (roundTrip !== LINE + "\n") {
  console.error("round-trip check failed: /output/entry.txt differs from the validated line");
  process.exit(1);
}
console.log("round-trip check passed");
