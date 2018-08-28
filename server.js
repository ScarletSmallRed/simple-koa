const Koa = require("./application")
const app = new Koa()

app.use(async ctx => {
    ctx.body = "Hello, " + ctx.url
})
app.listen(9092, () => {
    console.log("server running on port 9092")
})