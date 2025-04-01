import { items } from "../../item/itemIndex"
import Item from "../../item/item"

export class Merchant {
    name: string
    sprite: string
    dialogueOptions: string[]
    items: Item[]

    constructor(name: string, sprite: string, dialogueOptions: string[], items: Item[]) {
        this.name = name
        this.sprite = sprite
        this.dialogueOptions = dialogueOptions
        this.items = items
    }
}

const hoodedMerchant = new Merchant(
    'Hooded Merchant',
    './assets/sprites/characters/npcs/hoodedmerchant.png',
    [
        "I don't see many brave souls coming down here, heh. Stay a while, buy something for your travels!"
    ],
    [
        items.consumables.Potions.HealingPotionI,
    ]
)

const blacksmith = new Merchant(
    'Blacksmith',
    './assets/sprites/characters/npcs/blacksmith.png',
    [
        "I came down here looking for treasure and good steel for my wares. Care to buy any?"
    ],
    [
        items.weapons.Melee.BasicSword
    ]
)

export const merchants = [
    hoodedMerchant,
    blacksmith
]

