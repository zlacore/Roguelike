import { createContext, useContext, useState } from "react";
import { Dispatch, SetStateAction } from 'react'
import { Enemy, enemies, hiddenEnemies } from "../classes/character/enemy/enemy";
import { items } from "../classes/item/itemIndex";
import { assets } from "../assets";
import { Merchant } from "../classes/character/npc/merchant";
import { merchants } from "../classes/character/npc/merchant";
import { IntObj } from "../classes/objects/object";
import { intObjects } from "../classes/objects/object";
const GameContext = createContext<GameContextType | null>(null)
export interface GameContextType {
    scene: string;
    setScene: Dispatch<SetStateAction<string>>;
    bg: string;
    setBg: Dispatch<SetStateAction<string>>;
    narration: string;
    setNarration: Dispatch<SetStateAction<string>>;
    btnText: string;
    setBtnText: Dispatch<SetStateAction<string>>;
    started: boolean;
    start: Dispatch<SetStateAction<boolean>>;
    battle: boolean;
    inBattle: Dispatch<SetStateAction<boolean>>;
    enemy: Enemy | null;
    setEnemy: Dispatch<SetStateAction<Enemy | null>>;
    intObject: IntObj | null;
    intObjects: typeof intObjects
    setIntObject: Dispatch<SetStateAction<IntObj | null>>;
    merchant: Merchant | null;
    setMerchant: Dispatch<SetStateAction<Merchant | null>>;
    encounterImg: string;
    setEncounterImg: Dispatch<SetStateAction<string>>;
    assets: typeof assets;
    enemies: typeof enemies;
    hiddenEnemies: typeof hiddenEnemies
    items: typeof items
    merchants: typeof merchants
}
export const GameProvider = ({ children }: { children: React.ReactNode }) => {
    const [scene, setScene] = useState('town')
    const [bg, setBg] = useState('./assets/backgrounds/town.jpg')
    const [narration, setNarration] = useState('Start Game')
    const [btnText, setBtnText] = useState('start')
    const [started, start] = useState<boolean>(false)
    const [battle, inBattle] = useState<boolean>(false)
    const [enemy, setEnemy] = useState<Enemy | null>(null)
    const [intObject, setIntObject] = useState<IntObj | null>(null)

    const [merchant, setMerchant] = useState<Merchant | null>(null)
    const [encounterImg, setEncounterImg] = useState('')
    return (<GameContext.Provider
        value={{
            scene,
            setScene,
            bg,
            setBg,
            narration,
            setNarration,
            btnText,
            setBtnText,
            started,
            start,
            battle,
            inBattle,
            enemy,
            setEnemy,
            intObject,
            setIntObject,
            merchant,
            setMerchant,
            encounterImg,
            setEncounterImg,
            assets,
            enemies,
            hiddenEnemies,
            items,
            merchants,
            intObjects
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