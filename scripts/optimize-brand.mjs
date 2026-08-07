/**
 * One-off brand asset optimisation.
 *
 * The supplied logo is a 424 KB PNG (1248×1248). We never redraw it —
 * but we may resize the supplied file, which preserves the artwork
 * exactly. This generates:
 *   public/brand/jeem-logo.png   512×512 (retina-crisp at 4× display size)
 *   src/app/icon.png             64×64   (favicon)
 *   src/app/apple-icon.png       180×180 (iOS touch icon)
 *
 * Run: node scripts/optimize-brand.mjs
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import sharp from "sharp";

const SRC = "logo.png";

async function main() {
  const input = await readFile(SRC);

  await mkdir("public/brand", { recursive: true });
  await mkdir("src/app", { recursive: true });

  const web = await sharp(input).resize(512, 512).png({ quality: 90, compressionLevel: 9 }).toBuffer();
  await writeFile("public/brand/jeem-logo.png", web);

  const icon = await sharp(input).resize(64, 64).png({ compressionLevel: 9 }).toBuffer();
  await writeFile("src/app/icon.png", icon);

  const apple = await sharp(input).resize(180, 180).png({ compressionLevel: 9 }).toBuffer();
  await writeFile("src/app/apple-icon.png", apple);

  console.log("brand assets optimised:");
  console.log(`  public/brand/jeem-logo.png  ${(web.length / 1024).toFixed(1)} KB`);
  console.log(`  src/app/icon.png            ${(icon.length / 1024).toFixed(1)} KB`);
  console.log(`  src/app/apple-icon.png      ${(apple.length / 1024).toFixed(1)} KB`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
