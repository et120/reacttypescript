import React, { useState } from 'react'
import Astronaut from '../Interfaces/Iinterface'

const AstronautComponent = (props: {shipName: string, members: string[]}) => {
  return (
    <div>
        {/* <h1>{astronautInfo?.people.map(person => `${person.name} ${person.craft} `)}</h1> */}
        <h3>{props.shipName}</h3>
        {
            props.members.map((name, index) => {
                return(
                    <div key={index}>
                        <h3>{name}</h3>
                        <hr />
                    </div>
                )
            })
        }
        {/* <hr /> */}
    </div>
  )
}

export default AstronautComponent
