import { SiteConfig } from './types'

// 由于无法直接导入MD文件，我们使用一个默认配置
export const defaultConfig: SiteConfig = {
  defaultGame: "grow-a-garden-script",
  siteName: "Grow a Garden Script",
  seo: {
    title: "Grow a Garden Script - Automated Farming Script for Roblox",
    description: "Try Grow a Garden Script! Automate planting, collecting, selling, and get infinite seeds. Boost your farm and enjoy one of the most popular Roblox farming games!",
    ogImage: "/images/hot_game/grow-a-garden-script.png",
    keywords: "Grow a Garden Script, auto plant, auto collect, auto sell, Roblox, farming, automation, no key, script collection, trending game"
  },
  advertisement: {
    key: ""
  },
  gameSettings: {
    randomGamesCount: 20
  },
  siteInfo: {
    companyName: "Grow a Garden Script",
    siteUrl: "https://www.grow-a-garden-script.net",
    email: "HarryC199101@gmail.com"
  },
  footer: {
    columns: [],
    copyright: "© 2025 All rights reserved.",
    disclaimer: "This is an independent website."
  }
}

// 获取随机游戏数量配置
export function getRandomGamesCount(): number {
  return defaultConfig.gameSettings?.randomGamesCount || 20
}

// 获取站点配置
export function getSiteConfig(): SiteConfig {
  return defaultConfig
}

export default defaultConfig 