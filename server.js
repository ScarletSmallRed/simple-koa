const Koa = require("./application")
const app = new Koa()

function delay() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove()
        }, 2000)
    })
}

app.use(async (ctx,next)=>{
    ctx.body = '1'
    await next()
    ctx.body += '2'
  })
  app.use(async (ctx,next)=>{
    ctx.body += '3'
    await delay()
    await next()
    ctx.body += '4'
  })
  app.use(async (ctx,next)=>{
    ctx.body += '5'
  })

// app.use(async ctx => {
//     ctx.body = "Hello, " + ctx.url
// })
app.listen(9092, () => {
    console.log("server running on port 9092")
})