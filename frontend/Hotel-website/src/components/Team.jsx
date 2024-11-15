import React from 'react'
import {data} from "../restapi.json"

const Team = () => {
  return (
    <section className='team' id='team'>
        <div className='container'>
            <div className='heading_section'>
                <h1 className='heading'>OUR TEAM</h1>
                <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a</p>

            </div>
            <div className='team_container'>
                {
                    data[0].team.map((element)=>{
                       return <div className='card' key={element.id}>
                           <img src={element.image} alt={element.name} /> 
                           <h3>{element.name}</h3>
                           <p>{element.designation}</p>


                        </div>
                    })
                }
            </div>
        </div>
        
    </section>
  )
}

export default Team