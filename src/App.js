import { useState } from 'react';
import './App.css';

const URL = {
  searchTitle: 'https://www.cheapshark.com/api/1.0/games'
}

function App() {

  const [gameTitle, setGameTitle] = useState('');
  const [searchedGames, setSearchedGames ] = useState([]);

  const searchGame = () => {
    fetch(`${URL.searchTitle}?title=${gameTitle}&limit=4`)
      .then((res) => res.json())
      .then((data) => {
        console.log({data});
        setSearchedGames(data)
      })
      .catch((err) => {
        console.error(err);
      })
  }

  return (
    <div className="App">
      <div className="searchSection">
        <h1>Search for a Game</h1>
        <input className='search-input' type="text" placeholder="Marvel's Spiderman" onChange={(event) => setGameTitle(event?.target?.value)} />
        <button className='search-btn' onClick={searchGame} >Search Game</button>

        <div className="games">
          {
            searchedGames && searchedGames?.map((game, key) => {
              return (
                <div className="game">
                  {game?.external}
                  <img src={game?.thumb} alt=""  />
                  ${game?.cheapest}
                </div>
              )
            })
          }
        </div>

      </div>
      <div className="dealsSection">
        <h1>Hot Deals 🔥</h1>

      </div>
    </div>
  );
}

export default App;
