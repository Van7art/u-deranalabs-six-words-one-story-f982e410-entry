// u-deranalabs-six-words-one-story-f982e410 — variant vB
// Writes exactly one six-word story to /output/entry.txt.
// Deterministic, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";

const FIRST_SENTENCE = "Sold the house.";
const SECOND_SENTENCE = "Kept the ghost.";

// The turn: the sale was supposed to leave the past behind, but the
// narrator stayed haunted — the ghost was the one thing not sold.
const STORY = FIRST_SENTENCE + " " + SECOND_SENTENCE;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY + "\n", "utf8");
