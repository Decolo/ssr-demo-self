import Home from '@/views/home'
import About from '@/views/about'

export default [{
    path: '/',
    component: Home,
    exact: true,
    key: 'home',
    loadData: Home.loadData
  }, {
    path: '/about',
    component: About,
    exact: true,
    key: 'about',
    loadData: About.loadData
  }
]
