import { useEffect } from 'react';
import { GameScreen } from './components/GameScreen';
import { useGame } from './utils/gameContext';
import { usePlayer } from './utils/playerContext';
import { useCreateCharacter } from './hooks/useCreatePlayer';
import { useSaveItem } from './hooks/useSaveItem';
import { useGetGold } from './hooks/useGetGold';
import { useRollScenario } from './hooks/useScenario';
import { useOpenChest } from './hooks/useOpenChest';
// import { Merchant } from './classes/character/npc/merchant';

function App() {
  const { player, savePlayer } = usePlayer()
  const { createCharacter } = useCreateCharacter()
  const {saveItem} = useSaveItem()
  const { getGold} = useGetGold()
  const {rollScenario} = useRollScenario()
  const {openChest} = useOpenChest()
  const { bg, battle, enemy, narration, started, setNarration, start,  setBtnText, btnText, scene, setScene, intObject, merchant, setMerchant, encounterImg} = useGame()
  useEffect(() =>{
    // Update DOM when narration changes
  }, [narration, intObject])
  return (
    <main>
      <GameScreen  img={encounterImg} setMerchant={setMerchant} merchant={merchant} bg={bg} battle={battle} enemy={enemy} player={player} narration={narration} started={started} createCharacter={createCharacter} setNarration={setNarration} start={start} saveItem={saveItem} getGold={getGold} savePlayer={savePlayer} setBtnText={setBtnText} btnText={btnText} rollScenario={rollScenario} scene={scene} setScene={setScene} intObject={intObject} openChest={openChest} />
    </main>
  )
}

export default App

// <>
//   <header>
//     <>Just another roguelike</>
//   </header>
//   <main>
//   </main>
// </>