import { createContext, useContext, useState } from "react";
import { Dispatch, SetStateAction } from 'react'
import { Enemy } from "../classes/character/enemy/enemy";
import { Merchant } from "../classes/character/npc/merchant";
import { IntObj } from "../classes/objects/object";
const GameContext = createContext<GameContextType | null>(null)
export interface GameContextType {
    // Core game flow
    scene: string;
    setScene: Dispatch<SetStateAction<string>>;
    started: boolean;
    setStarted: Dispatch<SetStateAction<boolean>>; // Fix naming

    // UI state
    bg: string;
    setBg: Dispatch<SetStateAction<string>>;
    narration: string;
    setNarration: Dispatch<SetStateAction<string>>;
    btnText: string;
    setBtnText: Dispatch<SetStateAction<string>>;

    // Current encounters (keep these since they change)
    enemy: Enemy | null;
    setEnemy: Dispatch<SetStateAction<Enemy | null>>;
    battle: boolean;
    setBattle: Dispatch<SetStateAction<boolean>>; // Fix naming
    merchant: Merchant | null;
    setMerchant: Dispatch<SetStateAction<Merchant | null>>;
    intObject: IntObj | null;
    setIntObject: Dispatch<SetStateAction<IntObj | null>>;
}
export const GameProvider = ({ children }: { children: React.ReactNode }) => {
    const [scene, setScene] = useState('town');
    const [started, setStarted] = useState<boolean>(false); // Fixed naming

    // UI state
    const [bg, setBg] = useState('./assets/backgrounds/town.jpg');
    const [narration, setNarration] = useState('Start Game');
    const [btnText, setBtnText] = useState('start');

    // Current encounters
    const [battle, setBattle] = useState<boolean>(false); // Fixed naming
    const [enemy, setEnemy] = useState<Enemy | null>(null);
    const [merchant, setMerchant] = useState<Merchant | null>(null);
    const [intObject, setIntObject] = useState<IntObj | null>(null);
    return (<GameContext.Provider
        value={{
            scene, setScene,
            started, setStarted, // Fixed naming
            bg, setBg,
            narration, setNarration,
            btnText, setBtnText,
            battle, setBattle, // Fixed naming
            enemy, setEnemy,
            merchant, setMerchant,
            intObject, setIntObject,
        }}>
        {children}
    </GameContext.Provider>
    )
}

export const useGame = () => {
    const context = useContext(GameContext)
    if (!context) {
        throw new Error("useGame must be used within a GameProvider");
    }
    return context
}