import React from 'react'
import { renderToNodeStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import streamToPromise from 'stream-to-promise'
import routes from '@/routes'

export default async (ctx, store, routes) => {
  const context = {}
  const container = renderToNodeStream(
    <Provider store={store}>
      <StaticRouter location={ctx.request.path} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  )
  
  await streamToPromise(container).then(data => {
    // 302重定向
    if (context.action === 'REPLACE') {
      return ctx.redirect('/')
    }
    // 404 页面
    if (context.isNotFound) {
      ctx.status = 404
    }

    ctx.body = `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta httpquiv="X-UA-Compatible" content="ie=edge">
          <title>Document</title>
        </head>
        <body>
          <div id="root">${data.toString()}</div>
          <!-- 从服务器端拿到脱水的数据状态 -->
          <script>
            window.context = {
              state: ${JSON.stringify(store.getState())}
            }
          </script>
          <!-- 引入同构代码 -->
          <script src="/index.js"></script>
        </body>
      </html>
    `
  })
}