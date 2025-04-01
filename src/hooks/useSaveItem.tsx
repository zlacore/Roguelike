import { usePlayer } from "../utils/playerContext";
import Item from "../classes/item/item";
export const useSaveItem = () => {
    const {
        player,
        savePlayer
    } = usePlayer()
    const saveItem = (item: Item) => {
        player.inventory.push(item)
        console.log(`${item.name} obtained!`)
        console.log("Player:", player)
        savePlayer()
      }
      return { saveItem }
}