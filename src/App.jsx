import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Sidebar from "./components/shared/Sidebar"
import { RiMenu3Fill, RiRestaurant2Fill, RiReservedFill, RiCloseFill, RiSearchLine, RiArrowDownSFill } from "react-icons/ri";



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
        <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20">
          <div className="lg:col-span-6 md:p-8">
            {/* Header */}
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
            {/* Tititulo del contenedor*/}
            <div className='flex items-center justify-between mb-20'>
                <h2 className='text-xl text-gray-300'>Escoje tu desayuno</h2>
                <button className='w-[150px] flex items-center gap-3 text-gray-300 bg-[#1F1D2A] pl-2.5 py-2 py-4 rounded-lg'><RiArrowDownSFill/>Desayunar en</button>
            </div>
            {/*Contenido*/}
            <div className='py-8 pr-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
              {/*card*/}
              <div className='bg-[#1F1D2A] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2'>
                <img src='src\assets\imgs\yogurt.png' className='w-40 object-over -mt-20 shadow-lg rounded-full'/>
                <p className='text-xl'>Yogurt con frutas frescas, avena y especies</p>
                <span className='text-gray-400'>$99.00</span>
              </div>
              {/*card*/}
              <div className='bg-[#1F1D2A] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2'>
                <img src='src\assets\imgs\yogurt.png' className='w-40 object-over -mt-20 shadow-lg rounded-full'/>
                <p className='text-xl'>Yogurt con frutas frescas, avena y especies</p>
                <span className='text-gray-400'>$99.00</span>
              </div>
              {/*card*/}
              <div className='bg-[#1F1D2A] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2'>
                <img src='src\assets\imgs\yogurt.png' className='w-40 object-over -mt-20 shadow-lg rounded-full'/>
                <p className='text-xl'>Yogurt con frutas frescas, avena y especies</p>
                <span className='text-gray-400'>$99.00</span>
              </div>
              {/*card*/}
              <div className='bg-[#1F1D2A] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2'>
                <img src='src\assets\imgs\yogurt.png' className='w-40 object-over -mt-20 shadow-lg rounded-full'/>
                <p className='text-xl'>Yogurt con frutas frescas, avena y especies</p>
                <span className='text-gray-400'>$99.00</span>
              </div>
              {/*card*/}
              <div className='bg-[#1F1D2A] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2'>
                <img src='src\assets\imgs\yogurt.png' className='w-40 object-over -mt-20 shadow-lg rounded-full'/>
                <p className='text-xl'>Yogurt con frutas frescas, avena y especies</p>
                <span className='text-gray-400'>$99.00</span>
              </div>
              {/*card*/}
              <div className='bg-[#1F1D2A] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2'>
                <img src='src\assets\imgs\yogurt.png' className='w-40 object-over -mt-20 shadow-lg rounded-full'/>
                <p className='text-xl'>Yogurt con frutas frescas, avena y especies</p>
                <span className='text-gray-400'>$99.00</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 fixed lg:statick right-0">QUE TAL</div>
        </main>
      </div>
    </>
  )
}

export default App
