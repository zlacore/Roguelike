import { Player } from "../classes/character/player/players"
import { Enemy } from "../classes/character/enemy/enemy"


// const playerStr: string | null = localStorage.getItem('player')
// const player: Player = JSON.parse(playerStr!)

interface BattleProps {
    player: Player
    enemy: Enemy
}
export const Battle = (props: BattleProps) => {

    return (
        <>
            <div id='battlediv'>
                <div id='enemyinfo'>
                    <label>
                        {props.enemy?.name}: lvl{props.enemy?.level}
                    </label>
                    <progress className='healthbar' value={props.enemy?.health}></progress>
                </div>
                <img id='enemyimg' src={props.enemy.sprite}></img>
                <div id='playerinfo'>
                    <label>
                        Player: lvl{props.player.level}
                    </label>
                    <progress className='healthbar' value={props.player.health}> 50 </progress>
                    <progress className='expbar' value={props.player.xp}></progress>
                </div>
            </div>
        </>
    )
}