import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Sidebar from "./components/shared/Sidebar"
import { RiMenu3Fill, RiRestaurant2Fill, RiReservedFill, RiCloseFill, RiSearchLine } from "react-icons/ri";



function App() {
  const [showMenu, setShowMenu] = useState (false)
  const [showOrder, setShowOrder] = useState (false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <div className="bg-[#262836] w-full min-h-screen">
        <Sidebar showMenu={showMenu}/>
        <nav className="bg-[#1F1D2A] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-[#dff9fb] py-2 px-8 flex item-center justify-between rounded-tl-3xl rounded-tr-3xl">
          <button className='p-2'>
            <RiRestaurant2Fill />
          </button>
          <button className='p-2'>
            <RiReservedFill />
          </button>
          <button onClick={toggleMenu} className='text-[#33D9B2] p-2'>
            {showMenu ? <RiCloseFill /> : <RiMenu3Fill />}
          </button>
        </nav>
        <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8">
          <div className="lg:col-span-6">
            <header className='p-4'>
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
            </header>
          </div>
          <div className="lg:col-span-2 fixed lg:statick right-0">QUE TAL</div>
        </main>
      </div>
    </>
  )
}

export default App
