import React, {useState} from "react";
import Card from "./CardItem";
import CardDetailModal from "./CardDetailModal";

function CardList({pokeItems, searchText} ) {

  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className='poke-card-list'>
      <div className='search-result-term'>
        {searchText ? (
          <h2>search results for '{searchText}'</h2>
        ) : null}
      </div>

      <Card pokeItems={pokeItems} searchText={searchText} setSelectedCard={setSelectedCard} />
    
      {selectedCard && (
        <CardDetailModal selectedCard={selectedCard} setSelectedCard={setSelectedCard} pokeItems={pokeItems} />
      )}

    </div>
  )
}

export default CardList;
