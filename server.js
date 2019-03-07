const Koa = require('koa')
const app = new Koa()
const React = require('react')
const ReactDom = require('react-dom')
const { renderToString } = require('react-dom/server')

const Home = () => {
  return (
    <div>home</div>
  )
}
const container = renderToString(<Home />)

app.use(async(ctx) => {
  ctx.body = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      <div id="root"></div>
    </body>
    </html>
  `
})

app.listen(3000)