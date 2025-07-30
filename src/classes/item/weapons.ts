import Item from "./item"
export class Weapon extends Item {
    weaponType: string;
    damage: number;
    constructor(weaponType: string, damage: number, sprite: string, name: string, description: string, value: number, rarity: string, stackable: boolean ) {
        super(sprite, name, description, value, rarity, stackable )   
        this.weaponType = weaponType
        this.damage = damage
    }
}

export const BasicSword = new Weapon ('Melee', 20, './assets/sprites/items/weapons/basicsword.png', 'Basic Sword', 'A basic sword for your adventure!', 10, 'Common', false)
export const weapons =
    {
        Melee: 
        {
            BasicSword,
        }
        ,
        Ranged: {

        },
        Magic: {

        }
    }