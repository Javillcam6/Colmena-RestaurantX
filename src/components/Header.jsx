import React from 'react'
import {  RiSearchLine } from "react-icons/ri";


export default function Header() {
  return (
    <header>
    {/* Tituto y search */}
    <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-8 mb-6'>
      <div>
        <h1 className='text-xl text-gray-300'>Colmena Restaurant</h1>
        <p className='text-gray-500'>29 de octubre del 2023</p>
      </div>
      <form>
        <div className='w-full relative'>
          <RiSearchLine className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-300'/>
          <input type='text' placeholder='Busca tu platillo favorito' className='bg-[#1F1D2A] w-full py-2 pl-8 pr-4 rounded-lg text-gray-300 outline-none' />
        </div>
      </form>
    </div>
    {/* Tabs */}
    <nav className='text-gray-300 flex items-center justify-between md:justify-start md:gap-4 border-b mb-6'>
      <a href='#' className=' relative py-2 pr-4 before:w-1/2 before:h-1 before:absolute before:bg-[#33D9B2] before:left-0 before:rounded-full before:-bottom-[3px] text-[#33D9B2]'>Desayuno</a>
      <a href='#' className='py-2 pr-4' >Comida</a>
      <a href='#' className=' py-2 pr-4'>Dietetico</a>
      <a href='#' className=' py-2 pr-4'>Botanas</a>
      <a href='#' className=' py-2 pr-1'>Bebidas</a>
    </nav>
  </header>
    )
}
