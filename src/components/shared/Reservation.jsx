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
        const reservationGet= collection(db, "Registro de clientes")
        const reservationSnapshot = await getDocs(reservationGet)
        const listReservation = reservationSnapshot.docs.map (e => e.data())
        
        console.log(listReservation)
    }

        getReservation()

        


return(
    <>
    <form>
            <h3>Nombre</h3>
            <input value={name} type="text" placeholder="Escribe tu nombre" onChange={(e) => setName(e.target.value)} />
            <h3>Cantidad de personas</h3>
            <input value={number} type="number" placeholder="Numero de personas" onChange={(e) => setNumber (e.target.value)} />
            <h3>Fecha de reservacion</h3>
            <input value={date} type="date" onChange={(e) => setDate(e.target.value)} />
            <h3> Hora de reservacion</h3>
            <input value={time} type="time" onChange={(e) => setTime (e.target.value)} />
    </form>
    </>  

    
)

}


export default Reservation