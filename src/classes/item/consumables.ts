import Item from "./item";

type consumableArrTypes = string | number
export class Consumable extends Item {
    effect: consumableArrTypes[];
        constructor(effect: consumableArrTypes[], sprite: string, name: string, description: string, value: number, rarity: string, stackable: boolean) {
            super(sprite, name, description, value, rarity, stackable)
            this.effect = effect
        }
}
export const HealingPotionI = new Consumable(['Heal', 20],'./assets/sprites/items/potions/healingpotioni.png', 'Healing Potion I', 'A basic healing potion', 10, 'Common', true)
export const consumables = {
        Potions: {
            HealingPotionI
        }

        
    }
