import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/fish-island/",

  lang: "zh-CN",
  title: "摸鱼岛",
  description: "摸鱼岛，一个关于摸鱼的地方。",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
