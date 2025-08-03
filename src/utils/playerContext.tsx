import React, { createContext, useContext, useState, useEffect } from 'react'
// import { Player } from '../classes/character/player/players';
// import { useGame } from './gameContext';
// import { useCreateCharacter } from '../hooks/useCreatePlayer';
// import Item from '../classes/item/item'

// interface Player {
//     name: string,
//     maxHealth: number,
//     level: number,
//     xp: number,
//     levelUp: number,
//     baseHP: number,
//     baseStr: number,
//     baseDef: number,
//     baseSpd: number,
//     baseSta: number,
//     baseWit: number,
//     health: number,
//     strength: number,
//     defense: number,
//     agility: number,
//     gold: number,
//     inventory: Item[],
//     stamina: number,
//     wit: number,
//     sprite: string,
// }

interface PlayerContextType {
  player: any;
  setPlayer: React.Dispatch<React.SetStateAction<{}>>
  savePlayer: () => void;
  createCharacter: () => void;
}

const PlayerContext = createContext<PlayerContextType | null>(null)

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  // const {started} = useGame()
  const createCharacter = () => {
    const newPlayer = {
      name: "Hero",
      health: 100,
      maxHealth: 100,
      strength: 8,
      agility: 8,
      defense: 8,
      wit: 8,
      level: 1,
      xp: 0,
      gold: 0,
      inventory: [],
      equippedWeapon: null,
      offHandItem: null,
      currentSkillCooldown: 0,
      status: null, // for future status effects
      sprite: "./assets/sprites/characters/playable/mainchar.png"

    }
    // const saveNewPlayer = localStorage.setItem('player', JSON.stringify(newplayer))
    // const getNewPlayer = localStorage.getItem('player')
    setPlayer(newPlayer)
    console.log('Character Created!', player)
  }
  // const {createCharacter} = useCreateCharacter()
  const [player, setPlayer] = useState(() => {
    const savedPlayer = localStorage.getItem("player");
    console.log(savedPlayer)
    return savedPlayer ? JSON.parse(savedPlayer) : null
    // {
    //   name: "Hero",
    //   health: 100,
    //   maxHealth: 100,
    //   level: 1,
    //   xp: 0,
    //   levelUp: 100,
    //   baseHP: 100,
    //   baseStr: 10,
    //   baseDef: 5,
    //   baseSpd: 5,
    //   baseSta: 10,
    //   baseWit: 10,
    //   strength: 10,
    //   defense: 5,
    //   agility: 5,
    //   gold: 0,
    //   inventory: [],
    //   stamina: 10,
    //   wit: 10,
    //   sprite: "default-sprite.png",
  });
  const savePlayer = () => {
    localStorage.setItem("player", JSON.stringify(player));
  };

  useEffect(() => {
    savePlayer();
  }, [player]);

  return (
    <PlayerContext.Provider value={{ player, setPlayer, savePlayer, createCharacter }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayer must be used within a PlayerProvider");
  }
  return context;
};