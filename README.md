<<<<<<< HEAD
# weather-monitor1
=======
﻿# 即時地區天氣監測與通知系統 (前端靜態版)

這是一個純前端、可部署到 GitHub Pages 的最小可行產品 (MVP)，會在載入時取得使用者定位，呼叫 OpenWeatherMap API 取得當前天氣，並可開啟瀏覽器通知推播。

## 專案結構
- `index.html`：頁面結構。
- `style.css`：樣式與 RWD 設計。
- `app.js`：邏輯 (定位、抓取天氣、通知)。

## 事前準備：申請 OpenWeatherMap API Key
1. 前往 [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) 註冊免費帳號。
2. 登入後點選「API keys」頁籤，新增一組 Key，複製字串。
3. 回到本專案，開啟 `app.js`，將檔案最上方的 `YOUR_API_KEY` 替換成你的 Key。
4. **等待 30–60 分鐘**：官方 FAQ 提到新 Key 可能需要最多兩小時才會啟用，通常稍等一段時間即可使用。citeturn1search0

## 本地端測試 (推薦 VS Code Live Server)
瀏覽器的定位與通知需要「安全來源」，`localhost` 被視為安全來源，可以直接在本機測試。
1. 安裝 [VS Code](https://code.visualstudio.com/) 與擴充套件 **Live Server**。
2. 打開本資料夾，右鍵 `index.html` 選「Open with Live Server」。
3. 瀏覽器會自動開啟，例如 `http://127.0.0.1:5500`，此位址可使用定位與通知。
4. 若瀏覽器提示「允許定位/通知」，請選擇允許。

> 如果你偏好 HTTPS，可以在 VS Code 設定 `liveServer.settings.useHttps` 為 true 並提供自簽憑證，但對大多數人使用 `localhost` 即可。

## 部署到 GitHub Pages
1. 在 GitHub 建立新的 Repository，名稱隨意，例如 `weather-monitor`。
2. 將此資料夾的全部檔案 (`index.html`, `style.css`, `app.js`, `README.md`) 推上 repository。
3. 進入 GitHub 專案頁面 → **Settings** → **Pages**。
4. 在「Source」選擇 **Deploy from a branch**，Branch 選 `main`，資料夾選 `/root`，按 **Save**。
5. 等候數十秒，GitHub Pages 會產生一個網址，通常是 `https://你的帳號.github.io/your-repo/`，開啟即可使用。

## 使用方式
1. 開啟頁面後，瀏覽器會要求定位，允許後自動顯示目前位置天氣。
2. 點「重新取得天氣」可手動刷新。
3. 點「開啟天氣通知」授權後，按「發送測試通知」會推播一則含溫度與狀況的系統通知。
4. 若拒絕定位，系統會改用預設城市：台北市。

## 安全性提醒
- OpenWeatherMap 要求每次 API 呼叫都需附上 API Key；在純前端專案中，這個 Key 會出現在瀏覽器中，建議定期輪替並監控用量（推論自官方文件）。citeturn1search1
- 官方 FAQ 未提供網域 (HTTP Referrer) 白名單設定；若需更安全控制，請考慮改用代理/後端轉發來隱藏 Key。citeturn1search0
- 建議：不同環境使用不同 Key（例如測試/正式），並將配額設置得較保守，異常時立即停用或重置 Key。

## 手動驗收清單
- 允許定位後，頁面顯示「目前位置」的溫度、體感溫度、濕度、描述與更新時間。
- 拒絕定位或裝置不支援時，改為顯示「台北市（預設）」的天氣並提示訊息。
- 「開啟天氣通知」按鈕可請求權限；權限允許後，「發送測試通知」可推播含溫度與天氣描述的系統通知。
- 「重新取得天氣」可以重新抓取而不會報錯。
>>>>>>> 3c1e78d (Initial weather monitor MVP)
