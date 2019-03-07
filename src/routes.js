import App from '@/app'
import Home from '@/views/home'
import About from '@/views/about'
import NotFound from '@/view/404'

export default [{
  path: '/',
  component: App,
  // 多级路由
  routes: [{
    path: '/',
    component: Home,
    exact: true,
    key: 'home'
  }, {
    path: '/about',
    component: About,
    exact: true,
    key: 'about',
  }, {
    component: NotFound
  }]
}]