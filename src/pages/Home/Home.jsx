import React from 'react'
import { Logo } from '../../components/Logo/Logo'
import { Header } from '../../layouts/Header/Header'
//import { Search } from '../../components/Search/Search'
import './Home.css'
import { MainButton } from '../../components/MainButton/MainButton'

export const Home = () => {
  return (
     <>
      <div className='containerHeader'>
        <Logo />
        <div>
          <Header />
        </div>
      </div>
      <div className='containerMain'>
        <h1>La lectura te da felicidad</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero error, autem laboriosam amet tempore rerum itaque ipsam totam modi doloribus eius corrupti voluptates voluptatem laudantium dicta ea exercitationem necessitatibus veritatis.</p>
        <MainButton textButton="Ingresar" />
        <MainButton textButton="Mas informacion" />
      </div>
     </>
  )
}
