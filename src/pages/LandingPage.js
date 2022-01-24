import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function LandingPage() {

    useEffect(() => {
        document.title = "PokeDex - Gotta catch em all";

        const pokeball = document.querySelector('svg');
        const isResolved = Math.random() > 0.5;
        let isFetched = false;
        function handleIteration() {
            if (isFetched) {
                pokeball.removeEventListener('animationiteration', handleIteration);
                pokeball.setAttribute('class', isResolved ? 'success' : 'failure');
            }
        }
    
        const intervalID = setInterval(() => {
            const odds = Math.random() > 0.75;
            if (odds) {
                isFetched = true;
                clearInterval(intervalID);
            }
        }, 1000);
    
        pokeball.setAttribute('class', 'fetching');
        pokeball.addEventListener('animationiteration', handleIteration);
      }, []);

  return (
    <div className='landing-page-cont'>

        <div className='pokeball-animation'>
            <svg viewBox="0 0 100 100" width="150" height="150">
                <g transform="translate(50 50) scale(0.8)">
                    <g className="stars" transform="scale(0)">
                        <path fill="#303030" stroke="#303030" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none" d="M -50 -50 l 4.5 0 l 2.5 -4.5 l 2.5 4.5 l 4.5 0 l -3.5 3.5 l 1.5 5 l -5 -2.5 l -5 2.5 l 1.5 -5 l -3.5 -3.5"></path>
                        <path fill="#303030" stroke="#303030" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none" d="M 36 -50 l 4.5 0 l 2.5 -4.5 l 2.5 4.5 l 4.5 0 l -3.5 3.5 l 1.5 5 l -5 -2.5 l -5 2.5 l 1.5 -5 l -3.5 -3.5"></path>
                    </g>
                    <g transform="translate(0 50)">
                        <g className="gravity">
                            <g transform="translate(0 -50)">
                                <g className="ball" transform="scale(1 1)">
                                    <g className="bottom">
                                        
                                        <path fill="#ffffff" stroke="#303030" strokeWidth="5" d="M -47.5 0 a 47.5 47.5 0 0 0 95 0z"></path>
                                    </g>
                                    <g className="top">
                                        <path fill="#f15d5f" d="M -47.5 0 a 47.5 47.5 0 0 1 95 0"></path>
                                        <path fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeDasharray="0 15 9 9 20 100" d="M -38 -0 a 38 38 0 0 1 76 0"></path>
                                        <path fill="none" stroke="#303030" strokeWidth="5" d="M -47.5 0 a 47.5 47.5 0 0 1 95 0z"></path>
                                    </g>
                        
                                    <g className="open" transform="scale(1 0)">
                                        <path fill="#303030" stroke="#303030" strokeWidth="5" strokeLinejoin="round" d="M -47.5 -10 a 190 190 0 0 1 95 0 a 190 190 0 0 1 -95 0"></path>
                                        <path fill="#303030" stroke="#303030" strokeWidth="5" strokeLinejoin="round" d="M -47.5 5 a 160 160 0 0 0 95 0 a 180 180 0 0 0 -95 0"></path>
                                    </g>
                        
                                    <g className="center">
                                        <circle fill="#ffffff" stroke="#303030" strokeWidth="5" cx="0" cy="0" r="12"></circle>
                                        <circle fill="#ffffff" stroke="#303030" strokeWidth="3" cx="0" cy="0" r="6"></circle>
                                        <g className="inner" opacity="0">
                                        <circle fill="#f15d5f" cx="0" cy="0" r="4.5"></circle>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>

        <div className="landing-buttons">
            <Link to='/pokemon-archive' className="butt">
                Open PokeDex
            </Link>
            <Link to='/pokedex.zip' className="butt" target="_blank" download>
                Download Code
            </Link>
        </div>

    </div>
  );
}

export default LandingPage;