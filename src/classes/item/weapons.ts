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

export const Dagger = new Weapon ('Melee', 20, '', 'Dagger', 'A short dagger for quick stabs', 'Weapon', 10, 'Common', false)
export const weapons =
    {
        Melee: 
        {
            Dagger,
        }
        ,
        Ranged: {

        },
        Magic: {

        }
    }