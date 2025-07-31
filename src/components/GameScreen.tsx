import { useState } from "react";
import { useGame } from "../utils/gameContext";
import { usePlayer } from "../utils/playerContext";
import { Battle } from "./Battle";
import { IntObject } from "./InteractibleObject";
import { NPC } from "./NPC";
import { useRollScenario } from "../hooks/useScenario";
import { useBattle } from "../hooks/useBattle";
import { Consumable } from "../classes/item/consumables";
export function GameScreen() {
  type BattleMenuState = 'main' | 'attack' | 'item'
  const [activeMenu, setActiveMenu] = useState<BattleMenuState>('main')


  const {
    bg, battle, enemy, narration, started,
    setNarration, setStarted, setBtnText, btnText,
    setBg, merchant, intObject
  } = useGame();

  const { player, createCharacter, savePlayer } = usePlayer();
  const { rollScenario } = useRollScenario()
  const { playerAttack, flee, useItem } = useBattle()


  const setBattleMenu = (activeMenu: BattleMenuState) => {
    return (
      <>
        {activeMenu === 'main' && (
          <>
            <button onClick={() => setActiveMenu('attack')}>Attack</button>
            <button onClick={() => setActiveMenu('item')}>Use Item</button>
            <button onClick={flee}>Flee</button>
          </>
        )}

        {activeMenu === 'attack' && (
          <>
            <div>
              <button onClick={() => playerAttack}>Skill 1</button>
              <button>Skill 2</button>
            </div>
            <div>
              <button>Skill 3</button>
              <button>Skill 4</button>
            </div>
            <button onClick={() => setActiveMenu('main')}>Back</button>
          </>
        )}

        {activeMenu === 'item' && (
          <>
            {
              player.inventory.map((item, index) => {
                if (item instanceof Consumable) return (
                  <div key={index}>
                    <img src={item.sprite}></img>
                    <button onClick={() => useItem(item)}>
                      {item.name}
                    </button>
                  </div>
                )
              })
            }
            <button onClick={() => setActiveMenu('main')}>Back</button>
          </>
        )}
      </>
    )

  }
  const handleContinue = () => {
    console.log('New scenario rolled!')
    rollScenario()
  }
  const handleStart = () => {
    console.log('Game Started!')
    createCharacter();
    setNarration('Welcome to the game!');
    setStarted(true);
    setBtnText('Continue');
    setBg('./assets/backgrounds/dungeon1.png')
    savePlayer();
  };

  return (
    <div id='gamescreen'>
      <img src={bg} id='gamebg' />
      <h1>{narration}</h1>

      {!started && (
        <button onClick={handleStart}>
          {btnText}
        </button>
      )}

      {started && (
        <>
          <div className='game-content-area'
            style={{
              minHeight: '50px',// ✅ Set this to Battle component's height
              // border: '2px solid black',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start'
            }}
          >
            {battle && enemy && <Battle player={player} enemy={enemy} />}
            {intObject && <IntObject />}
            {merchant && <NPC />}
          </div>
          <div className='button-area'>
            {battle && enemy && (
              <>
                {setBattleMenu(activeMenu)}
              </>
            )}

            {intObject && (
              <>
                {/* <button onClick={handleOpenChest}>Open {intObject.name}</button>
                */}
                <button onClick={handleContinue}>Continue</button> 
              </>
            )}

            {merchant && (
              <>
                {/* <button onClick={handleBuy}>Buy</button>
                <button onClick={handleSell}>Sell</button>*/}
                <button onClick={handleContinue}>Continue</button>
              </>
            )}

            {!battle && !intObject && !merchant && (
              <button onClick={handleContinue}>Continue Exploring</button>
            )}


          </div>
        </>

        //   {/* {intObject && <IntObject img={intObject.sprite} />} */}

      )}
    </div>
  );
}


// import React from "react";
// import { useEffect } from "react";

// interface gameScreenProps {
//   bg: string;
//   battle: boolean;
//   enemy: Enemy | null;
//   player: Player;
//   narration: string;
//   started: boolean;
//   merchant: Merchant | null;
//   setMerchant: (value: Merchant) => void;
//   setNarration: (text: string) => void;
//   start: (value: boolean) => void;
//   saveItem: (item: any) => void;
//   getGold: (amount: number) => void;
//   savePlayer: () => void;
//   setBtnText: (text: string) => void;
//   // createCharacter: () => void;
//   btnText: string;
//   rollScenario: () => void;
//   scene: string;
//   setScene: (scene: string) => void;
//   intObject: IntObj | null;
//   openChest: () => void;
//   img: string;
// }

// export function GameScreen() {
//   const {
//   bg,
//   battle,
//   enemy,
//   // player,
//   narration,
//   started,
//   setNarration,
//   start,
//   // saveItem,
//   // getGold,
//   // savePlayer,
//   setBtnText,
//   btnText,
//   // rollScenario,
//   scene,
//   setScene,
//   // createCharacter,
//   // openChest,
//   merchant,
// } = useGame()
// const {player, createCharacter, savePlayer} = usePlayer()
// useEffect(() => {

// }, [enemy, narration, battle])

// return (

// <div id='gamescreen'>
//   <img src={bg} id='gamebg' />

//   {
//     /* {encounterImg.length > 0 &&
//      <img src={encounterImg} id='encounterimg' />
//     } */
//   }
//   {battle && enemy && <Battle player={player} enemy={enemy} />}

//   {/* {intObject && <IntObject img={intObject.sprite} />} */}

//   {merchant && <NPC />
//   }

//   <div id='acndiv'>
//     <h1>{narration}</h1>
//     <div id='btndiv'>

//       {!started && <button id='contbtn' onClick={() => {
//         // setBg('./assets/backgrounds/town.jpg')
//         createCharacter();
//         setNarration('Riding into town, you hop off your horse as you are greeted by an old man. You have come here to enter the dungeon and slay the monsters within, for a steep price of course. The old man hands you fifty gold coins, as well as a potion and a dagger.');
//         start(true);
//         console.log(started);
//         // saveItem(items.consumables.Potions.HealingPotionI);
//         // saveItem(items.weapons.Melee.BasicSword);
//         // getGold(50);
//         savePlayer;
//         setBtnText('Continue!');
//       }}>{btnText}</button>}

//       {started && <button onClick={() => {
//         rollScenario();

//         if (scene !== 'dungeon') {
//           setScene('dungeon'); // Add logic to display battle elements, merchant elements or loot elements.
//           // setBg('./assets/backgrounds/dungeon1.png')
//         }
//       }}>{btnText}
//       </button>}

//       <ButtonSets />


//     </div>
//   </div>
// </div>
//     <>
//     </>
//   )
// }
