import React from 'react'
import {data} from "../restapi.json"
const Menu = () => {
  return (
    <section className='menu' id='menu'>
        <div className='container'>
            <div className='heading_section'>
                <h1 className='heading'>
                    POPULAR DISHES
                </h1>
                <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a</p>
                <div className='dishes_container'>
                    {data[0].dishes.map((element)=>{
                    return(
                        <div className='card' key={element.id}>
                            <img src={element.image} alt={element.title}/>
                            <h3>{element.title}</h3>
                            <button>{element.category}</button>
                        </div>
                    )
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Menu