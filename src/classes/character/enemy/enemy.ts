import Character from "../character";
import Item from "../../item/item";
export class Enemy extends Character {
    level: number
    baseXp: number
    loot: Item[]
    gold: number
    name: string
    constructor(maxHealth: number, level: number, baseXp: number, health: number, strength: number, defense: number, agility: number, loot: Item[], gold: number, sprite: string, name: string) {
        super(maxHealth,health , strength, defense, agility, sprite)
        this.maxHealth = maxHealth
        this.level = level,
        this.baseXp = baseXp
        this.loot = loot
        this.gold = gold
        this.sprite = sprite
        this.name = name
    }

    // calculateXpYield () {
    //     const xpYield = this.level * this.baseXp
    //     return xpYield
    // }

    // pickDrop () {
    //     const randomDrop = this.loot[Math.floor(Math.random() * this.loot.length)]
    //     return randomDrop
    // }

    // dropGold () {
    //     return this.gold
    // }

    // increaseLevel(playerLevel: number) {
    //     this.level = playerLevel
    // }

}

// Enemy stats to be balanced later
export const Mimic = new Enemy(1, 1, 40, 50, 20, 15, 7, [], 100, './assets/sprites/characters/enemies/mimic2.png', 'Mimic')
const Slime = new Enemy(1, 1, 20, 30, 10, 12, 7, [], 50, './assets/sprites/characters/enemies/dungeonslime.png', 'Slime')
const Gargoyle = new Enemy(1, 1, 30, 30, 25, 35, 15, [], 60, './assets/sprites/characters/enemies/gargoyle.png', 'Gargoyle' )
const Cryptwyrm = new Enemy(1, 1, 35, 40, 30, 15, 18, [], 50, './assets/sprites/characters/enemies/cryptwyrm.png', 'Cryptwyrm' )
const Bloodvine = new Enemy(1, 1, 25, 40, 20, 20, 25, [], 30, './assets/sprites/characters/enemies/bloodvine.png', 'Bloodvine')
export const enemies = {
        slime: Slime,
        gargoyle: Gargoyle,
        cryptwyrm: Cryptwyrm,
        bloodvine: Bloodvine
    }

export const hiddenEnemies = {
    mimic: Mimic
}
