import React from 'react'
import './SearchInput.css'

const SearchInput = () => {
	return (
		<div style={{marginBottom: "4rem"}}>
			<h1>Buscar de personagens</h1>
			<label htmlFor="searchInput">Nome do personagem</label>
			<input placeholder="Search" type="text" id="searchInput"></input>
		</div>
	)
}

export default SearchInput
