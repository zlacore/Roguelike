// import React from "react";
// import { useEffect } from "react";
import { useGame } from "../utils/gameContext";
import { Enemy } from "../classes/character/enemy/enemy";
import { Player } from "../classes/character/player/players";
import { Battle } from "./Battle";
import { NPC } from "./NPC";
import { IntObject } from "./InteractibleObject";
import { IntObj } from "../classes/objects/object";
import { Merchant } from "../classes/character/npc/merchant";
import '../assets/App.css'
interface gameScreenProps {
  bg: string;
  battle: boolean;
  enemy: Enemy | null;
  player: Player;
  narration: string;
  started: boolean;
  merchant: Merchant | null;
  setMerchant: (value: Merchant) => void;
  createCharacter: () => void;
  setNarration: (text: string) => void;
  start: (value: boolean) => void;
  saveItem: (item: any) => void;
  getGold: (amount: number) => void;
  savePlayer: () => void;
  setBtnText: (text: string) => void;
  btnText: string;
  rollScenario: () => void;
  scene: string;
  setScene: (scene: string) => void;
  intObject: IntObj | null;
  openChest: () => void;
  img: string;
}

export function GameScreen({
  bg,
  battle,
  enemy,
  player,
  narration,
  started,
  createCharacter,
  setNarration,
  start,
  saveItem,
  getGold,
  savePlayer,
  setBtnText,
  btnText,
  rollScenario,
  scene,
  setScene,
  openChest,
  merchant,
}: gameScreenProps) {
  const { items, setBg, intObject} = useGame()


  return (
    <div id='gamescreen'>
      <img src={bg} id='gamebg' />

      {
        /* {encounterImg.length > 0 &&
         <img src={encounterImg} id='encounterimg' />
        } */
      }
      {battle && enemy && <Battle player={player} enemy={enemy} />}

      {intObject && <IntObject img={intObject.sprite} />}

      {merchant && <NPC />
      }

      <div id='acndiv'>
        <h1>{narration}</h1>
        <div id='btndiv'>

          {!started && <button id='contbtn' onClick={() => {
            setBg('./assets/backgrounds/town.jpg')
            createCharacter();
            setNarration('Riding into town, you hop off your horse as you are greeted by an old man. You have come here to enter the dungeon and slay the monsters within, for a steep price of course. The old man hands you fifty gold coins, as well as a potion and a dagger.');
            start(true);
            console.log(started);
            saveItem(items.consumables.Potions.HealingPotionI);
            saveItem(items.weapons.Melee.BasicSword);
            getGold(50);
            savePlayer;
            setBtnText('Continue!');
          }}>{btnText}</button>}

          {started && <button onClick={() => {
            rollScenario();

            if (scene !== 'dungeon') {
              setScene('dungeon'); // Add logic to display battle elements, merchant elements or loot elements.
              setBg('./assets/backgrounds/dungeon1.png')
            }
          }}>{btnText}
          </button>}

          {intObject?.name === 'Chest' && <>
            <button onClick={() => {
              openChest();
            }}>
              Open it!
            </button>
          </>
          }


          {intObject?.name === 'Brazier' && <div>
            <button>
            Rest!
            </button>
          </div>
          }
        </div>
      </div>
    </div>
  )
}
