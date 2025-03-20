export default class Character {
    health: number;
    strength: number;
    defense: number;
    agility: number
    sprite: string
    constructor(health: number, strength: number, defense: number, agility: number, sprite: string) {
        this.health = health
        this.strength = strength
        this.defense = defense
        this.agility = agility
        this.sprite = sprite
    }

    move() {

    }

    talk() {

    }
}