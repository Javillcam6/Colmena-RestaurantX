import React from "react";
import { RiHomeSmileFill, RiRestaurant2Fill, RiReservedFill, RiLoginBoxFill, RiSettings4Fill } from "react-icons/ri";
const Sidebar = (props) => {

    const { showMenu } = props;

    return (
        <diV className={`bg-[#1F1D2A] fixed lg:left-0 top-0 w-30 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${showMenu ? "left-0" : "-left-full" }`}>
           <div>
           <ul className="pl-4">
                <li>
                <img className="w-24 my-5" src="src\assets\imgs\C_R-removebg-preview.png" alt="Descripción de la imagen" />
                </li>
                <li className="hover:bg-[#262836] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                    <a href="#" className="group-hover:bg-[#33d9b2] p-4 flex justify-center block rounded-lg text-[#33d9b2] group-hover:text-[#dff9fb] transition-colors">
                        <RiHomeSmileFill className=" text-2xl" />
                    </a>
                </li>
                <li className="hover:bg-[#262836] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                    <a href="#" className="group-hover:bg-[#33d9b2] p-4 flex justify-center block rounded-lg text-[#33d9b2] group-hover:text-[#dff9fb] transition-colors">
                        <RiRestaurant2Fill className=" text-2xl" />
                    </a>
                </li>
                <li className="hover:bg-[#262836] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                    <a href="#" className="group-hover:bg-[#33d9b2] p-4 flex justify-center block rounded-lg text-[#33d9b2] group-hover:text-[#dff9fb] transition-colors">
                        <RiReservedFill className=" text-2xl" />
                    </a>
                </li>
                <li className="hover:bg-[#262836] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                    <a href="#" className="group-hover:bg-[#33d9b2] p-4 flex justify-center block rounded-lg text-[#33d9b2] group-hover:text-[#dff9fb] transition-colors">
                        <RiSettings4Fill className=" text-2xl" />
                    </a>
                </li>
            </ul>
           </div>
           <div>
            <ul className="pl-4">
                <li className="hover:bg-[#262836] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                    <a href="#" className="group-hover:bg-[#33d9b2] p-4 flex justify-center block rounded-lg text-[#33d9b2] group-hover:text-[#dff9fb] transition-colors">
                        <RiLoginBoxFill className=" text-2xl" />
                    </a>
                </li>
            </ul>
           </div>
          
        </diV>
        
        )
}

export default Sidebar
