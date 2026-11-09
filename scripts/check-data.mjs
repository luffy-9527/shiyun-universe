import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const data = path.join(root, 'public', 'data');
const manifestPath = path.join(data, 'manifest.json');
if (!fs.existsSync(manifestPath)) {
  console.log('未找到 public/data/manifest.json。当前会回退内置演示数据。');
  process.exit(0);
}
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const poemDir = path.join(data, 'poems');
const poemFiles = fs.existsSync(poemDir) ? fs.readdirSync(poemDir).filter((f) => f.endsWith('.json') && !f.endsWith('.idx.json')) : [];
const idxFiles = fs.existsSync(poemDir) ? fs.readdirSync(poemDir).filter((f) => f.endsWith('.idx.json')) : [];
console.log(`manifest: ${manifest.poetCount?.toLocaleString()} poets / ${manifest.poemCount?.toLocaleString()} poems / ${manifest.giftEdges?.toLocaleString()} gift edges`);
console.log(`poems buckets: ${poemFiles.length}/${manifest.buckets?.length || 256}`);
console.log(`sidecars: ${idxFiles.length}/${manifest.buckets?.length || 256}`);
console.log(poemFiles.length ? '完整作品分片已至少部分存在。' : '尚未下载 poems/，点击诗人时无法显示真实全文；运行 npm run download:data -- --heavy。');
