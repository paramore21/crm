import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilHome, cilPencil, cilPhone, cilSave, cilSettings, cilUserPlus } from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Главная',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Заявки',
    to: '/requests',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Пользователи',
    to: '/users',
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Архив',
    to: '/archive',
    icon: <CIcon icon={cilSave} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Операторы',
    to: '/operators',
    icon: <CIcon icon={cilPhone} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Настройки',
    to: '/settings',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
]

export default _nav
