import { useGame } from "../utils/gameContext";
import { usePlayer } from "../utils/playerContext";
import { useRollScenario } from "./useScenario";
import { useSaveItem } from "./useSaveItem";
import { useGetGold } from "./useGetGold";
export const useOpenChest = () => {
    const {
        setObject,
        setEnemy,
        setEncounterImg,
        inBattle,
       items,
        enemies
    } = useGame()

    const {
        player,
        // savedPlayer,
        savePlayer
    } = usePlayer()

    const { getGold } = useGetGold()
    const { saveItem } = useSaveItem()
    const { rollScenario } = useRollScenario()

    const openChest = () => {
        const mimicChance = Math.random()
        if (mimicChance > .8) {
            setObject('')
            setEnemy(enemies.mimic)
            setEncounterImg(enemies.mimic.sprite)
            inBattle(true)
            console.log('Mimic encountered!', enemies.mimic.sprite)
            player.health -= 100
            savePlayer
        } else {
            saveItem(items.consumables.Potions.HealingPotionI)
            const chestGold = Math.floor(Math.random() * 100)
            getGold(chestGold)
            rollScenario()
            setObject('')
        }
    }
    return { openChest }
}
