export default class Item {
    type: string;
    value: number;
    rarity: string;
    constructor(type: string, value: number, rarity: string) {
        this.type = type
        this.value = value
        this.rarity = rarity
    }

    use() {
    }

    sell() {

    }
}