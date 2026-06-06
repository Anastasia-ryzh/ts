import React from 'react'
import { Outlet } from 'react-router'

type Props = {}

const Maain = (props: Props) => {
  return (
    <nav>
        <button>Главная</button>
        <button>Каталог</button>
        <button>О нас</button>
    </nav>

  )
}

export default Maain