import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// import { renderRoutes } from 'react-router-config'
import Home from '@/views/home'
import Routes from '@/routes'

const App = () => {
  return (
    <BrowserRouter>
      {Routes}
    </BrowserRouter>
  )  
}

ReactDOM.hydrate(<App />, document.getElementById('root'))