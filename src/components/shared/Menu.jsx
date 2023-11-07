
import React, { useState } from "react"
import Sidebar from "./Sidebar"
import Card from "../Card1";
import Carrito from "../Carrito";
import Header from "../Header";
import { RiMenu3Fill, RiRestaurant2Fill, RiReservedFill, RiCloseFill, RiArrowDownSFill } from "react-icons/ri";
import Reservation from "./Reservation";
//IMAGENES DE MENU///////////////////////////
import Huevos1 from '../../assets/imgs/Huevos-1.png';
import Huevos2 from '../../assets/imgs/Huevos-2.png';
import Huevos3 from '../../assets/imgs/Huevos-3.png';
import Huevos4 from '../../assets/imgs/Huevos-4.png';
import Huevos5 from '../../assets/imgs/Huevos-5.png';
import Yogurt from '../../assets/imgs/yogurt.png';
import Footer from "./Footer";


function Menu() {
      
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
const array = [
  {
  image:Huevos1,
  text:"Huevos con verduras",
  price:"99,99"
},
{
  image:Huevos2,
  text:"Hotcake con huevos",
  price:"99,99"
},
{
  image:Huevos3,
  text:"Sope con huevo",
  price:"99,99"
},
{
  image:Huevos4,
  text:"Huevos green",
  price:"99,99"
},
{
  image:Huevos5,
  text:"Huevo con aguacate",
  price:"99,99"
},
{
  image:Yogurt,
  text:"Huevos green",
  price:"99,99"
},
{
  image:Huevos1,
  text:"Huevos con verduras",
  price:"99,99"
},
{
  image:Huevos2,
  text:"Hotcake con huevos",
  price:"99,99"
},
{
  image:Huevos3,
  text:"Sope con huevo",
  price:"99,99"
},
{
  image:Huevos4,
  text:"Huevos green",
  price:"99,99"
},
{
  image:Huevos5,
  text:"Huevo con aguacate",
  price:"99,99"
},
{
  image:Yogurt,
  text:"Huevos green",
  price:"99,99"
},
]

    return(
        <>
        <div className="bg-[#262836] w-full min-h-screen">
        <Sidebar showMenu={showMenu}/>
        <Carrito showOrder={showOrder} setShowOrder={setShowOrder} ></Carrito>
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
        <main className="lg:pl-32 lg:pr-96  pb-20">
          <div className="md:p-8 p-4">
            {/* Header */}
            <Header />
            {/* Tititulo del contenedor*/}
            <div className='flex items-center justify-between mb-20'>
                <h2 className='text-xl text-gray-300'>Escoje tu desayuno</h2>
                <button className='w-[150px] flex items-center gap-3 text-gray-300 bg-[#1F1D2A] pl-2.5 py-2 py-4 rounded-lg'><RiArrowDownSFill/>Desayunar en</button>
            </div>
            {/*Contenido*/}
            <div className='py-8 pr-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
              {/*card*/}
              {array.map( plato => {
                return <Card image = {plato.image} text = {plato.text}price = {plato.price}/>
              })}
            </div>
            <Reservation />
            <Footer />

          </div>

        </main>
      </div>
      </>
    )
}

export default Menu