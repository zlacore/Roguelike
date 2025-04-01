import React, { createContext, useContext, useState, useEffect } from 'react'
import { Player } from '../classes/character/player/players';
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
    player: Player;
    setPlayer: React.Dispatch<React.SetStateAction<Player>>
    savePlayer: () => void;
}

const PlayerContext = createContext<PlayerContextType | null>(null)

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const [player, setPlayer] = useState<Player>(() => {
    const savedPlayer = localStorage.getItem("player");
    return savedPlayer ? JSON.parse(savedPlayer) : { name: "Hero", health: 100, gold: 0, inventory: [] };
  });

  const savePlayer = () => {
    localStorage.setItem("player", JSON.stringify(player));
  };

  useEffect(() => {
    savePlayer();
  }, [player]);

  return (
    <PlayerContext.Provider value={{ player, setPlayer, savePlayer }}>
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