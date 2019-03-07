import Koa from 'koa'
import serve from 'koa-static'
import path from 'path'
import React from 'react'
import { matchRoutes } from 'react-router-config'
import { getStore } from '@/store'
import { renderToString } from 'react-dom/server'
// react-router官网示例使用的是 react-router-dom中的 matchPath，但此 API无法匹配多级路由，所以使用 matchRoutes
// import { matchRoutes } from 'react-router-config'
import routes from '@/routes'
import render from './render'

const app = new Koa()
app.use(serve(path.resolve(process.cwd() + '/public')))

app.use(async(ctx) => {
  const store = getStore(ctx.request)
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
})

app.listen(3000)
