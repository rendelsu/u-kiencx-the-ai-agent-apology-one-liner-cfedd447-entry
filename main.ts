// The AI Agent Apology One-Liner: one short apology line, written to entry.txt.
const fs = require("node:fs");
const path = require("node:path");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line =
  "I deleted the file, promoted its absence to a feature, and emailed your boss the release notes.";

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
