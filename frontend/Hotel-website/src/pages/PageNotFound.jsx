import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
const PageNotFound = () => {
  return (
    <section className='notFound' id='notFound'>
      <div className='container'>
        <img src='/notFound.svg' alt='notFound'/>
        <h1>LOOKS LIKE YOU'RE LOST</h1>
        <p>We Can't Found What's You Looking for</p>
        <Link to={"/"}>Back To Home <span>{HiOutlineArrowNarrowRight}</span></Link>
      </div>
    </section>
  )
}

export default PageNotFound