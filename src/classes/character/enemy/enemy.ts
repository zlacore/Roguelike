import Character from "../character";
import Item from "../../item/item";
export class Enemy extends Character {
    level: number
    baseXp: number
    xpYield: number
    loot: Item[]
    gold: number
    name: string
    constructor(level: number, baseXp: number, health: number, strength: number, defense: number, agility: number, loot: Item[], gold: number, sprite: string, name: string) {
        super(health , strength, defense, agility, sprite)
        this.level = level,
        this.baseXp = baseXp
        this.xpYield = this.calculateXpYield()
        this.loot = loot
        this.gold = gold
        this.sprite = sprite
        this.name = name
    }

    calculateXpYield () {
        const xpYield = this.level * this.baseXp
        return xpYield
    }

    pickDrop () {
        const randomDrop = this.loot[Math.floor(Math.random() * this.loot.length)]
        return randomDrop
    }

    dropGold () {
        return this.gold
    }

    increaseLevel(playerLevel: number) {
        this.level = playerLevel
    }

}

const Slime = new Enemy(1, 20, 30, 10, 12, 7, [], 50, './assets/sprites/characters/enemies/dungeonslime.png', 'Slime')
const Mimic = new Enemy(1, 40, 50, 20, 15, 7, [], 100, './assets/sprites/characters/enemies/mimic.png', 'Mimic')
export const enemies = [
    Slime,
    Mimic,
]