export class Skill {
    type: string;
    hpCost: number;
    stamCost: number;
    damage: number;
    accuracy: number
    constructor(type: string, hpCost: number, stamCost: number, damage: number, accuracy: number) {
        this.type = type;
        this.hpCost = hpCost
        this.stamCost = stamCost
        this.damage = damage
        this.accuracy = accuracy
    }
}