import React, {useState, useEffect} from 'react'
import HeroPagination from './HeroPaginationComponent/HeroPagination'
import SearchInput from './SearchComponent/SearchInput'
import './HeroList.css'
import md5 from 'md5'

const HeroList = () => {

  const [heroes, setHeroes] = useState([])
  const [pageData, setPageData] = useState({})
  const [offset, setOffset] = useState(0)
  const [offsetSearch, setOffsetSearch] = useState(0)
  const [heroSearch, setHeroSearch] = useState({})
  const [detailCollpase, setdetailCollpase] = useState([])

  
  const timestamp = Date.now()
  const publicKey = '661772f1f3354e0effb6198047ae329b'
  const privateKey = '908b1efe444b5b85579fca43fab4602ec5532c7a'
  let hash = `${timestamp}${privateKey}${publicKey}`
  hash = md5(hash)

  useEffect(() => {

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
  

  const paginate = pageNumber => {
      setOffset(pageNumber*10)
  }

  const searchHero = (hero, offset ) => {
      setOffsetSearch(offset)
      setHeroSearch(hero.name)
      console.log(hero.name)
      fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=10&offset=${offsetSearch}&nameStartsWith=${hero.name}`, {method: 'get'})
        .then(res => res.json())
        .then(response => {
          setPageData(response.data)
          setHeroes(response.data.results)
        })
  }

  const toggleCollapse = heroname => {
    const showRow = detailCollpase.slice()
    const index = showRow.indexOf(heroname)

    if(index >= 0) {
      showRow.splice(index, 1)
      setdetailCollpase(showRow)
    } else {
      showRow.push(heroname)
      setdetailCollpase(showRow)
    }
  }

  return <div className="table-container">

  <table className="hero-table">
  <SearchInput heroSearch={searchHero} />
    <tr className="hero-table-header">
      <th>Personagem</th>
      <th>Série</th>
      <th>Eventos</th>
    </tr>
    {heroes.map(hero => {
    return <>
    <tr onClick={() => toggleCollapse(hero.name)} key={hero.id} className="hero-table-content">
      <td className="hero-table-content-img">
        <img style={{borderRadius: "4px"}} src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt='Retrato do heroi' width='100px' height='100px'/>
        <p className="hero-table-content-name"><strong>{hero.name}</strong></p>
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
    {detailCollpase.includes(hero.name) && (
      <tr className="hero-table-detail">
        <table>
          <tr className="hero-detail-row">
            <th>Séries</th>
            <th>Eventos</th>
            <th>Histórias</th>
          </tr>
          <tr >
            <td className="hero-table-detail-content">
              {hero.series.items.slice(0, 10).map(serie => {
                return  <p>{serie.name}</p>
              })}
            </td>
            <td className="hero-table-detail-content">
              {hero.events.items.slice(0, 10).map(event => {
                return  <p>{event.name}</p>
              })}
            </td>
            <td className="hero-table-detail-content">
              {hero.stories.items.slice(0, 10).map(storie => {
                return  <p>{storie.name}</p>
              })}
            </td>
          </tr>
        </table>
      </tr>
    )}
    </>
    })}
  </table>
  <HeroPagination total={pageData.total} paginate={paginate} />
</div>
}

export default HeroList
