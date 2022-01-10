import React, { lazy } from 'react'

const Dashboard = lazy(() => import('./views/dashboard/Dashboard'))
const Requests = lazy(() => import('./views/requests/Requests'))
const Users = lazy(() => import('./views/users/Users'))
const Settings = lazy(() => import('./views/settings/Settings'))
const Archive = lazy(() => import('./views/archive/Archive'))
const CallCenter = lazy(() => import('./views/callCenter/CallCenter'))

const routes = [
  { path: '/', exact: true, name: 'Домой' },
  { path: '/dashboard', name: 'Главная', component: Dashboard },
  { path: '/requests', name: 'Заявки', component: Requests },
  { path: '/users', name: 'Пользователи', component: Users },
  { path: '/archive', name: 'Архив', component: Archive },
  { path: '/operators', name: '', component: CallCenter },
  { path: '/settings', name: 'Настройки', component: Settings },
]

export default routes
