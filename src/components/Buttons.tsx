// import { useState } from "react"
// import { Enemy } from "../classes/character/enemy/enemy"
// import { none } from "../classes/character/enemy/enemy" // Null enemy
// import { rollScenario, getGold, saveItem, openChest, createCharacter } from "../App"
// import
// // const [scene, setScene] = useState('town')
// // const [bg, setBg] = useState('town')
// const [narration, setNarration] = useState('Start Game')
// // const [btnText, setBtnText] = useState('start')
// const [started, start] = useState<boolean>(false)
// // const [battle, inBattle] = useState<boolean>(false)
// // const [enemy, setEnemy] = useState<Enemy>(none)
// // const [object, setObject] = useState('')
// // const [npc, setNpc] = useState('')
// // const [encounterImg, setEncounterImg] = useState('')

// interface ActionProps {
//     scenario: string
// }


// export const ActionButtons = ({ scenario }: ActionProps) => {
//     // Render different buttons depending on scenario (Monster, Merchant, Chest, Campfire, Nothing) 
//     return (
//         <>
//             <div id='acndiv'>
//                 {!started &&
//                     <button id='contbtn' onClick={() => {
//                         createCharacter()
//                         setNarration('Riding into town, you hop off your horse as you are greeted by an old man. You have come here to enter the dungeon and slay the monsters within, for a steep price of course. The old man hands you fifty gold coins, as well as a potion and a dagger.')
//                         start(true)
//                         console.log(started)
//                         saveItem(consumables.Potions.HealingPotionI)
//                         saveItem(weapons.Melee.Dagger)
//                         getGold(50)
//                         savePlayer
//                         setBtnText('Continue!')

//                     }}>{btnText}</button>

//                 }

//                 {scenario === 'Chest' &&
//                     <div className='btndiv'>
//                         <button onClick={() => rollScenario()}>
//                             Continue!
//                         </button>
//                         <button onClick={() => openChest()}>
//                             Open it!
//                         </button>
//                     </div>
//                 }
//             </div>
//         </>
//     )
// }

