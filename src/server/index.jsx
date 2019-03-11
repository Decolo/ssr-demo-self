import Koa from 'koa'
import serve from 'koa-static'
import path from 'path'
import { getStore } from '@/store'
import routes from '@/routes'
import render from './render'

const app = new Koa()
app.use(serve(path.resolve(process.cwd() + '/public')))

app.use(async(ctx) => {
  const store = getStore()
  const promises = []
  const mtRoutes = matchRoutes(routes, ctx.request.path)
  mtRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(new Promise(resolve => {
        item.route.loadData(store).then(resolve).catch(resolve)
      }))
    }
  })

  await Promise.all(promises)
  await render(ctx, store, routes)

  
  

  ctx.response.type = 'html'
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
        <div id="root">${app}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `
})

app.listen(3000)
