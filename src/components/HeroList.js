import React, {useState, useEffect} from 'react'
import md5 from 'md5'

const HeroList = () => {

  const [heroes, setHeroes] = useState([])

  const timestamp = Date.now()
  const publicKey = '661772f1f3354e0effb6198047ae329b'
  const privateKey = '908b1efe444b5b85579fca43fab4602ec5532c7a'
  var hash = `${timestamp}${privateKey}${publicKey}`
  hash = md5(hash)

  useEffect(() => {
    const fetchHeroes =  () => {
      fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`, {method: 'get'})
        .then(res => res.json())
        .then(response => {
          setHeroes(response.data.results)
        })
    }

    fetchHeroes();
  }, [])

  return <ul>
          {heroes.map(hero => {
            return <li key={hero.id}>
              <img src={hero.thumbnail.path + hero.thumbnail.extension} alt='Retrato do heroi'/>
              {hero.name}
              </li>
          })}
        </ul>
}

export default HeroList
