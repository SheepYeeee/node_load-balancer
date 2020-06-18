
```
node_load-balancer
├─ .dockerignore   ← 給docker看的，用來排除不須上到docker上的檔案或目錄
├─ .env   ← 環境設定檔
├─ commands.txt   ← 會用到的指令，需要看一下
├─ docker-compose.yml   ← 透過一個指令就可以控制所有專案中所需要的services(就是管理container的檔案啦)
├─ Dockerfile   ← nodeapp container自定義的安裝檔
├─ wait-for.sh   ← 這是要確保container運行後必須與mongodb確實連線的
├─ app
│  ├─ app.js   ← 專案主檔(執行檔)
│  ├─ db.js  ← 設定連線資料庫
│  ├─ .env   ← 環境設定檔
│  ├─ package-lock.json
│  ├─ package.json  ← nodejs的設定檔
│  ├─ wait-for.sh   ← 這是要確保container運行後必須與mongodb確實連線的
│  ├─ controllers  ← 邏輯判斷
│  │  └─ sharks.js
│  ├─ models  ← 資料庫
│  │  └─ sharks.js
│  ├─ routes  ← 路由
│  │  ├─ index.js
│  │  ├─ sharks.js
│  │  └─ sharksList.js 
│  └─ views  ← 畫面
│     ├─ getshark.html  ← 鯊魚列表頁面(可編輯、刪除)
│     ├─ index.html  ← 首頁
│     ├─ sharks.html  ← 新增鯊魚頁面
│     └─ css
│        └─ styles.css
└─ load-balancer  ← 負載平衡器
   ├─ Dockerfile  ← 負載平衡器的container自定義的安裝檔
   └─ nginx.conf  ← nginx自定義設定檔
```