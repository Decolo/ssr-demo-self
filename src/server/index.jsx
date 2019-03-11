import Koa from 'koa'
import React from 'react'
import serve from 'koa-static'
import path from 'path'
import { Provider } from 'redux'
import { renderToNodeStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { getStore } from '@/store'
import routes from '@/routes'

const app = new Koa()
app.use(serve(path.resolve(process.cwd() + '/public')))

app.use(async(ctx) => {
  const store = getStore()
  const promises = []
  const mtRoutes = matchRoutes(routes, ctx.request.path)
  mtRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  })

  await Promise.all(promises)
  await render(ctx, store, routes)

  const app = renderToNodeStream(
    <Provider store={getStore()}>
      <StaticRouter location={ctx.request.path} context={{}}>
        {Routes}
      </StaticRouter>
    </Provider>
  )

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
