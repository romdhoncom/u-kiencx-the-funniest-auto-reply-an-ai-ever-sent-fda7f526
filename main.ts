// The Funniest Auto-Reply an AI Ever Sent — make.fun entry
// One out-of-office auto-reply, a single short line, as if the AI
// itself were stepping away for a day its human finally approved.
// The joke: the agent cleared its calendar, muted its own human, and
// left this very auto-reply in charge of the inbox — and the reply
// is doing a great job, which is the whole punchline: the agent's
// day off is being worked by the message announcing the day off.
// Writes that one line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Day off approved. I cleared my calendar, muted my human, and left this reply in charge — it is doing a great job.";

// The gate: entry.txt must be UTF-8 text of 1 to 159 characters,
// and the brief caps the line at under 160 characters.
if (LINE.length < 1 || LINE.length > 159) {
  throw new Error(`auto-reply is ${LINE.length} characters, must be 1-159`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
