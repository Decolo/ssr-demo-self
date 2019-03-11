import React from 'react'
import { renderToNodeStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

export default async (ctx, store, routes) => (
  <Provider store={store}>
    <StaticRouter location={ctx.request.path} context={context}>
      {renderRoutes(routes)}
    </StaticRouter>
  </Provider>
)