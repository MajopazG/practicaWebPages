import React from 'react'
import { Anchor } from '../../components/Anchor/Anchor'
import { AiFillAppstore } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineTablet } from "react-icons/ai";
import { AiFillBook } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import './Header.css'

export const Header = () => {
  return (
    <>
        <div>
        <AiFillAppstore />
        <Anchor textButton=" Inicio "/>
        <AiOutlineTeam />
        <Anchor textButton=" Nosotros "/>
        <AiOutlineTablet />
        <Anchor textButton=" Blog "/>
        <AiFillBook />
        <Anchor textButton=" Libros "/>
        <AiFillPhone />
        <Anchor textButton=" Contacto "/>
        </div>        
    </>
  )
}
