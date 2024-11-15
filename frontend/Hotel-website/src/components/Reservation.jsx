import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import axios from "axios"
import { useState } from 'react'
import toast from 'react-hot-toast'




const Reservation = () => {
    const [firstName,setFirstname] = useState("")
    const [lastName,setLastname] = useState("")
    const [Email,setEmail] = useState("")
    const [phoneNumber,setPhoneNumber] = useState(0)
    const [Date,setDate] = useState("")

    const handleReservation = async(e)=>{
        e.preventDefault()
        try {
            const {data} = await axios.post("http://localhost:4001/api/v1/reservation/send",
                {firstName,lastName,Date,Email,phoneNumber},
            {
                headers:{
                    "Content-Type":"application/json"
                },
                withCredentials:true
            })
            toast.success(data.message);
            setFirstname("")
            setLastname("")
            setPhoneNumber(0)
            setEmail("")
            setDate("")
            Navigate("/success")    
        } catch (error) {
            toast.error(error)
            
        }

    }
  return (
    <section className='reservation' id='reservation'>
    <div className='container'>
        <div className='banner'>
            <img src='/reservation.png' alt='res'/>

        </div>
        <div className='banner'>
            <div className='reservation_form_box'>
                <h1>MAKE A RESERVATION</h1>
                <p>For Further Questions , Please Call</p>
                <form>
                    <div>
                        <input type='text' placeholder='First Name' value={firstName} onChange={(e)=>setFirstname(e.target.value)}/>
                        <input type='text' placeholder='Last Name' value={lastName} onChange={(e)=>setLastname(e.target.value)}/>

                    </div>
                    <div>
                    <input type='Date' placeholder='Date' value={Date} onChange={(e)=>setDate(e.target.value)}/>
                    


                    </div>
                    <div>
                    <input type='email' placeholder='Email' value={Email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type='number' placeholder='Phone Number ' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
                  

                    </div>
                    <button type='submit' onClick={handleReservation}>Reserve Now{" "}
                    <span><HiOutlineArrowNarrowRight/></span></button>

                </form>

            </div>
        </div>
    </div>

    </section>
  )
}

export default Reservation