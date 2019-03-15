import React from 'react'
import { renderToNodeStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import streamToPromise from 'stream-to-promise'
import { renderRoutes } from 'react-router-config'
import routes from '@/routes'

const render = (ctx, store, routes) => {
  return new Promise(resolve => {
    const container = renderToNodeStream(
      <Provider store={store}>
        <StaticRouter location={ctx.request.path} context={{}}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    )
    store.subscribe(async() => {
      await streamToPromise(container).then(data => {
        ctx.body = `
          <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta httpquiv="X-UA-Compatible" content="ie=edge">
              <title>测试</title>
              <link rel="stylesheet" href="css/main.css">
            </head>
            <body>
              <div id="root">${data}</div>
              <!-- 从服务器端拿到脱水的数据状态 -->
              <script>
                window.context = {
                  state: ${JSON.stringify(store.getState())}
                }
              </script>
              <!-- 引入同构代码 -->
              <script src="js/index.js"></script>
            </body>
          </html>
        `
        resolve()
      })
    })
  })
}

export default render