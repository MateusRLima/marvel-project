import React from 'react'
import LogoObjective from '../../assets/logo-objective.png'
import './Header.css'

const Header = () => {
    return (
      <div className="header">
          <img src={LogoObjective} alt='Logo da Objective' width='200px' height='50px'/>
          <p>
            <strong>Mateus Rosa de Lima</strong>
            Teste Front-end
          </p>
      </div>
    )
}

export default Header
