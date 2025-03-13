import Character from "../character";
import Item from "../../item/item";
export class Player extends Character {
    level: number
    xp: number
    levelUp: number
    baseHP: number
    baseStr: number
    baseDef: number
    baseSpd: number
    baseSta: number
    baseWit: number
    gold: number
    inventory: Item[]
    stamina: number
    wit: number

    constructor(
        level: number, xp: number, levelUp: number,
        baseHP: number, baseStr: number, baseDef: number, baseSpd: number, baseSta: number,
        baseWit: number, health: number, strength: number, defense: number, agility: number,
        gold: number, inventory: Item[], stamina: number, wit: number
    ) {
        super(health, strength, defense, agility)
        this.level = level
        this.xp = xp
        this.levelUp = levelUp
        // Multipliers
        this.baseHP = baseHP
        this.baseStr = baseStr
        this.baseDef = baseDef
        this.baseSpd = baseSpd
        this.baseSta = baseSta
        this.baseWit = baseWit
        this.health = health
        this.strength = strength
        this.defense = defense
        this.agility = agility
        this.gold = gold
        this.inventory = inventory
        this.stamina = stamina
        this.wit = wit
    }

    run() {

    }

    use() {

    }

}

export class Archer extends Player {
    constructor(
        level: number, xp: number, levelUp: number,
        baseHP: number, baseStr: number, baseDef: number, baseSpd: number, baseSta: number,
        baseWit: number, health: number, strength: number, defense: number, agility: number,
        gold: number, inventory: Item[], stamina: number, wit: number
    ) {
        super(
            level, xp, levelUp, baseHP, baseDef, baseSpd, baseStr, baseSta, baseWit,
            health, strength, defense, agility, gold, inventory, stamina, wit
        )
        this.level = 1
        this.xp = 25;
        this.levelUp = 0;
        // Multipliers
        this.baseHP = 15 
        this.baseDef = 6;
        this.baseSpd = 12
        this.baseStr = 8
        this.baseSta = 20 
        // Stamina affects ability to perform physical attacks and blocks
        // Wit affects ability to perform magic spells and ranged attacks

        this.baseWit = 20 
        //
        this.health = health
        this.strength = strength
        this.defense = defense
        this.agility = agility
        this.gold = gold
        this.inventory = inventory
        this.stamina = stamina
        this.wit = wit
    }

}

export class Warrior extends Player {
    constructor(
        level: number, xp: number, levelUp: number,
        baseHP: number, baseStr: number, baseDef: number, baseSpd: number, baseSta: number,
        baseWit: number, health: number, strength: number, defense: number, agility: number,
        gold: number, inventory: Item[], stamina: number, wit: number
    ) {
        super(
            level, xp, levelUp, baseHP, baseDef, baseSpd, baseStr, baseSta, baseWit,
            health, strength, defense, agility, gold, inventory, stamina, wit
        )
        this.level = 1
        this.xp = 25;
        this.levelUp = 0;
        // Multipliers
        this.baseHP = 20
        this.baseDef = 8;
        this.baseSpd = 8
        this.baseStr = 10
         // Stamina affects ability to perform physical attacks and blocks
        // Wit affects ability to perform magic spells and ranged attacks
        this.baseSta = 15
        this.baseWit = 12
        //
        this.health = health
        this.strength = strength
        this.defense = defense
        this.agility = agility
        this.gold = gold
        this.inventory = inventory
        this.stamina = stamina
        this.wit = wit
    }

}

export class Sorcerer extends Player {
    constructor(
        level: number, xp: number, levelUp: number,
        baseHP: number, baseStr: number, baseDef: number, baseSpd: number, baseSta: number,
        baseWit: number, health: number, strength: number, defense: number, agility: number,
        gold: number, inventory: Item[], stamina: number, wit: number
    ) {
        super(
            level, xp, levelUp, baseHP, baseDef, baseSpd, baseStr, baseSta, baseWit,
            health, strength, defense, agility, gold, inventory, stamina, wit
        )
        this.level = level
        this.xp = xp;
        this.levelUp = levelUp;
        // Multipliers
        this.baseHP = baseHP
        this.baseDef = baseDef;
        this.baseSpd = baseSpd
        this.baseStr = baseStr
         // Stamina affects ability to perform physical attacks and blocks
        // Wit affects ability to perform magic spells and ranged attacks
        this.baseSta = baseSta
        this.baseWit = baseWit
        //
        this.health = health
        this.strength = strength
        this.defense = defense
        this.agility = agility
        this.gold = gold
        this.inventory = inventory
        this.stamina = stamina
        this.wit = wit
    }

} 