import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from "react-icons/hi"

const About = () => {
  return (
    <section id='about' className='about'>
    <div className='container'>
        <div className='banner'>
            <div className='top'>
                <h1 className='heading'>
                   ABOUT use 
                </h1>
                <p>The Only thing we are serious about is food</p>
            </div>
            <p className='mid'>
            lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <Link to={"/"}>Explore Menu <span><HiOutlineArrowNarrowRight/></span></Link>
        </div>

        <div className='banner'>
            <img src='/about.png' alt='about'/>
        </div>
    </div>


    </section>
  )
}

export default About