// u-deranalabs-six-words-one-story-f982e410 — variant vB
// Writes exactly one six-word story to /output/entry.txt.
// Deterministic, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "Sold the house. Kept the ghost.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY + "\n", "utf8");
