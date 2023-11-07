import React from 'react';
import { RiFacebookCircleFill, RiWhatsappFill, RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#1F1D2B] text-white py-8 mt-[200px]">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Colmena Rest</h2>
        <p className="text-sm text-gray-400">Tu destino para experiencias gastronómicas inolvidables</p>
        <div className="flex flex-wrap justify-between space-x-40 mt-4">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 my-4">
            <h3 className="text-lg font-semibold text-[#33D9B2]">Contacto</h3>
            <p className='text-gray-500'>Dirección: Calle Principal 123</p>
            <p className='text-gray-500'>Teléfono: +123 456 789</p>
            <p className='text-gray-500'>Email: info@colmensarest.com</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 my-4">
            <h3 className="text-lg font-semibold text-[#33D9B2] ">Horario</h3>
            <p className='text-gray-500 text-sm'>Lunes a Viernes: 12:00 - 22:00 HRS</p>
            <p className='text-gray-500 text-sm'>Sábados: 11:00 AM - 11:00 PM</p>
            <p className='text-gray-500 text-sm'>Domingos: Cerrado</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 my-4">
            <h3 className="text-lg font-semibold text-[#33D9B2] mb-1">Redes Sociales</h3>
            <div className='flex flex-row justify-between'>
                <a href="#" className="text-gray-500 hover:underline text-xl"><RiFacebookCircleFill/></a>
                <a href="#" className="text-gray-500 hover:underline text-xl "><RiWhatsappFill /></a>
                <a href="#" className="text-gray-500 hover:underline text-xl"><RiTwitterXFill/></a>
            </div>
          </div>
          {/* Agregar más columnas con datos según sea necesario */}
        </div>
        <div className="text-center mt-8">
          <p>&copy; {new Date().getFullYear} Colmensa Rest. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
