import React, {useState} from "react";
import { XCircleIcon } from "@heroicons/react/outline";


function Searchbar({setSearchText}) {

  const [ clear, setClear] = useState('')

  const handleInput = (e) => {
    const text = e.target.value 
    setSearchText(text)
    setClear(text)
  }
  const handleX = () => {
    setSearchText('')
    setClear('')
  }

  return (
      <div className='search-cont'>
          <input
            className="search-input"
            onChange={handleInput}
            value={clear}
            type="text"
            placeholder="Search for pokemon..."
          />
          <div className="search-clear" onClick={handleX}>
            <XCircleIcon />
          </div>
      </div>
  );

}

export default Searchbar;