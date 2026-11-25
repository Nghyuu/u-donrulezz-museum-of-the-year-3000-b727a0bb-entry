import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
const label =
  "Alarm clock. A bedside box that screamed at its owner each morning until begged, nine times, for five more minutes.";

const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, label + "\n", "utf8");
chmodSync(entryPath, 0o644);
