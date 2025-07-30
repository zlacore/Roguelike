export default class Item {
    sprite: string;
    name: string;
    description: string;
    value: number;
    rarity: string;
    stackable: boolean
    constructor(sprite: string, name: string, description: string,  value: number, rarity: string, stackable: boolean) {
        this.sprite = sprite
        this.name = name
        this.description = description
        this.value = value
        this.rarity = rarity
        this.stackable = stackable
    }

    use() {
    }

    sell() {

    }
}