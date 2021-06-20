import React, {useState, useEffect} from 'react'

const HeroPagination = ({total, offset}) => {
  
  const totalPages = total / 10
  let texto = []
  for (var i = 0; i < totalPages; i++) {
    texto.push(<p>{i}</p>)
  }

  return (
    <div>
      {texto}
    </div>
  )
}

export default HeroPagination
