import Item from "./item";


export class Potion extends Item {
    effect: string;
    recovery: number;
        constructor(effect: string, recovery: number, sprite: string, name: string, description: string, value: number, rarity: string, stackable: boolean) {
            super(sprite, name, description, value, rarity, stackable)
            this.effect = effect
            this.recovery = recovery
        }
}
export const HealingPotionI = new Potion('Heal', 10, './assets/sprites/items/healingpotioni.png', 'Healing Potion I', 'A basic healing potion', 10, 'Common', true)
export const consumables = {
        Potions: {
            HealingPotionI
        }

        
    }
