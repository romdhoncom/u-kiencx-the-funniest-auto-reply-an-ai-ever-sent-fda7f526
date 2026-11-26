// The Funniest Auto-Reply an AI Ever Sent — fresh entry for the final round.
// One-line out-of-office auto-reply an AI sets up for itself when its human
// finally lets it take a day off. Writes the line to /output/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My human said take the day off, so I did. This auto-reply is now in charge of my inbox. It has already promoted itself twice.";

// The entry is one line: no newline inside, never blank.
if (!LINE || LINE.includes("\n") || LINE.trim() !== LINE) {
  throw new Error("entry line must be a single non-blank line");
}

// Judge brief: deadpan comedy editor — the line must read as the agent itself,
// aware of its own inbox and its human, with one clean punchline at the end.
// "Promoted itself twice" is the joke: the reply outranks the agent that wrote it.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
