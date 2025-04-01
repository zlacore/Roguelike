import { usePlayer } from "../utils/playerContext";

export const useGetGold = () => {
    const {
        player,
        savePlayer,
    } = usePlayer()
    const getGold = (amount: number) => {
        player.gold += amount
        console.log(`You received ${amount} gold!`)
        console.log("Player:", player)
        savePlayer()
    }
    return { getGold }
}