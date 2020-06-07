const app = require("express")();
const appid = process.env.APPID;

/**  call首頁 ***/
app.get('/' , function(req,res){
    res.sendFile(__dirname+'/index.html');
});
/*****************/

/** 載入其他功能模組 **/
var commentsAPI = require('./api/comments/commentsAPI');
var productsAPI = require('./api/products/productsAPI');
var likeAPI = require('./api/like/likeAPI');
/****************/

/*****************/
app.use(function(req, res, next) {
    //res.header("Content-Type", "application/x-www-form-urlencoded");
    res.header("Access-Control-Allow-Origin", "*"); //允許跨域
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('Access-Control-Request-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Credentials', 'true');   //允許攜帶cookie
   next();
 });
/*****************/

/**  */
app.get("/", (req,res) => 
res.send(`appid: ${appid} app2 page: says hello!!`))

/** 商品列表 */
app.get("/api/products/productList", productsAPI.productList)

/** 商品 */
app.get("/api/product/:productId", (req,res) => 
res.send(`appid: ${appid} app2 page: says hello!!`))

/** 查看評價 */
app.get("/api/product/:productId/comments", (req,res) => 
res.send(`appid: ${appid} ADMIN page: very few people should see this`))

/** 送出評價 */
app.post("/api/product/:productId/comment", (req,res) => 
res.send(`appid: ${appid} ADMIN page: very few people should see this`))

/** 查看收藏列表 */
app.get("/api/likes", (req,res) => 
res.send(`appid: ${appid} app1 page: says hello!??`))

/** 加入收藏列表 */
app.post("/api/like", (req,res) => 
res.send(`appid: ${appid} app1 page: says hello!???`))

/** 取消加入收藏列表 */
app.post("/api/unlike", (req,res) => 
res.send(`appid: ${appid} app1 page: says hello!?`))

app.listen(appid, ()=>console.log(`${appid} is listening on ${appid}`))