import React from "react";
import { XIcon } from "@heroicons/react/outline";

function CardDetailModal({selectedCard, setSelectedCard}) {

  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedCard(null);
      document.body.classList.remove('bodyNoScroll')
    }
  };

  const closeModal = () => {
    setSelectedCard(null);
    document.body.classList.remove('bodyNoScroll')
  };

  return (
    <div className='modal-cont-out'>
      <div className="backdrop" onClick={handleClick}></div>
      <div className='poke-card-detail-modal' id='pk_d_cont'>
          <div className="icon-out">
            <XIcon className="icon x" onClick={closeModal}/>
          </div>
          <div className="modal-info">
            <div className='modal-sec left'>
              <p className='mag'>#{selectedCard.id}</p>
              <img src={selectedCard.img} alt={selectedCard.name} />
              <p>{selectedCard.name}</p>
            </div>
            <div className='modal-sec right'>
              <div className="att-sub-cont mag">
                <span>Type</span> 
                <div className="att-sub">{selectedCard.type.map((i, key) => { return (<span key={key} className="att">{i}</span>)})}</div>
              </div>
              <div className='mag'>Height: {selectedCard.height}</div>
              <div className='mag'>Weight: {selectedCard.weight}</div>
              <div className="att-sub-cont mag">
                <span>Weaknesses</span> 
                <div className="att-sub">{selectedCard.weaknesses.map((i, key) => { return (<span key={key} className="att">{i}</span>)})}</div>
              </div>
              <div className='mag'>Candy: {selectedCard.candy}</div>
              <div className='mag'>Egg: {selectedCard.egg}</div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default CardDetailModal;
