import  { db } from "../../assets/firebase"
import React, { useEffect, useState } from "react"
import { collection, addDoc, getDocs } from "firebase/firestore/lite"



function Reservation() {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [reservation, setReservation] = useState([])


    async function getReservation() {
        const reservationGet= collection(db, "Colmena-Rest")
        const reservationSnapshot = await getDocs(reservationGet)
        const listReservation = reservationSnapshot.docs.map (e => e.data())
        
        setReservation(listReservation)
        console.log(getReservation)
    }


    useEffect(()=>{
        getReservation()
        },[])
         
    const handleNameChange = (event)=>{
            setName(event.target.value)
    }
         
    const handleNumberChange = (event)=>{
        setNumber(event.target.value)
    }
         
    const handleDateChange = (event)=>{
        setDate(event.target.value)
    }

    const handleTimeChange = (event)=>{
        setTime(event.target.value)
    }
         
    const handleSubmit = async (event)=>{
        event.preventDefault();
         
        try {
            const docRef = await addDoc(collection(db, "reservations"),{
                nombre: name,
                numero: number,
                date: date,
                time: time
            });
              console.log("Document written with ID: ", docRef.id)
                } catch (error) {
              console.log(error)
                } finally {
              setName('')
              setNumber("")
              setDate("")
              setTime("")
              getReservation()
            }
           
          }


return(
    <>
  
  <form className="bg-[#282836] text-white flex justify-center items-center gap-16 p-6 rounded-lg" onSubmit={handleSubmit}>
  <div className="flex flex-col items-center">
    <h1 className="text-3xl font-bold mb-4">Reserva tu mesa</h1>
    <img className="w-40 h-40 rounded-3xl w-[270px] h-[270px]" src="src/assets/imgs/Restaurant.png" alt="Restaurante" />
  </div>

  <div className="flex flex-col text-left">
    <div className="mb-4">
      <label htmlFor="name" className="text-lg">Nombre completo</label>
      <input
        id="name"
        value={name}
        type="text"
        placeholder="Escribe tu nombre"
        onChange={handleNameChange}
        className="bg-[#1E1C29] w-full outline-none p-2.5 rounded-lg mt-1"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="number" className="text-lg">Cantidad de personas</label>
      <input
        id="number"
        value={number}
        type="number"
        placeholder="Número de personas"
        onChange={handleNumberChange}
        className="bg-[#1E1C29] w-full outline-none p-2.5 mt-1 rounded-lg"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="date" className="text-lg">Fecha de reservación</label>
      <input
        id="date"
        value={date}
        type="date"
        onChange={handleDateChange}
        className="bg-[#1E1C29] w-full outline-none p-2 text-gray-400 rounded-lg mt-1"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="time" className="text-lg">Hora de reservación</label>
      <input
        id="time"
        value={time}
        type="time"
        onChange={handleTimeChange}
        className="bg-[#1E1C29] w-full p-2 outline-none rounded-lg text-gray-400 mt-1"
      />
    </div>

    <input type="submit" value="Reservar ahora" className="w-full py-2 bg-[#33D9B2] text-[#1E1C29] font-bold rounded-lg cursor-pointer" />
  </div>
</form>


    {reservation? reservation.map(rsv=> <h2>{rsv.name}</h2>): <h2>no hay</h2>}
    </>  

    
)

}


export default Reservation