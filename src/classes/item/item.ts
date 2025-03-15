export default class Item {
    sprite: string;
    name: string;
    description: string;
    type: string;
    value: number;
    rarity: string;
    stackable: boolean
    constructor(sprite: string, name: string, description: string, type: string, value: number, rarity: string, stackable: boolean) {
        this.sprite = sprite
        this.name = name
        this.description = description
        this.type = type
        this.value = value
        this.rarity = rarity
        this.stackable = stackable
    }

    use() {
    }

    sell() {

    }
}