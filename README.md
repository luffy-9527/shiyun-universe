# 诗云 · 中国诗歌宇宙 Vue 3 版 v9

把中国全历史的诗歌放进一片可以漫游的三维星系：每位诗人是一颗星，每首诗都有坐标，点击作者查看其全部作品，搜索诗句可飞向真实作者星系。

项目参考 `Cohenjikan/shiyun` 的产品方向与数据契约思想，前端为 Vue 3 + TypeScript + 原生 Three.js 的原创实现，不复制 React / r3f 源码。

## v9 流畅度优化

- 新增 `AdaptiveRenderBudget`：持续低帧率时自动降低 DPR、Bloom 分辨率和背景绘制量，帧率恢复后逐级回升，不改变用户选择的画质模式。
- 高画质 Bloom 改为低分辨率离屏合成；严重掉帧时自动关闭 Bloom，保留星体 Shader 自发光。
- 高分屏 DPR 分档限制，2K / 4K 屏幕不再按设备原始倍率暴力渲染。
- 背景银河由约 7.2 万粒子压缩为约 4.3 万粒子，并支持 GPU `drawRange` 动态降载。
- 星云纹理由 1024² 降为 512² / 384²；流畅模式仅保留一层星云，改用普通透明混合降低过度叠加。
- 背景星点改为解析式圆形 Shader，取消高频纹理采样，减少显存带宽与方形像素感。
- 关系网络由最多 9000 条、每条 28–36 段，调整为合批后的分档边数与 10–22 段，并支持动态 drawRange。
- 作者作品“一次性诗句星网”采样上限降低，仍保留关联视觉，但避免千首作品同时生成数千条透明线。
- Hover Raycaster 从每次鼠标事件执行改为约 20Hz 节流，并用 Map 替代对 3 万诗人的线性查找。
- WASD 漫游改为基于 delta time，避免低帧率时速度异常，并消除动画循环中的临时 Vector3 分配。
- 浏览器标签页隐藏时暂停动画循环。
- 移除大面积实时 `backdrop-filter` 与全屏 `mix-blend-mode`，改用静态渐变模拟玻璃效果，显著降低 UI 与 WebGL 的重复合成成本。
- 窗口缩放采用 120ms 防抖，避免拖动窗口时连续重建渲染目标。

## 启动

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## 接入真实数据

开发时可使用 Vite 代理预览远程数据，也可以把真实数据落地到 `public/data`：

```bash
npm run download:data
npm run download:data -- --heavy
npm run doctor:data
```

完整作品正文和逐句索引体量较大，建议本地开发先使用诗人索引，再按作者懒加载作品。
# shiyun-universe
