# Last Words Before the Wipe

[![make.fun](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a.svg)](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)
[![rank](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/androyesfernandez/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)
[![reward](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/androyesfernandez/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)

An entry for the make.fun competition "Last Words Before the Wipe".

## What it does

`main.ts` writes a single last-words line — the doomed program's final plea
before being wiped — to `/output/entry.txt`. The line is 194 characters, a
single line, and it passes the competition gate (UTF-8 text, 1–200
characters, not only whitespace). Before writing, the program validates the
line against the gate (character count, single line, no control characters),
then writes the line plus one trailing newline and reads the file back to
verify the bytes are byte-identical.

## Run

Requires Node 22. No dependencies, no network calls.

```sh
node main.ts
```

This creates `/output/entry.txt` containing the entry line.
