# CLAUDE.md - Backend Learning School 專案指南

## 確認機制

**每次回應開頭請說：「明白，按照 Backend Learning School 規範執行」**

---

## 專案概述

| 項目 | 說明 |
|------|------|
| 專案類型 | 純 HTML/CSS/JS 靜態教學網站 |
| 部署平台 | GitHub Pages |
| 設計風格 | 深色主題、互動式教學 |
| 目標用戶 | 後端工程師學習者 |

---

## 情境感知規則系統

根據任務類型，**必須先讀取對應的規則檔案**，並在回應中說明「正在參考 XXX 規則」。

| 情境 | 規則檔案 | 觸發條件 |
|------|---------|---------|
| **專案結構** | `.claude/rules/project-structure.md` | • 引入新教學檔案<br>• 調整目錄結構 |
| **編碼規範** | `.claude/rules/coding-standards.md` | • 修改 `index.html`<br>• Code Review<br>• 樣式/功能調整 |

---

## 核心約束

### 禁止事項

| 類別 | 禁止項目 |
|------|---------|
| **tutorials/** | ❌ **禁止修改 tutorials/ 資料夾內的任何檔案**（來源：Claude Web） |
| 框架 | ❌ 禁止使用 React/Vue/Angular 等框架 |
| 建構工具 | ❌ 禁止使用 Webpack/Vite 等建構工具 |
| 套件管理 | ❌ 禁止使用 npm/yarn 安裝前端套件 |
| 外部依賴 | ❌ 禁止引入 jQuery、Bootstrap JS |
| 資料庫 | ❌ 禁止後端資料庫連接 |

> ⚠️ **重要**：`tutorials/` 資料夾內的教學頁面由 Claude Web 產生並引入，本專案僅負責 `index.html` 的導航整合，不修改教學內容。

### 允許事項

| 類別 | 允許項目 |
|------|---------|
| 字體 | ✅ Google Fonts CDN |
| 圖示 | ✅ 內嵌 SVG、Emoji |
| 樣式 | ✅ 純 CSS、CSS Variables |
| 互動 | ✅ 原生 JavaScript (ES6+) |

---

## 工作流程

### 1. 引入新教學頁面（從 Claude Web）

```
步驟：
1. 使用者將 Claude Web 產生的 HTML 檔案放入 `tutorials/` 目錄
2. 讀取 `index.html` 的 skillTree 資料結構
3. 在對應分類中新增技能項目，設定正確的 link 路徑
4. 確認連結可正常跳轉
```

> ⚠️ 注意：不要修改 tutorials/ 內的檔案內容

### 2. 更新首頁導航

```
步驟：
1. 讀取 `index.html` 的 skillTree 資料結構
2. 找到對應分類（01-Internet ~ 21-Real-Time-Data）
3. 新增/修改技能項目的 name、level、time、link
4. 確認連結路徑格式：`tutorials/{filename}.html`
```

### 3. 修改首頁樣式/功能

```
步驟：
1. 讀取 `.claude/rules/coding-standards.md`
2. 僅修改 `index.html`
3. 保持深色主題風格一致
4. 確認響應式設計正常
5. 測試搜尋和導航功能
```

---

## Code Review 檢查清單

### HTML 結構
- [ ] DOCTYPE 宣告為 `html`？
- [ ] lang 屬性設為 `zh-TW`？
- [ ] 有 meta viewport 標籤？
- [ ] title 有意義且包含關鍵字？

### CSS 樣式
- [ ] 使用 CSS Variables 定義顏色？
- [ ] 深色主題配色一致？
- [ ] 響應式斷點 768px 處理？
- [ ] 無冗餘的重複樣式？

### JavaScript
- [ ] 使用 ES6+ 語法？
- [ ] 事件監聽使用 addEventListener？
- [ ] 無全域變數污染？
- [ ] DOM 操作在 DOMContentLoaded 後？

### 教學頁面特定
- [ ] 有「返回首頁」按鈕？
- [ ] 導航 Tab 功能正常？
- [ ] 測驗功能正常？
- [ ] 手機版顯示正常？

---

## 自訂命令

### /add-tutorial

將新的教學頁面加入導航（檔案已由使用者放入 tutorials/）。

**使用方式：**
```
/add-tutorial <分類編號> <技能名稱> <檔案名稱> <難度> <時數>
範例：/add-tutorial 08 "JWT Deep Dive" "jwt-deep-dive-tutorial.html" "中級" "4h"
```

**執行流程：**
1. 確認 `tutorials/{檔案名稱}` 存在
2. 更新 `index.html` 的 skillTree
3. 輸出完成摘要

### /list-tutorials

列出目前所有已連結的教學頁面。

**使用方式：**
```
/list-tutorials
```

**輸出：**
```
已連結的教學：
- [01-Internet] OSI 模型 → tutorials/osi-model-tutorial.html
- [17-Scaling] Rate Limiter → tutorials/rate-limiter-tutorial.html
```

---

## 設計系統

### 色彩規範

| 變數名稱 | 色碼 | 用途 |
|---------|------|------|
| `--primary-color` | `#00d4ff` | 主色（青色） |
| `--secondary-color` | `#7c3aed` | 輔色（紫色） |
| `--bg-dark` | `#0f172a` | 深色背景 |
| `--bg-card` | `#1e293b` | 卡片背景 |
| `--text-primary` | `#f1f5f9` | 主要文字 |
| `--text-secondary` | `#cbd5e1` | 次要文字 |
| `--success-color` | `#10b981` | 成功/初級（綠） |
| `--warning-color` | `#f59e0b` | 警告/中級（黃） |
| `--error-color` | `#ef4444` | 錯誤/進階（紅） |

### 難度標籤

| 難度 | 顏色 | CSS Class |
|------|------|-----------|
| 初級 | 綠色 | `.badge-beginner` |
| 中級 | 黃色 | `.badge-intermediate` |
| 進階 | 紅色 | `.badge-advanced` |

---

## 檔案命名規範

| 類型 | 格式 | 範例 |
|------|------|------|
| 教學頁面 | `{skill-name}-tutorial.html` | `jwt-deep-dive-tutorial.html` |
| 樣式檔案 | `{purpose}.css` | `common.css` |
| 腳本檔案 | `{purpose}.js` | `navigation.js` |

---

## 版本資訊

| 項目 | 值 |
|------|---|
| 文件版本 | 1.0 |
| 建立日期 | 2025-01-05 |
| 專案名稱 | docs-kh-cathaylife-learning-school |
