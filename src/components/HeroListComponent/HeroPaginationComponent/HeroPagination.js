import React, {useState, useEffect} from 'react'
import './HeroPagination.css'

const HeroPagination = ({total, paginate}) => {

  const totalPages = total / 10

  let pageNumbers = []

  for (var i = 1; i < totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className="nav-pagination">
      <ul>
        {pageNumbers.map(number => 
        (
          <li key={number}>
            <a onClick={() => paginate(number)}>{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default HeroPagination
