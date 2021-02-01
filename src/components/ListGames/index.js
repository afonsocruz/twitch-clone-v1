import { useState, useEffect } from 'react';

import api from '../../services/api';

import { ListGamesStyle } from './styles';

export default function ListGames() {

    const [games, setGames] = useState([]);
    
    useEffect(() => {
        api.get('get-games')
            .then((response) => {
                setGames(response.data);
            }).catch((err) => {
                console.log(err);
            })
    })
    

    return (
       <ListGamesStyle>
            {games.map(game => (
                <div className="cardGame" key={game.id}>
                    <img src={game.imageUrl} className="cardGameImage" alt={game.name}/>
                    <span title={game.name}>{game.name}</span>
                </div>
            ))}    
       </ListGamesStyle> 
    )
}