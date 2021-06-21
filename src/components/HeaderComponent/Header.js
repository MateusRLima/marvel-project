import React from 'react'
import LogoObjective from '../../assets/logo-objective.png'
import './Header.css'

const Header = () => {
    return (
      <div className="header">
        <div>
          <img src={LogoObjective} alt='Logo da Objective' width='150px' height='35px'/>
        </div>
        <p style={{marginLeft:"50rem"}}>
          <strong>Mateus Rosa de Lima </strong>
          Teste Front-end
        </p>
        <div className="candidate-abreviation">
          <strong>MR</strong>
        </div>
      </div>
    )
}

export default Header
