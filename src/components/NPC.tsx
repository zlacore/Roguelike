import { useGame } from "../utils/gameContext"


export const NPC = () => {
    const { merchant } = useGame()
    return (
        <>
            <div>
                <img id='npcimg' src={merchant?.sprite}></img>
            </div>
        </>
    )
}