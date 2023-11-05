import React from 'react'
import { RiCloseFill, RiDeleteBin6Line } from "react-icons/ri";


function Carrito(Props) {
    const { showOrder, setShowOrder } = Props

  return (
    <div className={`lg:col-span-2 fixed top-0 bg-[#1F1D2A] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${showOrder ? " right-0" : "-right-full" }`}>
    {/*Carrito Ordeneeeeeeeeeeees*/}
    <div className='relative pt-16 lg:pt-8 text-gray-300 p-8 h-full  '>
      <RiCloseFill onClick={() => setShowOrder(false)} className='lg:hidden absolute left-4 top-4 p-2 box-content text-gray-300 bg-[#262837] rounded-full text-xl'/>
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
        <div className=' h-[400px] md:h-[700px] lg:-h-[540px] overflow-scroll'>
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
    <div className='bg-[#262837] absolute bottom-0 p-6 w-full text-gray-400'>
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
  )
}

export default Carrito