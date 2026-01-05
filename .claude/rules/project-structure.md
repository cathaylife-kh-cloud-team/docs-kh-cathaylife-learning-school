# 專案結構規範

## 目錄結構

```
docs-kh-cathaylife-learning-school/
├── index.html                    # 首頁（樹狀導航）
├── CLAUDE.md                     # AI 開發指南
├── README.md                     # 專案說明
├── .claude/
│   └── rules/
│       ├── project-structure.md  # 本檔案
│       └── coding-standards.md   # 編碼規範
└── tutorials/                    # 教學頁面目錄（❌ 禁止修改）
    ├── osi-model-tutorial.html   # 來源：Claude Web
    ├── rate-limiter-tutorial.html
    └── {new-tutorial}.html       # 由使用者從 Claude Web 引入
```

---

## 檔案放置規則

| 檔案類型 | 放置位置 | 說明 | 可修改 |
|---------|---------|------|--------|
| 首頁 | `/index.html` | 唯一入口，包含導航 | ✅ 可修改 |
| 教學頁面 | `/tutorials/*.html` | 所有教學內容 | ❌ **禁止修改** |
| 規則文件 | `/.claude/rules/*.md` | AI 規範文件 | ✅ 可修改 |
| 專案文件 | `/*.md` | README 等說明文件 | ✅ 可修改 |

> ⚠️ **重要**：`tutorials/` 資料夾內的檔案由 Claude Web 產生，本專案僅負責導航整合，**禁止修改其內容**。

---

## 禁止的目錄結構

```
# ❌ 禁止
├── src/                    # 不需要 src 目錄
├── dist/                   # 不需要建構輸出
├── node_modules/           # 不使用 npm
├── assets/css/            # 樣式內嵌在 HTML
├── assets/js/             # 腳本內嵌在 HTML
└── components/            # 不使用組件化架構
```

---

## 新增檔案規則

### 引入教學頁面（從 Claude Web）

| 步驟 | 操作 | 執行者 |
|------|------|--------|
| 1 | 在 Claude Web 產生教學 HTML | 使用者 |
| 2 | 將檔案放入 `tutorials/` 目錄 | 使用者 |
| 3 | 更新 `index.html` 的 `skillTree` 資料 | AI |

> ⚠️ AI 僅負責步驟 3，不建立或修改 tutorials/ 內的檔案

### 檔案命名（供 Claude Web 參考）

| 類型 | 格式 | 範例 |
|------|------|------|
| 教學頁面 | `{skill}-tutorial.html` | `jwt-tutorial.html` |
| 小寫連字號 | `{word}-{word}` | `rate-limiter-tutorial.html` |

---

## 技能分類對照表

| 編號 | 分類名稱 | 技能數量 |
|------|---------|---------|
| 01 | Internet 基礎 | 6 |
| 02 | Frontend 基礎 | 1 |
| 03 | 作業系統知識 | 3 |
| 04 | 程式語言 | 1 |
| 05 | 版本控制 | 2 |
| 06 | 關聯式資料庫 | 6 |
| 07 | API 設計風格 | 4 |
| 08 | 身份驗證 | 4 |
| 09 | 快取策略 | 2 |
| 10 | 網頁安全 | 4 |
| 11 | 測試 | 1 |
| 12 | DevOps & CI/CD | 3 |
| 13 | 架構模式 | 4 |
| 14 | 訊息佇列 & 搜尋 | 2 |
| 15 | 資料庫擴展 | 4 |
| 16 | 系統設計 | 3 |
| 17 | 擴展策略 | 3 |
| 18 | 全端整合 | 1 |
| 19 | 設計原則 | 4 |
| 20 | Web 伺服器 | 1 |
| 21 | 即時資料 | 1 |

---

## 版本控制規範

### 應納入版控

```
✅ index.html
✅ tutorials/*.html
✅ CLAUDE.md
✅ README.md
✅ .claude/rules/*.md
```

### 不納入版控（.gitignore）

```
# ❌ 不納入
.DS_Store
Thumbs.db
*.log
.idea/
.vscode/
```
