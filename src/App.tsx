
import { useState } from 'react'
import { useEffect } from 'react'
import { Player } from './classes/character/player/players'
import Item from './classes/item/item'
import { consumables } from './classes/item/consumables'
import { weapons } from './classes/item/weapons'
import { assets } from './assets/index.ts'
import { enemies } from './classes/character/enemy/enemy.ts'
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
      setBg('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fe2c77df-b4fa-46aa-ba9f-f7adbc11e74c/dbpx7j9-5e1c37e5-dbbc-4a3f-a6d0-2a6c92179f9e.png/v1/fill/w_288,h_160,q_80,strp/pixel_art___dungeon_background__loopable__by_albertov_dbpx7j9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwIiwicGF0aCI6IlwvZlwvZmUyYzc3ZGYtYjRmYS00NmFhLWJhOWYtZjdhZGJjMTFlNzRjXC9kYnB4N2o5LTVlMWMzN2U1LWRiYmMtNGEzZi1hNmQwLTJhNmM5MjE3OWY5ZS5wbmciLCJ3aWR0aCI6Ijw9Mjg4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.2yikrt9gyORl_CIqGlGEMWw9XUslUsKH99thCjNjJr0')
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
      // const randomMonster = ''
      setEncounter(enemies[0].name)
      setEncounterImg(enemies[0].sprite)
      console.log(enemies[0].sprite)
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
      setEncounter('Merchant')
      setEncounterImg(assets.placeholder)
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
      setEncounter(enemies[1].name)
      setEncounterImg('./assets/sprites/characters/enemies/mimic.png')
      console.log('Mimic encountered!', enemies[1].sprite)
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
          <img src={bg} id='gamebg' />

          {encounter.length > 0 &&
            <img src={encounterImg} id='encounterimg' />

          }
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
          <h1>{narration}</h1>
        </div>
      </main>
    </>
  )
}

export default App
