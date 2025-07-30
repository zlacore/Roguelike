import inquirer from "inquirer";
import fs from 'fs'
// import { appendFile } from "fs";
// import { Weapon } from '../classes/item/weapons'
// import { Consumable } from '../classes/item/consumables'
// import { IntObj} from '../classes/objects/object'
// Create inquirer prompts to ask which thing to create

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
function choosePrompts() {
    inquirer
        .prompt({
            type: 'list',
            message: 'What new thing would you like to create?',
            choices: ['Weapon', 'Consumable', 'Equipable', 'Item', 'Enemy', 'Merchant', 'Object', 'Skill', 'Exit'],
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
                            name: 'specialEffect'
                        },
                        {
                            type: 'input',
                            message: 'Sprite?',
                            name: 'weaponSprite'
                        },
                        {
                            type: 'input',
                            message: 'Description?',
                            name: 'weaponDesc'
                        },
                        {
                            type: 'number',
                            message: 'Sell price?',
                            name: 'sellPrice'
                        },
                        {
                            type: 'list',
                            message: 'rarity?',
                            choices: ['Common', 'Uncommon', 'Rare', 'Legendary'],
                            name: 'rarity'
                        },
                        {
                            type: 'confirm',
                            message: 'Stackable?',
                            name: 'stackable'
                        }

                    ])
                    .then((answers) => {
                        const newWeapon = {
                            name: answers.weaponName,
                            type: answers.weaponType,
                            damage: answers.weaponDamage,
                            description: answers.weaponDesc,
                            sellPrice: answers.sellPrice,
                            rarity: answers.rarity,
                            stackable: answers.stackable,
                            sprite: answers.weaponSprite,
                            itemType: 'weapon',

                            stats: {
                                strength: answers.strengthBonus || 0,
                                agility: answers.agilityBonus || 0,
                                defense: answers.defenseBonus || 0
                            },

                            effects: {
                                critChance: answers.critChance || 5,
                                specialEffect: answers.specialEffect || null
                            }
                        }
                        console.log(newWeapon)
                        saveWeaponToDatabase(newWeapon)
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
                choices: ['Health Potion', 'Mana Potion', 'Buff Potion', 'Food', 'Other'],
                name: 'consumableType'
            },
            {
                type: 'number',
                message: 'Healing amount (0 if not healing)?',
                name: 'healAmount',
                default: 0
            },
            {
                type: 'number',
                message: 'Mana restore (0 if not mana)?',
                name: 'manaAmount',
                default: 0
            },
            {
                type: 'input',
                message: 'Special effect?',
                name: 'effect'
            },
            {
                type: 'input',
                message: 'Description?',
                name: 'description'
            },
            {
                type: 'number',
                message: 'Sell price?',
                name: 'sellPrice'
            },
            {
                type: 'list',
                message: 'Rarity?',
                choices: ['Common', 'Uncommon', 'Rare', 'Legendary'],
                name: 'rarity'
            }
        ])
        .then((answers) => {
            const newConsumable = {
                name: answers.consumableName,
                type: answers.consumableType,
                healAmount: answers.healAmount,
                manaAmount: answers.manaAmount,
                effect: answers.effect,
                description: answers.description,
                sellPrice: answers.sellPrice,
                rarity: answers.rarity,
                itemType: 'consumable',
                stackable: true
            };
            
            saveConsumableToDatabase(newConsumable);
        })
            } else if (create.thing === 'Equipable') {

            } else if (create.thing === 'Item') {

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
                            sprite: answers.sprite,
                            goldDrop: answers.goldDrop,
                            description: answers.description,
                            enemyType: 'enemy'
                        };

                        saveEnemyToDatabase(newEnemy);
                    })
            } else if (create.thing === 'Merchant') {

            } else if (create.thing === 'Object') {

            } else if (create.thing === 'Skill') {

            } else if (create.thing === 'Exit') {
                console.log('Goodbye!')
                return
            }
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
        })
}

choosePrompts()