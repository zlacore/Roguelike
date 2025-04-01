// What properties does a character need?
// Max Health


export default class Character {
    maxHealth: number
    health: number;
    strength: number;
    defense: number;
    agility: number
    sprite: string
    constructor(maxHealth: number, health: number, strength: number, defense: number, agility: number, sprite: string) {
        this.maxHealth = maxHealth
        this.health = health
        this.strength = strength
        this.defense = defense
        this.agility = agility
        this.sprite = sprite
    }

    // move() {

    // }

    // talk() {

    // }
}