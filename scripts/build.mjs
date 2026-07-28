import { mkdirSync, copyFileSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "css", "ecco.css");
const distDir = join(root, "dist");
const docsDir = join(root, "docs");
const out = join(distDir, "ecco.min.css");

mkdirSync(distDir, { recursive: true });
mkdirSync(docsDir, { recursive: true });
copyFileSync(src, join(distDir, "ecco.css"));

const minify = spawnSync(
  "npx --no-install lightningcss --minify css/ecco.css -o dist/ecco.min.css",
  {
    cwd: root,
    encoding: "utf8",
    shell: true,
    windowsHide: true,
  }
);

if (minify.status !== 0) {
  console.error(minify.stderr || minify.stdout || "Minify failed");
  process.exit(minify.status ?? 1);
}

const raw = readFileSync(src, "utf8");
const min = readFileSync(out, "utf8");
const banner = `/*! Ecco CSS v0.1.0 | MIT | https://github.com/arpalanca/eccocss */\n`;
writeFileSync(out, banner + min);

// GitHub Pages serves /docs as site root, so ship CSS beside index.html
copyFileSync(join(distDir, "ecco.css"), join(docsDir, "ecco.css"));
copyFileSync(out, join(docsDir, "ecco.min.css"));
writeFileSync(join(docsDir, ".nojekyll"), "");

console.log(
  `Built dist/ + docs/ CSS (${raw.length} → ${banner.length + min.length} bytes)`
);
