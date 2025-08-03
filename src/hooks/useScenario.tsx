
import { intObjects } from "../classes/objects/object";
import { useGame } from "../utils/gameContext";
import { useBattle } from "./useBattle";
import { merchants } from "../classes/character/npc/merchant"
import { enemies } from "../utils/gameData";
export const useRollScenario = () => {
  const {
    setEnemy, setIntObject, setMerchant,
    setBattle, // ✅ Fixed function name
    setNarration
  } = useGame();
  const {
    startBattle
  } = useBattle()
  const rollScenario = () => {
    const rollChance = Math.random();

    // Clear previous encounters first
    setEnemy(null);
    setMerchant(null);
    setIntObject(null);
    setBattle(false);
    setNarration('')

    if (rollChance < .75) {
      // 60% chance - Battle
      const monsterArray = Object.values(enemies);
      const randomMonster = monsterArray[Math.floor(Math.random() * monsterArray.length)];
      setEnemy(randomMonster);
      startBattle()
      setNarration(`Venturing into the dungeon, you encounter a ${randomMonster.name}!`);
      
    } else if (rollChance >= .75 && rollChance < .875) {
      // 12.5% chance - Loot
      const objectArr = Object.values(intObjects);
      const randomObject = objectArr[Math.floor(Math.random() * objectArr.length)];
      setIntObject(randomObject);
      setNarration(`Venturing into the dungeon, you find a ${randomObject.name}`);
      
    } else if (rollChance >= 0.875) {
      // 12.5% chance - Merchant
      const randomMerchant = merchants[Math.floor(Math.random() * merchants.length)];
      setMerchant(randomMerchant);
      setNarration(`Venturing into the dungeon, you encounter a ${randomMerchant.name}`);
    } 
  };

  return { rollScenario };
}