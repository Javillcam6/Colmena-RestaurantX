import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Sidebar from "./components/shared/Sidebar"
import { RiMenu3Fill, RiRestaurant2Fill, RiReservedFill, RiCloseFill, RiSearchLine, RiArrowDownSFill, RiDeleteBin6Line } from "react-icons/ri";



function App() {
  const [showMenu, setShowMenu] = useState (false)
  const [showOrder, setShowOrder] = useState (false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
    setShowOrder(false)
  }
  const toggleOrder = () => {
    setShowOrder(!showOrder)
    setShowMenu(false);
}

  return (
    <>
      <div className="bg-[#262836] w-full min-h-screen">
        <Sidebar showMenu={showMenu}/>

        {/*Menu movil */}
        <nav className="bg-[#1F1D2A] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-[#dff9fb] py-2 px-8 flex item-center justify-between rounded-tl-3xl rounded-tr-3xl">
          <button className='p-2'>
            <RiRestaurant2Fill />
          </button>
          <button onClick={toggleOrder} className='p-2'>
            <RiReservedFill />
          </button>
          <button onClick={toggleMenu} className='text-[#33D9B2] p-2'>
            {showMenu ? <RiCloseFill /> : <RiMenu3Fill />}
          </button>
        </nav>
        <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 pb-20">
          <div className="lg:col-span-6 md:p-8 p-4">
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
                <img src='src\assets\imgs\Huevos-1.png' className='w-40 object-over -mt-20 shadow-lg rounded-full'/>
                <p className='text-xl'>Yogurt con frutas frescas, avena y especies</p>
                <span className='text-gray-400'>$99.00</span>
              </div>
              {/*card*/}
              <div className='bg-[#1F1D2A] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2'>
                <img src='src\assets\imgs\Huevos-2.png' className='w-40 object-over -mt-20 shadow-lg rounded-full'/>
                <p className='text-xl'>Yogurt con frutas frescas, avena y especies</p>
                <span className='text-gray-400'>$99.00</span>
              </div>
              {/*card*/}
              <div className='bg-[#1F1D2A] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2'>
                <img src='src\assets\imgs\Huevos-3.png' className='w-40 object-over -mt-20 shadow-lg rounded-full'/>
                <p className='text-xl'>Yogurt con frutas frescas, avena y especies</p>
                <span className='text-gray-400'>$99.00</span>
              </div>
              {/*card*/}
              <div className='bg-[#1F1D2A] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2'>
                <img src='src\assets\imgs\Huevos-4.png' className='w-40 object-over -mt-20 shadow-lg rounded-full'/>
                <p className='text-xl'>Yogurt con frutas frescas, avena y especies</p>
                <span className='text-gray-400'>$99.00</span>
              </div>
              {/*card*/}
              <div className='bg-[#1F1D2A] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2'>
                <img src='src\assets\imgs\Huevos-5.png' className='w-40 object-over -mt-20 shadow-lg rounded-full'/>
                <p className='text-xl'>Yogurt con frutas frescas, avena y especies</p>
                <span className='text-gray-400'>$99.00</span>
              </div>
            </div>
          </div>
          <div className={`lg:col-span-2 fixed lg:static lg:min-h-screen max-h-screen overflow-scroll top-0 bg-[#1F1D2A] w-full h-full transition-all ${showOrder ? " right-0" : "-right-full" }`}>
            {/*Carrito Ordeneeeeeeeeeeees*/}
            <div className='relative pt-16 lg:pt-8 text-gray-300 p-8 h-full  '>
              <RiCloseFill onClick={toggleOrder} className='lg:hidden absolute left-4 top-4 p-2 box-content text-gray-300 bg-[#262837] rounded-full text-xl'/>
              <h1 className='text-xl my-4'>Orden #350 </h1>
              {/*Pills carrito */}
              <div className='flex items-center gap-4 flex-wrap mb-8'>
                <button className='bg-[#33d9b2] text-white p-2 px-4 rounded-lg'>Tu Orden</button>
                <button className='text-[#33d9b2] p-2 px-4 rounded-lg border border-gray-500'>Reservar</button>
              </div>
              {/*Carrito de compras */}
              <div>
                <div className='grid grid-cols-6 mb-4 p-4'>
                  <h5 className='col-span-3'>Item</h5>
                  <h5 className='col-span-2 text-center'>Cantidad</h5>
                  <h5 className='col-span-1'>Precio</h5>
                </div>
                  {/*Productoooooooos */}
                <div className=' h-[400px] md:h-[700px] lg:-h-[540px] overflow-hidden'>
                                   {/*Producto*/}
                 <div className='bg-[#262836] p-4 rounded-xl mb-6'>
                  <div className='grid grid-cols-6 mb-4'>
                    {/*Descripcion del producto */}
                  <div className='col-span-4 flex items-center gap-3'>
                      <img src='src\assets\imgs\Huevos-1.png' className='w-10 h-10 object-cover' />
                      <div>
                      <h5 className='text-sm'>Yogourt con frutos frescos y avena...</h5>
                      <p className='text-xs text-gray-500'>$99.00</p>
                      </div>
                    </div>
                    {/*Cantidad */}
                    <div>
                      <input type='number' className='bg-[#1F1D2B] w-8 text-center outline-none'placeholder='0' />
                    </div>
                    {/*Precio */}
                    <div className='ml-3'>
                    <span>$99</span>
                    </div>
                  </div>
                                   {/*Nota */}
                 <div className='grid grid-cols-6 gap-2'>
                    <form className='col-span-5'>
                      <input type='text' className='bg-[#1F1D2B] py-1 px-4 rounded-lg outline-none' placeholder='Nota de la orden'/>
                    </form>
                    <div>
                      <button className='border border-red-500 p-2 rounded-lg'>
                        <RiDeleteBin6Line className='text-red-500'/>
                      </button>
                    </div>
                  </div>
                 </div>
                  {/*Producto*/}
                 <div className='bg-[#262836] p-4 rounded-xl mb-6'>
                  <div className='grid grid-cols-6 mb-4'>
                    {/*Descripcion del producto */}
                  <div className='col-span-4 flex items-center gap-3'>
                      <img src='src\assets\imgs\Huevos-1.png' className='w-10 h-10 object-cover' />
                      <div>
                      <h5 className='text-sm'>Yogourt con frutos frescos y avena...</h5>
                      <p className='text-xs text-gray-500'>$99.00</p>
                      </div>
                    </div>
                    {/*Cantidad */}
                    <div>
                      <input type='number' className='bg-[#1F1D2B] w-8 text-center outline-none'placeholder='0' />
                    </div>
                    {/*Precio */}
                    <div className='ml-3'>
                    <span>$99</span>
                    </div>
                  </div>
                                   {/*Nota */}
                 <div className='grid grid-cols-6 gap-2'>
                    <form className='col-span-5'>
                      <input type='text' className='bg-[#1F1D2B] py-1 px-4 rounded-lg outline-none' placeholder='Nota de la orden'/>
                    </form>
                    <div>
                      <button className='border border-red-500 p-2 rounded-lg'>
                        <RiDeleteBin6Line className='text-red-500'/>
                      </button>
                    </div>
                  </div>
                 </div>
                                                    {/*Producto*/}
                 <div className='bg-[#262836] p-4 rounded-xl mb-6'>
                  <div className='grid grid-cols-6 mb-4'>
                    {/*Descripcion del producto */}
                  <div className='col-span-4 flex items-center gap-3'>
                      <img src='src\assets\imgs\Huevos-1.png' className='w-10 h-10 object-cover' />
                      <div>
                      <h5 className='text-sm'>Yogourt con frutos frescos y avena...</h5>
                      <p className='text-xs text-gray-500'>$99.00</p>
                      </div>
                    </div>
                    {/*Cantidad */}
                    <div>
                      <input type='number' className='bg-[#1F1D2B] w-8 text-center outline-none'placeholder='0' />
                    </div>
                    {/*Precio */}
                    <div className='ml-3'>
                    <span>$99</span>
                    </div>
                  </div>
                                   {/*Nota */}
                 <div className='grid grid-cols-6 gap-2'>
                    <form className='col-span-5'>
                      <input type='text' className='bg-[#1F1D2B] py-1 px-4 rounded-lg outline-none' placeholder='Nota de la orden'/>
                    </form>
                    <div>
                      <button className='border border-red-500 p-2 rounded-lg'>
                        <RiDeleteBin6Line className='text-red-500'/>
                      </button>
                    </div>
                  </div>
                 </div>
                                                    {/*Producto*/}
                <div className='bg-[#262836] p-4 rounded-xl mb-6'>
                  <div className='grid grid-cols-6 mb-4'>
                    {/*Descripcion del producto */}
                  <div className='col-span-4 flex items-center gap-3'>
                      <img src='src\assets\imgs\Huevos-1.png' className='w-10 h-10 object-cover' />
                      <div>
                      <h5 className='text-sm'>Yogourt con frutos frescos y avena...</h5>
                      <p className='text-xs text-gray-500'>$99.00</p>
                      </div>
                    </div>
                    {/*Cantidad */}
                    <div>
                      <input type='number' className='bg-[#1F1D2B] w-8 text-center outline-none'placeholder='0' />
                    </div>
                    {/*Precio */}
                    <div className='ml-3'>
                    <span>$99</span>
                    </div>
                  </div>
                                   {/*Nota */}
                 <div className='grid grid-cols-6 gap-2'>
                    <form className='col-span-5'>
                      <input type='text' className='bg-[#1F1D2B] py-1 px-4 rounded-lg outline-none' placeholder='Nota de la orden'/>
                    </form>
                    <div>
                      <button className='border border-red-500 p-2 rounded-lg'>
                        <RiDeleteBin6Line className='text-red-500'/>
                      </button>
                    </div>
                  </div>
                 </div>
                </div>

              </div>
            </div>
            {/* Submit payment*/}
            <div className='bg-[#262837] absolute bottom-0 p-6 w-[390px] text-gray-400'>
                <div className='flex items-center justify-between mb-4'>
                  <span>Descuento</span>
                  <span>$0</span>
                </div>
                <div className='flex items-center justify-between mb-6'>
                  <span>Subtotal</span>
                  <span>$1000</span>
                </div>
                <button className='bg-[#33D9B2] text-[#262837] text-xl font-bold w-full py-2 px-4 rounded-lg'>Pagar digitalmente</button>
              </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
