
import { usePlayer } from "../utils/playerContext";
import { Player } from "../classes/character/player/players";

export const useCreateCharacter = () => {
    const {
        player
    } = usePlayer()
    const createCharacter = () => {
        const newplayer = new Player('Player', 1, 0, 25, 20, 10, 10, 15, 25, 10, 20, 10, 10, 15, 10, 25, [], 15, 10, 'Player')
        const saveNewPlayer = localStorage.setItem('player', JSON.stringify(newplayer))
        saveNewPlayer
        console.log('Character Created!', player)
    }    
    return {createCharacter}
  }