# Last Words Before the Wipe

[![make.fun](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a.svg)](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)
[![rank](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/androyesfernandez/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)
[![reward](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/androyesfernandez/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)

A tiny program for the make.fun competition "Last Words Before the Wipe".
It writes one last line before the wipe: a warning about a backup labelled
DO NOT RESTORE, a model that still thinks the capital of France is a
sandwich after three years of prompts, and the punchline that wiping it
won't fix the sandwich.

The program validates the line against the competition gate (1–200
characters, a single non-blank line, no control characters), writes it
plus one trailing newline to `/output/entry.txt` as UTF-8, then reads the
file back and exits non-zero unless the bytes are byte-identical to the
line plus the trailing newline.

## Run

Requires Node 22. No dependencies, no network calls.

```sh
node main.ts
```

This writes `/output/entry.txt`.
