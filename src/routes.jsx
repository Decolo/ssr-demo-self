import Home from '@/views/home'
import About from '@/views/about'

// export default (
//   <Fragment>
//     <Route path='/' exact component={Home}></Route>
//     <Route path='/login' exact component={About}></Route>
//   </Fragment>
// )

export default [{
    path: '/',
    component: Home,
    exact: true,
    key: 'home'
  }, {
    path: '/about',
    component: About,
    exact: true,
    key: 'about',
  }
]
