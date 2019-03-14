import Koa from 'koa'
import serve from 'koa-static'
import path from 'path'
import { matchRoutes } from 'react-router-config'
import { getStore } from '@/store'
import routes from '@/routes'
import render from './render'

const app = new Koa()
app.use(serve(path.resolve(process.cwd() + '/public')))

app.use(async(ctx) => {
  const store = getStore()
  const promises = []
  const mtRoutes = matchRoutes(routes, ctx.request.path)
  // console.log(mtRoutes)
  // debugger
  mtRoutes.forEach(item => {
    if (item.route.loadData) {
      item.route.loadData(store)
    }
  })
  // 服务器请求数据，先获取当前页面所需数据，再填充到store
  
  // 根据服务端填充的store进行  
  // await render(ctx, store, routes)
  await render(ctx, store, routes)
})

app.listen(3000)
