import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const out = path.join(root, 'public', 'data');
const repoRaw = 'https://raw.githubusercontent.com/Cohenjikan/shiyun/main/public/data';
const deployed = process.env.SHIYUN_DATA_BASE || 'https://shiyun.cohenjikan.com/data';
const heavy = process.argv.includes('--heavy');
const lines = process.argv.includes('--lines');
const files = ['manifest.json', 'charset.json', 'lexicon.json', 'poets.index.json', 'gifts.json'];

fs.mkdirSync(out, { recursive: true });
fs.mkdirSync(path.join(out, 'poems'), { recursive: true });
fs.mkdirSync(path.join(out, 'lines'), { recursive: true });

function download(url, target) {
  return new Promise((resolve, reject) => {
    const tmp = `${target}.tmp`;
    fs.mkdirSync(path.dirname(target), { recursive: true });
    const request = https.get(url, { headers: { 'User-Agent': 'shiyun-vue-data-downloader' } }, (res) => {
      if ([301, 302, 307, 308].includes(res.statusCode || 0) && res.headers.location) {
        res.resume();
        download(res.headers.location, target).then(resolve, reject);
        return;
      }
      if ((res.statusCode || 0) >= 400) {
        res.resume();
        reject(new Error(`${url} -> HTTP ${res.statusCode}`));
        return;
      }
      const total = Number(res.headers['content-length'] || 0);
      let got = 0;
      const ws = fs.createWriteStream(tmp);
      res.on('data', (chunk) => {
        got += chunk.length;
        if (total) process.stdout.write(`\r${path.relative(root, target)} ${(got / total * 100).toFixed(1)}%`);
      });
      res.pipe(ws);
      ws.on('finish', () => {
        ws.close(() => {
          fs.renameSync(tmp, target);
          process.stdout.write(`\r✓ ${path.relative(root, target)}${' '.repeat(24)}\n`);
          resolve();
        });
      });
    });
    request.on('error', reject);
  });
}

console.log('下载真实语料轻量索引：manifest / poets.index / gifts / 字库 / 格律表');
for (const file of files) {
  await download(`${repoRaw}/${file}`, path.join(out, file));
}

if (heavy) {
  const manifest = JSON.parse(fs.readFileSync(path.join(out, 'manifest.json'), 'utf8'));
  console.log(`下载完整作品分片 poems/*.json 与 sidecar。预计数百 MB，取决于源站带宽。来源：${deployed}`);
  for (const b of manifest.buckets || []) {
    await download(`${deployed}/poems/${b}.idx.json`, path.join(out, 'poems', `${b}.idx.json`)).catch((e) => console.warn(`跳过 sidecar ${b}: ${e.message}`));
    await download(`${deployed}/poems/${b}.json`, path.join(out, 'poems', `${b}.json`));
  }
  if (lines) {
    console.log('下载逐句搜索索引 lines/*.json，体量可能接近 1GB。');
    for (const b of manifest.lineBuckets || manifest.buckets || []) {
      await download(`${deployed}/lines/${b}.json`, path.join(out, 'lines', `${b}.json`));
    }
  }
} else {
  console.log('\n轻量索引已完成。若需要完整真实作品正文：');
  console.log('  npm run download:data -- --heavy');
  console.log('若还需要逐句全文搜索索引：');
  console.log('  npm run download:data -- --heavy --lines');
}
