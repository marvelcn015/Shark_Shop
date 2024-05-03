# Shark_Shop 購物網站

因練習用而架設的純前端靜態網站，可可愛愛ㄉ

### 目前開發出以下功能:
- 使用CSS實現RWD，手機和電腦皆可
- 顯示 / 隱藏購物車彈出視窗
- 將產品加入購物車，或從購物車中移除產品
- 計算購物車總金額
- 結帳功能(無後端資料庫)
- 使用localStorage保存購物車資料
- 使用Fetch API從JSON檔案獲取產品資料

## 技術細節

### JavaScript

- **DOM操作**: 使用`document.querySelector`和`element.addEventListener`等方法操作DOM元素和監聽事件。
- **陣列操作**: 使用`forEach`、`map`、`find`、`push`、`splice`等陣列方法處理購物車項目。
- **字串操作**: 使用字串方法`split`和`textContent`等操作顯示金額。
- **函式**: 使用`updateCart`、`saveCartToLocalStorage`和`loadCartFromLocalStorage`等函式封裝商業邏輯。

### Web API

- **Fetch API**: 使用`fetch`從JSON檔案獲取產品資料。
- **localStorage API**: 使用`localStorage.setItem`和`localStorage.getItem`保存和載入購物車資料，即使網站被關閉或刷新後使用者資料仍然能存在。

## 使用方式

1. 網站會從`data.json`載入產品資料並動態渲染產品列表。
2. 按下`加入購物車`按鈕可將產品加入購物車。
3. 點擊`購物車圖示`可顯示購物車彈出視窗，其中列出所有購物車項目及總金額。
4. 在購物車視窗中可點擊`刪除`按鈕移除項目。
5. 點擊`結帳`按鈕可完成訂單，購物車會被清空(無後端資料庫)。
6. 重新整理頁面後，購物車資料會從localStorage中載入。
7. `footer`中`聯絡網站作者`按鈕可連結至下一個頁面。
8. 若回饋表單未填寫完整，會跳出提示訊息。

歡迎提出任何問題或改進建議!
跟鯊魚們一起可可愛愛 ✧*｡٩(ˊᗜˋ*)و✧*｡
