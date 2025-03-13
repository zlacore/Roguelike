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
        this.level = level
        this.xp = xp;
        this.levelUp = levelUp;
        this.baseHP = baseHP
        this.baseDef = baseDef;
        this.baseSpd = baseSpd
        this.baseStr = baseStr
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
        this.level = level
        this.xp = xp;
        this.levelUp = levelUp;
        this.baseHP = baseHP
        this.baseDef = baseDef;
        this.baseSpd = baseSpd
        this.baseStr = baseStr
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
        this.baseHP = baseHP
        this.baseDef = baseDef;
        this.baseSpd = baseSpd
        this.baseStr = baseStr
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

} 