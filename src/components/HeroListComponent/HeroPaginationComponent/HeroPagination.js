import React from 'react'
import './HeroPagination.css'

const HeroPagination = ({total, paginate}) => {
  

  const totalPages = total / 10

  let pageNumbers = []

  for (var i = 0; i < totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className="nav-pagination">
      <ul>
        {pageNumbers.map(number => 
        (
          <li key={number}>
            <button className='page-button' onClick={() => {paginate(number, 0);}} autoFocus>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default HeroPagination
