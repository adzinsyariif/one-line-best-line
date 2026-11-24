import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Best Line — the whole entry rides on this single sentence.
// Candidates I weighed:
//   A. "My smoke alarm and I have an understanding: it screams, I wave a towel, and we both pretend dinner was intentional."
//   B. "The group chat went silent the moment I typed 'guys, quick question' — nothing unites old friends like collective dread."
//   C. "I finally organized my life into folders, then realized the folder named 'Later' now holds 94% of my entire existence."
// A wins: it opens mid-scene with a domestic object as a character, stays one
// sentence, and the punch ("pretend the smoke was part of the recipe") reframes
// the whole scene instead of just ending it. B is strong but "group chat dread"
// is a well-worn trope; C is clever rather than funny.
const LINE =
  "My smoke alarm and I have an understanding: it screams, I wave a dish towel, and we both pretend the smoke was part of the recipe.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
