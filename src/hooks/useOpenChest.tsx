import { useGame } from "../utils/gameContext";
import { usePlayer } from "../utils/playerContext";
import { useRollScenario } from "./useScenario";
import { useSaveItem } from "./useSaveItem";
import { useGetGold } from "./useGetGold";
export const useOpenChest = () => {
    const {
        setIntObject,
        setEnemy,
        setEncounterImg,
        inBattle,
       items,
        hiddenEnemies,
        setNarration
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
        if (mimicChance > 0) {
            setIntObject(null)
            setEnemy(hiddenEnemies.mimic)
            setNarration("That wasn't a chest! The mimic lunges at you!")
            setEncounterImg(hiddenEnemies.mimic.sprite)
            inBattle(true)
            player.health -= 10
            savePlayer
        } else {
            saveItem(items.consumables.Potions.HealingPotionI)
            const chestGold = Math.floor(Math.random() * 100)
            getGold(chestGold)
            rollScenario()
            setIntObject(null)
        }
    }
    return { openChest }
}
