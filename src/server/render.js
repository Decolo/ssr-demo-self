import React from 'react'
import { renderToNodeStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import streamToPromise from 'stream-to-promise'

export default async (ctx, store, routes) => {
  
}