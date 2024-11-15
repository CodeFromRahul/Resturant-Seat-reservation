import React, { useState ,useEffect} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";const Success = () => {
  const [countDown,setCountDown]=useState(10);
  const navigate = useNavigate()

  useEffect(()=>{
    const timeId =setInterval(()=>{
      setCountDown((prevCount)=>{
        if(prevCount===1){
          clearInterval(timeId)
          navigate("/")
        }

        return prevCount-1;
      })
    },1000)
    return ()=>clearInterval(timeId)
  },[navigate])

  return (
    <>
    <section className="notFound">
      <div className="container">
        <img src="/sandwich.png" alt="success" />
        <h1>Redirecting to Home in {countDown} seconds...</h1>
        <Link to={"/"}>
          Back to Home <HiOutlineArrowNarrowRight />
        </Link>
      </div>
    </section>
  </>
  )
}

export default Success