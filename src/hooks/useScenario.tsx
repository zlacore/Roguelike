// import { NPC } from "../components/NPC";
// import { intObjects } from "../classes/objects/object";
import { useGame } from "../utils/gameContext";
// import { merchants } from "../classes/character/npc/merchant"
export const useRollScenario = () => {
  const {
    setEnemy,
    setIntObject,
    setMerchant,
    encounterImg,
    setEncounterImg,
    inBattle,
    enemy,
    assets,
    enemies,
    setNarration,
    intObject,
    merchants,
    intObjects
  } = useGame()
  const rollScenario = () => {
    const rollChance = Math.random()

    // TODO: Come up with other scenarios to run into! Running into nothing is also a valid scenario!
    if (rollChance < .6) {
      const monsterArray = Object.values(enemies)
      const randomMonster = monsterArray[Math.floor(Math.random() * monsterArray.length)]
      setMerchant(null)
      setIntObject(null)
      setEnemy(randomMonster)
      setEncounterImg(randomMonster.sprite)
      // console.log(randomMonster.sprite)
      inBattle(true)
      setNarration(`Venturing into the dungeon, you encounter a ${randomMonster.name}!`)
      // console.log(enemies.slime.name)
      console.log(enemy)
    } else if (rollChance > .6 && rollChance < .725) {
      const randomLootItem = 'Random Loot'
      const objectArr = Object.values(intObjects)
      const randomObject = objectArr[Math.floor(Math.random() * objectArr.length)]
      setEnemy(null)
      setMerchant(null)
      setIntObject(randomObject)
      setEncounterImg(assets.sprites.Objects.Chest)
      setNarration(`Venturing into the dungeon, you find a ${randomObject.name}`)
      console.log(intObject)
      console.log(randomLootItem)
    } else if (rollChance < .725) {
      const randomMerchant = merchants[Math.floor(Math.random() * merchants.length)]
      setIntObject(null)
      setEnemy(null)
      setMerchant(randomMerchant)
      setEncounterImg(assets.sprites.NPCS.HoodedMerchant)
      console.log(encounterImg)
      setNarration(`Venturing into the dungeon, you encounter a ${randomMerchant.name}`)
    }
  }
  return { rollScenario }
}