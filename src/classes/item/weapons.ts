import Item from "./item"
export class Weapon extends Item {
    weaponType: string;
    damage: number;
    constructor(weaponType: string, damage: number, sprite: string, name: string, description: string, type: string, value: number, rarity: string, stackable: boolean ) {
        super(sprite, name, description, type, value, rarity, stackable )   
        this.weaponType = weaponType
        this.damage = damage
    }
}

export const BasicSword = new Weapon ('Melee', 20, './assets/sprites/items/weapons/basicsword.png', 'Basic Sword', 'A basic sword for your adventure!', 'Weapon', 10, 'Common', false)
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