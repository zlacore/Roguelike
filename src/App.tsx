
import { useState } from 'react'
import { useEffect } from 'react'
import { Player } from './classes/character/player/players'
import Item from './classes/item/item'
import { consumables } from './classes/item/consumables'
import { weapons } from './classes/item/weapons'
import { assets } from './assets/index.ts'
import { enemies, hiddenEnemies } from './classes/character/enemy/enemy.ts'
// const { placeholder } = assets

const playerStr: string | null = localStorage.getItem('player')
const player: Player = JSON.parse(playerStr!)
const savePlayer = localStorage.setItem('player', JSON.stringify(player))
import './assets/placeholder.jpg'
function App() {
  const [scene, setScene] = useState('town')
  const [bg, setBg] = useState('town')
  const [narration, setNarration] = useState('Start Game')
  const [btnText, setBtnText] = useState('start')
  const [started, start] = useState<boolean>(false)
  let inBattle = false
  const [encounter, setEncounter] = useState('')
  const [encounterImg, setEncounterImg] = useState('')

  useEffect(() => {
    if (scene === 'town') {
      setBg('https://art.ngfiles.com/images/3004000/3004027_thisisgevorkart_townscape.jpg?f1674463154')
      console.log('background changed!')
    } else if (scene === 'dungeon') {
      setBg('./assets/backgrounds/dungeon1.png')
    }
    if (started && scene === 'dungeon' && encounter !== 'Mimic') {
      setNarration(`Venturing into the dungeon, you encounter a ${encounter}`)
    }
  }, [started, scene, encounter])

  // Update player information or restart game if player died
  useEffect(() => {
    const playerStr: string | null = localStorage.getItem('player')
    const player: Player = JSON.parse(playerStr!)
    const savePlayer = localStorage.setItem('player', JSON.stringify(player))
    savePlayer
    console.log('Player state:', player)
    if (player.health <= 0) {
      start(false)
      console.log('You died!')
      setNarration(`${narration}. You died!`)
    }
  }, [player])

  const rollScenario = () => {
    const scenarios = ['Monster', 'Chest', 'Merchant']
    const randomScenario: string = scenarios[Math.floor(Math.random() * scenarios.length)]
    if (randomScenario === 'Monster') {
      const randomMonster = enemies[Math.floor(Math.random() * enemies.length)]
      setEncounter(randomMonster.name)
      setEncounterImg(randomMonster.sprite)
      console.log(randomMonster.sprite)
      setNarration(`Venturing into the dungeon, you encounter a ${enemies[0].name}`)
      // console.log(enemies.slime.name)
      console.log(encounter)
    } else if (randomScenario === 'Chest') {
      const randomLootItem = 'Random Loot'
      setEncounter('Chest')
      setEncounterImg(assets.sprites.Objects.Chest)
      // setNarration(`Venturing into the dungeon, you encounter a ${encounter}`)

      console.log(randomLootItem)
    } else if (randomScenario === 'Merchant') {
      setEncounter('Hooded Merchant')
      setEncounterImg(assets.sprites.NPCS.HoodedMerchant)
      console.log(encounterImg)
      // setNarration(`Venturing into the dungeon, you encounter a ${encounter}`)
    }
  }
  const saveItem = (item: Item) => {
    player.inventory.push(item)
    console.log(`${item.name} obtained!`)
    console.log("Player:", player)
  }

  const getGold = (amount: number) => {
    player.gold += amount
    console.log(`You received ${amount} gold!`)
    console.log("Player:", player)
  }

  // const lootChest = (item: Item) => {

  // }
  // const restore = (stat: string, amount: number) => {

  // }

  function openChest() {
    const mimicChance = Math.random()
    if (mimicChance > .8) {
      setEncounter(hiddenEnemies[0].name)
      setEncounterImg('./assets/sprites/characters/enemies/mimic.png')
      console.log('Mimic encountered!', hiddenEnemies[0].sprite)
      setNarration(`That wasn't a chest! The Mimic lunges at you!`)
      player.health -= 100
    } else {
      saveItem(consumables.Potions.HealingPotionI)
      const chestGold = Math.floor(Math.random() * 100)
      getGold(chestGold)
      rollScenario()
    }
  }

  const createCharacter = () => {
    const newplayer = new Player(1, 0, 25, 20, 10, 10, 15, 25, 10, 20, 10, 10, 15, 25, [], 25, 15, '', 'Player')
    const newPlayerStr = JSON.stringify(newplayer)
    const saveNewPlayer = localStorage.setItem('player', newPlayerStr)
    saveNewPlayer
    console.log('Character Created!', player)
  }
  // Rerender DOM when scene changes
  return (
    <>
      <header>
        <>Just another roguelike</>
      </header>
      <main>
        {/* Add logic to change scene depending on selected scene state  */}
        {/* Scene upon loading game */}
        <div id='gamescreen'>
          <div id='tophalf'>
            <img src={bg} id='gamebg' />

            {encounter.length > 0 &&
              <img src={encounterImg} id='encounterimg' />

            }
          </div>
          <div id='bottomhalf'>
            <h1>{narration}</h1>
            <div id='acndiv'>
              {!started &&
                <button id='contbtn' onClick={() => {
                  createCharacter()
                  setNarration('Riding into town, you hop off your horse as you are greeted by an old man. You have come here to enter the dungeon and slay the monsters within, for a steep price of course. The old man hands you fifty gold coins, as well as a potion and a dagger.')
                  start(true)
                  console.log(started)
                  saveItem(consumables.Potions.HealingPotionI)
                  saveItem(weapons.Melee.Dagger)
                  getGold(50)
                  savePlayer
                  setBtnText('Continue!')

                }}>{btnText}</button>

              }

              {started &&
                <button onClick={() => {
                  rollScenario();
                  if (scene !== 'dungeon') {
                    setScene('dungeon')

                    // Add logic to display battle elements, merchant elements or loot elements.
                  }
                }}>{btnText}
                </button>

              }
              {inBattle &&
                <></>
              }

              {encounter === 'Chest' &&
                <div>
                  <button onClick={() => {
                    openChest()
                  }}>
                    Open it!
                  </button>
                </div>
              }

            </div>

          </div>
        </div>
      </main>
    </>
  )
}

export default App
