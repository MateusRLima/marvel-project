import React from 'react'
import './SearchInput.css'
import useForm from '../../../hooks/useForm';

const SearchInput = ({ heroSearch }) => {

  const [{ values }, handleChange, handleSubmit] = useForm();

  const searchHero = () => {
    heroSearch(values)
  };
  
	return (
		<div style={{marginBottom: "4rem"}}>
			<h1>Buscar de personagens</h1>
      <form onSubmit={handleSubmit(searchHero)}>
        <label htmlFor="searchInput">Nome do personagem</label>
        <input placeholder="Search" name="name" type="text" id="searchInput" onChange={handleChange}/>
        <input type="submit" className="button"></input>
      </form>
		</div>
	)
}

export default SearchInput
