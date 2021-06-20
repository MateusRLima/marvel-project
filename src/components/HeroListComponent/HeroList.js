import React, {useState, useEffect} from 'react'
import HeroPagination from './HeroPaginationComponent/HeroPagination'
import SearchInput from '../SearchComponent/SearchInput'
import './HeroList.css'
import md5 from 'md5'

const HeroList = () => {

  const [heroes, setHeroes] = useState([])
  const [pageData, setPageData] = useState({})
  const [offset, setOffset] = useState(0)
  
  useEffect(() => {
    const timestamp = Date.now()
    const publicKey = '661772f1f3354e0effb6198047ae329b'
    const privateKey = '908b1efe444b5b85579fca43fab4602ec5532c7a'
    var hash = `${timestamp}${privateKey}${publicKey}`

    hash = md5(hash)

    const fetchHeroes = () => {
      fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=10&offset=${offset}`, {method: 'get'})
        .then(res => res.json())
        .then(response => {
          setPageData(response.data)
          setHeroes(response.data.results)
        })
    }

    fetchHeroes();
  }, [offset])

  const paginate = (pageNumber) => {
    setOffset(pageNumber*10)
  }

  return <div className="table-container">


  <table className="hero-table">
  <SearchInput />
    <tr className="hero-table-header">
      <th>Personagem</th>
      <th>Série</th>
      <th>Eventos</th>
    </tr>
    {heroes.map(hero => {
    return <>
    <tr key={hero.id} className="hero-table-content">
      <td className="hero-table-content-img">
        <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt='Retrato do heroi' width='100px' height='100px'/>
        <p><strong>{hero.name}</strong></p>
      </td>
      <td className="hero-table-content-serie">
        {hero.series.items.slice(0, 3).map(serie => {
          return  <p>{serie.name}</p>
        })}
        
      </td>
      <td className="hero-table-content-event">
        {hero.events.items.slice(0, 3).map(event => {
          return  <p>{event.name}</p>
        })}
      </td>
    </tr>
    </>
    })}
  </table>
  <HeroPagination total={pageData.total} paginate={paginate} />
</div>
}

export default HeroList
