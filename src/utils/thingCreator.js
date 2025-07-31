import inquirer from "inquirer";
import fs from 'fs'
// import { appendFile } from "fs";
// import { Weapon } from '../classes/item/weapons'
// import { Consumable } from '../classes/item/consumables'
// import { IntObj} from '../classes/objects/object'
// Create inquirer prompts to ask which thing to create
function askToCreateAnother() {
    inquirer
        .prompt({
            type: 'confirm',
            message: 'Create another thing?',
            name: 'createAnother'
        })
        .then((answer) => {
            if (answer.createAnother) {
                choosePrompts()
            } else {
                console.log('All done!')
            }
        })
}

function saveWeaponToDatabase(newWeapon) {
    const dbPath = './src/utils/data/weapons-database.json'
    let weapons = []
    if (fs.existsSync(dbPath)) {
        const data = fs.readFileSync(dbPath, 'utf8')
        weapons = JSON.parse(data)
    }

    weapons.push(newWeapon)
    fs.writeFileSync(dbPath, JSON.stringify(weapons, null, 2))
    console.log(`✅ Weapon "${newWeapon.name}" added to database!`)
}

function saveConsumableToDatabase(newConsumable) {
    const dbPath = './src/utils/data/consumables-database.json';
    let consumables = [];

    if (fs.existsSync(dbPath)) {
        const data = fs.readFileSync(dbPath, 'utf8');
        consumables = JSON.parse(data);
    }

    consumables.push(newConsumable);
    fs.writeFileSync(dbPath, JSON.stringify(consumables, null, 2));
    console.log(`✅ Consumable "${newConsumable.name}" added to database!`);
}

function saveEnemyToDatabase(newEnemy) {
    const dbPath = './src/utils/data/enemies-database.json';
    let enemies = [];

    if (fs.existsSync(dbPath)) {
        const data = fs.readFileSync(dbPath, 'utf8');
        enemies = JSON.parse(data);
    }

    enemies.push(newEnemy);
    fs.writeFileSync(dbPath, JSON.stringify(enemies, null, 2));
    console.log(`✅ Enemy "${newEnemy.name}" added to database!`);
}

function saveLootToDatabase(newLoot) {
    const dbPath = './src/utils/data/loot-database.json';
    let loot = [];

    if (fs.existsSync(dbPath)) {
        const data = fs.readFileSync(dbPath, 'utf8');
        loot = JSON.parse(data);
    }

    loot.push(newLoot);
    fs.writeFileSync(dbPath, JSON.stringify(loot, null, 2));
    console.log(`✅ Loot "${newLoot.name}" added to database!`);
}

function saveEquipToDatabase(newEquip) {
    const dbPath = './src/utils/data/equipables-database.json';
    let equipables = [];

    if (fs.existsSync(dbPath)) {
        const data = fs.readFileSync(dbPath, 'utf8');
        equipables = JSON.parse(data);
    }

    equipables.push(newEquip);
    fs.writeFileSync(dbPath, JSON.stringify(equipables, null, 2));
    console.log(`✅ Equipable "${newEquip.name}" added to database!`);
}

function choosePrompts() {
    inquirer
        .prompt({
            type: 'list',
            message: 'What new thing would you like to create?',
            choices: ['Weapon', 'Consumable', 'Equipable', 'EnemyLoot', 'Enemy', 'Merchant', 'Object', 'Skill', 'Exit'],
            name: 'thing'
        })
        .then((create) => {
            if (create.thing === "Weapon") {
                inquirer
                    .prompt([
                        {
                            type: "list",
                            message: 'Weapon type?',
                            choices: ['Melee', 'Magic', 'Ranged'],
                            name: 'weaponType'
                        },
                        {
                            type: 'input',
                            message: 'Name?',
                            name: 'weaponName'
                        },
                        {
                            type: 'number',
                            message: 'Damage?',
                            name: 'weaponDamage'
                        },
                        {
                            type: 'number',
                            message: 'Critical strike chance',
                            name: 'critChance',
                            default: 5
                        },
                        {
                            type: 'number',
                            message: 'Strength bonus?',
                            name: 'strengthBonus',
                            default: 0
                        },
                        {
                            type: 'number',
                            message: 'Agility bonus?',
                            name: 'agilityBonus',
                            default: 0
                        },
                        {
                            type: 'number',
                            message: 'Defense bonus?',
                            name: 'defenseBonus',
                            default: 0
                        },
                        {
                            type: 'input',
                            message: 'Special effect (optional)?',
                            name: 'specialEffect',
                            default: 'none'
                        },
                        {
                            type: 'number',
                            message: 'How long does the special effect last?',
                            name: 'effectDuration',
                            default: 0,
                        },
                        {
                            type: 'input',
                            message: 'Description?',
                            name: 'weaponDesc'
                        },
                        {
                            type: 'list',
                            message: 'rarity?',
                            choices: ['Common', 'Uncommon', 'Rare', 'Legendary'],
                            name: 'rarity'
                        },
                        {
                            type: 'number',
                            message: 'Sell price?',
                            name: 'sellPrice'
                        },
                        {
                            type: 'input',
                            message: 'Sprite?',
                            name: 'weaponSprite',
                            default: './assets/sprites/items/weapons/basicsword.png'
                        }
                        
                    ])
                    .then((answers) => {
                        const newWeapon = {
                            name: answers.weaponName,
                            type: answers.weaponType,
                            damage: answers.weaponDamage,
                            description: answers.weaponDesc,
                            rarity: answers.rarity,
                            sellPrice: answers.sellPrice,
                            itemType: 'weapon',
                            stats: {
                                strength: answers.strengthBonus || 0,
                                agility: answers.agilityBonus || 0,
                                defense: answers.defenseBonus || 0
                            },
                            
                            effects: {
                                critChance: answers.critChance || 5,
                                specialEffect: answers.specialEffect || null
                            },
                            sprite: answers.weaponSprite,
                        }
                        console.log(newWeapon)
                        saveWeaponToDatabase(newWeapon)
                        askToCreateAnother()
                    })
            } else if (create.thing === 'Consumable') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            message: 'Consumable name?',
                            name: 'consumableName'
                        },
                        {
                            type: 'list',
                            message: 'Consumable type?',
                            choices: ['Potion', 'Throwable', 'Other'],
                            name: 'consumableType'
                        },
                        {
                            type: 'input',
                            message: 'What is its effect?',
                            name: 'effect'
                        },
                        {
                            type: 'number',
                            message: 'How much does the effect add/subtract from stats?',
                            name: 'effectStrength'
                        },
                        {
                            type: 'number',
                            message: 'How many turns does the effect last?',
                            name: 'effectDuration',
                            default: 0 // Instant effect
                        },
                        {
                            type: 'input',
                            message: 'Description?',
                            name: 'description'
                        },
                        {
                            type: 'list',
                            message: 'Rarity?',
                            choices: ['Common', 'Uncommon', 'Rare', 'Legendary'],
                            name: 'rarity'
                        },
                        {
                            type: 'number',
                            message: 'Sell price?',
                            name: 'sellPrice'
                        },
                        {
                            type: 'input',
                            message: 'What is its sprite?',
                            name: 'sprite',
                            default: './assets/sprites/items/potions/emptybottle.png'
                        }
                    ])
                    .then((answers) => {
                        const newConsumable = {
                            name: answers.consumableName,
                            type: answers.consumableType,
                            effect: answers.effect,
                            effectStrength: answers.effectStrength,
                            effectDuration: answers.effectDuration,
                            description: answers.description,
                            rarity: answers.rarity,
                            sellPrice: answers.sellPrice,
                            itemType: 'consumable',
                            stackable: true,
                            sprite: answers.sprite
                        };

                        saveConsumableToDatabase(newConsumable);
                        askToCreateAnother()

                    })
            } else if (create.thing === 'Equipable') {
                inquirer
                .prompt([
                    {
                        type: 'list',
                        message: 'What kind of equipable is it?',
                        choices: ['Helmet', 'Chestplate', 'Leggings', 'Charm'],
                        name: 'type'
                    },
                    {
                        type: 'input',
                        message: 'What is this equipable called?',
                        name: 'name'
                    },
                    {
                        type: 'number',
                        message: 'Health boost?',
                        name: 'hpBoost'
                    },
                    {
                        type: 'number',
                        message: 'Strength boost?',
                        name: 'strBoost'
                    },
                    {
                        type: 'number',
                        message: 'Agility boost?',
                        name: 'agiBoost'
                    },
                    {
                        type: 'number',
                        message: 'Defense boost?',
                        name: 'defBoost'
                    },
                    {
                        type: 'number',
                        message: 'Wit boost?',
                        name: 'witBoost'
                    },
                    {
                        type: 'input',
                        message: 'Description?',
                        name: 'description'
                    },
                    {
                        type: 'list',
                        message: 'Rarity?',
                        choices: ['Common', 'Uncommon', 'Rare', 'Legendary'],
                        name: 'rarity',
                    },
                    {
                        type: 'number',
                        message: 'Sell price?',
                        name: 'sellPrice'
                    },
                    {
                        type: 'input',
                        message: 'Sprite?',
                        name: 'sprite'
                    }
                    .then((equip) => {
                        const newEquip = {
                            type : equip.type,
                            name: equip.name,
                            hp: equip.hpBoost,
                            str: equip.strBoost,
                            def: equip.defBoost,
                            agi: equip.agiBoost,
                            wit: equip.witBoost,
                            description: equip.description,
                            rarity: equip.rarity,
                            sellPrice: equip.sellPrice,
                            sprite: equip.sprite
                        }
                        saveEquipToDatabase(newEquip)
                        askToCreateAnother()
                    })

                ])
            } else if (create.thing === 'EnemyLoot') {
                inquirer
                .prompt([
                    {
                       type: 'input',
                       message: 'What drops it?',
                       name: 'droppedFrom'
                    },
                    {
                        type: 'input',
                        message: 'What is it called?',
                        name: 'lootName'
                    },
                    {
                        type: 'input',
                        message: 'Description?',
                        name: 'desc',
                    },
                    {
                        type: 'input',
                        message: 'Sprite?',
                        name: 'sprite'
                    }
                ])
                .then((loot) => {
                    const newLoot = {
                        droppedFrom: loot.droppedFrom,
                        name: loot.lootName,
                        stackable: true,
                        description: loot.description,
                        sprite: loot.sprite
                    }

                    saveLootToDatabase(newLoot)
                    askToCreateAnother()
                })
            } else if (create.thing === 'Enemy') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            message: 'Enemy name?',
                            name: 'enemyName'
                        },
                        {
                            type: 'number',
                            message: 'Health?',
                            name: 'health'
                        },
                        {
                            type: 'number',
                            message: 'Strength?',
                            name: 'strength'
                        },
                        {
                            type: 'number',
                            message: 'Defense?',
                            name: 'defense'
                        },
                        {
                            type: 'number',
                            message: 'Agility?',
                            name: 'agility'
                        },
                        {
                            type: 'input',
                            message: 'Sprite path?',
                            name: 'sprite'
                        },
                        {
                            type: 'number',
                            message: 'Gold drop?',
                            name: 'goldDrop'
                        },
                        {
                            type: 'input',
                            message: 'Item drop?',
                            name: 'itemDrop',
                        },
                        {
                            type: 'input',
                            message: 'Description?',
                            name: 'description'
                        }
                    ])
                    .then((answers) => {
                        const newEnemy = {
                            name: answers.enemyName,
                            health: answers.health,
                            maxHealth: answers.health,
                            strength: answers.strength,
                            defense: answers.defense,
                            agility: answers.agility,
                            goldDrop: answers.goldDrop,
                            itemDrop: answers.itemDrop,
                            description: answers.description,
                            sprite: answers.sprite,
                        };

                        saveEnemyToDatabase(newEnemy);
                        askToCreateAnother()

                    })
            } else if (create.thing === 'Merchant') {
                return
            } else if (create.thing === 'Object') {
                return
            } else if (create.thing === 'Skill') {
                return
            } else if (create.thing === 'Exit') {
                console.log('Goodbye!')
                return
            }
        })
}

choosePrompts()