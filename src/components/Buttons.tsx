// //TODO: Create logic to render different sets of buttons depending on scenario.
// import { useGame } from "../utils/gameContext";
// import { useBattle } from "../utils/battleLogic";
// export const ButtonSets = () => {
//     const {intObject, battle} = useGame()
//     const {playerAttack} = useBattle()
//     return (
//         <>
//          {intObject?.name === 'Chest' && <>
//             <button onClick={() => {
//               openChest();
//             }}>
//               Open it!
//             </button>
//           </>
//           }


//           {intObject?.name === 'Brazier' && <div>
//             <button>
//             Rest!
//             </button>
//           </div>
//           }

//           {battle && <>
//             <button 
//             onClick={() => {
//                 executeTurnOrder("attack")
//             }}
//             >Attack</button>

//             <button 
//             onClick={() => {
//                 executeTurnOrder("useitem")
//             }}
//             >Item</button>
//           </>
//           }
//         </>
//     )
// }