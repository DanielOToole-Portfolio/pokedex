import React from "react";

function Card({pokeItems, setSelectedCard, searchText}) {

  return (
        <div className="poke-card-cont">
          {
            pokeItems.sort((a, b) => a.name.localeCompare(b.name)).filter((pokeItem) => {
              if(searchText === "") {
                return pokeItem;
              } else if(pokeItem.name.toString().toLowerCase().includes(searchText.toString().toLowerCase())) {
                return pokeItem;
              } 
            }).map(pokeItem => {
              return (
                <div className='poke-card' key={pokeItem.id}
                onClick={function () {
                  setSelectedCard(pokeItem)
                  document.body.classList.add('bodyNoScroll')
                }}>
                <div className='inner-info'>
                  <p>#{pokeItem.id}</p>
                  <img src={pokeItem.img} alt={pokeItem.name} />
                  <p>{pokeItem.name}</p>
                  <div className="att-sub-cont">
                    <span>Type</span>  
                    <div className="att-sub">{pokeItem.type.map((i, key) => { return (<span key={key} className="att">{i}</span>)})}</div>
                  </div>
                </div>
                <div className='poke-card-line'></div>
                  
                </div>
              )
            })
          }
        </div>
  );
}

export default Card;