import Item from "../item/item";
import { items } from "../item/itemIndex";

export class IntObj {
    name: string;
    sprite: string;
    possibleItems: Item[]
    constructor(name: string, sprite: string, possibleItems: Item[],) 
    {
        this.name = name; this.sprite = sprite; this.possibleItems = possibleItems
    }
   getRandomItem(): Item | void {
    if (this.possibleItems.length > 0) {
        const randomItem = this.possibleItems[Math.floor(Math.random() * this.possibleItems.length)]
        return randomItem
    }
   }
}

const Chest = new IntObj(
    'Chest',
    './assets/sprites/objects/chest.png',
    [
        items.consumables.Potions.HealingPotionI
    ]
)

const Brazier = new IntObj(
    'Brazier',
    './assets/sprites/objects/litbrazier.png',
    []
)

export const intObjects = {
    Chest,
    Brazier,
}

