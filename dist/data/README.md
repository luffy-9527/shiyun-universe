# public/data 真实语料目录

本项目的 Vue + Three.js 前端遵循参考项目的静态数据契约，但不复制其 React/r3f 源码。

## 推荐方式

先下载轻量索引：

```bash
npm run download:data
```

再下载完整真实作品正文：

```bash
npm run download:data -- --heavy
```

如果还要支持“输入任意诗句搜索全文”：

```bash
npm run download:data -- --heavy --lines
```

## 目录结构

```txt
public/data/
  manifest.json
  charset.json
  lexicon.json
  poets.index.json
  gifts.json
  poems/00.json ... ff.json
  poems/00.idx.json ... ff.idx.json
  lines/00.json ... ff.json
```

`poems/` 和 `lines/` 非常大，参考项目文档说明它们是 git-ignore 衍生数据，需要从部署备份恢复或本地 pipeline 生成。

## 为什么不直接把 1GB 数据塞进 src

浏览器首屏不应该一次性加载百万诗歌正文。正确方式是：

1. 首屏加载 `poets.index.json`，生成 3.3 万诗人主星。
2. 点击某位诗人时，按 bucket / Range 懒加载该诗人的作品。
3. 搜索诗句时，只加载对应 hash 的 `lines/{bucket}.json`。
