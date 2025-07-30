
import { useGame } from "../utils/gameContext"
// import { useInventory } from "../hooks/useInventory"

export const IntObject = () => {

    const { intObject} = useGame()

    const openChest = () => {
        // TODO: Write logic to open chest
        // If it is a chest, add random chest loot item to player's inventory
        // If it is a mimic, enter battle with mimic
    }
    const handleInteraction = () => {
        if (intObject?.name === 'Chest') {
            openChest()
        } else if (intObject?.name === 'Brazier') {
            // Rest
        }
    }
    return (
    <div id='objectdiv'>
        <img id='objectimg' src={intObject?.sprite}></img>
        <button onClick={handleInteraction}>
            {intObject?.name === 'Chest' ? 'Open Chest': 'Rest'}
        </button>
    </div>
    )
}