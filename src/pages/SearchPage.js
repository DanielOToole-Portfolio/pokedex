import { useState, useEffect } from 'react';

//Components
import CardList from '../components/CardList';
import Searchbar from '../components/SearchBar';

// api
import api from '../api/pokemonApi';


function SearchPage() {

  const [pokeItems, setPokeItems ] = useState([])
  const [searchText, setSearchText] = useState('')


  useEffect((baseURL) => {
    document.title = "PokeDex - Archives";

    const fetchPokemon = async () => {
      try {
        const res = await api.get(baseURL)
        setPokeItems(res.data.pokemon)
      } catch(err) {
        if(err.res) {
          console.log(err.res.data)
        } else {
          console.log(`Error: ${err.message}`)
        }
      }
    }

    fetchPokemon();

  }, [])

  return (
    <div className='search-page-cont'>
      <h1>PokeDex</h1>
      <Searchbar setSearchText={setSearchText} />
      <CardList pokeItems={pokeItems} searchText={searchText} />
    </div>
  );
}

export default SearchPage;