import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { matchRoutes } from 'react-router-config'
import routes from '@/routes'

const App = () => {
  return (
    <BrowserRouter>
      
    </BrowserRouter>
  )  
}

ReactDOM.hydrate(<App />, document.getElementById('root'))