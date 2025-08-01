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

async function choosePrompts() {
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
                            type: 'input',
                            message: 'What is this weapon called?',
                            name: 'name'
                        },
                        {
                            type: 'list',
                            message: 'What type of weapon is it?',
                            choices: ['Melee', 'Ranged', 'Magic'],
                            name: 'type'
                        },
                        {
                            type: 'number',
                            message: 'Base damage?',
                            name: 'damage'
                        },
                        {
                            type: 'number',
                            message: 'Minimum skill level required to use?',
                            name: 'minSkillLevel',
                            default: 1
                        },
                        {
                            type: 'input',
                            message: 'What is the weapon skill name? (e.g., "powerStrike", "lifesteal", "manaShield")',
                            name: 'skillName'
                        },
                        {
                            type: 'input',
                            message: 'Describe what the skill does:',
                            name: 'skillDescription'
                        },
                        {
                            type: 'list',
                            message: "What is the skill's effect?",
                            choices: [
                                'powerStrike',    // Extra damage attack
                                'multiHit',       // Multiple attacks
                                'armorPierce',
                                'criticalStrike',
                                'heal',           // Self healing
                                'stun',           // Disable enemy
                                'poison',         // DoT effect
                                'burn',
                                'slow',
                                'blind',
                                'critBoost',      // Temporary crit chance
                                'damageShield',   // Absorb damage
                                'manaRestore',    // Restore mana
                                'lifesteal',      // Heal on damage
                                'areaAttack'      // Hit multiple enemies
                            ],
                            name: 'skillEffect'
                        },
                        {
                            type: 'number',
                            message: 'Skill base power/percentage? (e.g., 15 for 15% crit chance)',
                            name: 'skillBasePower'
                        },
                        {
                            type: 'number',
                            message: 'How much does skill improve per player level? (e.g., 5 for +5% per level)',
                            name: 'skillScalingPerLevel',
                            default: 5
                        },
                        {
                            type: 'number',
                            message: 'What is the skill cooldown?',
                            name: 'skillCooldown',
                        },
                        {
                            type: 'confirm',
                            message: 'Does this weapon have a passive effect?',
                            name: 'hasPassive',
                            default: false
                        },
                        {
                            type: 'input',
                            message: 'Description?',
                            name: 'description'
                        },
                        {
                            type: 'list',
                            message: 'Rarity?',
                            choices: ['Poor', 'Common', 'Uncommon', 'Rare', 'Legendary'],
                            name: 'rarity'
                        },
                        {
                            type: 'number',
                            message: 'Sell price?',
                            name: 'sellPrice'
                        },
                        {
                            type: 'input',
                            message: 'Sprite path?',
                            name: 'sprite',
                            default: ''
                        },
                        {
                            type: 'confirm',
                            message: 'Does this weapon give stat bonuses?',
                            name: 'hasStats',
                            default: false
                        }
                    ])
                    .then((weapon) => {
                        let passivePromise = Promise.resolve({})
                        let statsPromise = Promise.resolve({});
                        if (weapon.hasPassive) {
                            passivePromise = inquirer.prompt([
                                {
                                    type: 'list',
                                    message: 'Passive effect type?',
                                    choices: ['lifesteal', 'critbonus', 'manaOnKill', 'poison', 'burn', 'stun'],
                                    name: 'type'
                                },
                                {
                                    type: 'input',
                                    message: 'Passive power/percentage?',
                                    name: 'power'
                                },
                            ])
                        }

                        if (weapon.hasStats) {
                            statsPromise = inquirer.prompt([
                                {
                                    type: 'number',
                                    message: 'Strength bonus?',
                                    name: 'strength',
                                    default: 0
                                },
                                {
                                    type: 'number',
                                    message: 'Agility bonus?',
                                    name: 'agility',
                                    default: 0
                                },
                                {
                                    type: 'number',
                                    message: 'Defense bonus?',
                                    name: 'defense',
                                    default: 0
                                },
                                {
                                    type: 'number',
                                    message: 'Wit bonus?',
                                    name: 'wit',
                                    default: 0
                                }
                            ]);
                        }


                        return Promise.all([statsPromise, passivePromise]).then(([stats, passive]) => {

                            if (weapon.sprite === '') {
                                if (weapon.type === 'Magic') {
                                    weapon.sprite = './assets/sprites/items/weapons/crookedstaff.png'
                                } else if (weapon.type === 'Melee') {
                                    weapon.sprite = './assets/sprites/items/weapons/rustedblade.png'
                                } else if (weapon.type === 'Ranged') {
                                    weapon.sprite = './assets/sprites/items/weapons/creakingbow.png'
                                }
                            }
                            const newWeapon = {
                                name: weapon.name,
                                type: weapon.type,
                                damage: weapon.damage,
                                minSkillLevel: weapon.minSkillLevel,
                                skill: {
                                    name: weapon.skillName,
                                    effect: weapon.skillEffect,
                                    basePower: weapon.skillBasePower,
                                    scalingPerLevel: weapon.skillScalingPerLevel,
                                    cooldown: weapon.skillCooldown,
                                    description: weapon.skillDescription,
                                },
                                description: weapon.description,
                                rarity: weapon.rarity,
                                sellPrice: weapon.sellPrice,
                                stackable: false,
                                sprite: weapon.sprite,
                                itemType: 'weapon'
                            };
                            if (weapon.hasPassive) {
                                newWeapon.passiveEffect = {
                                    type: passive.type,
                                    power: passive.power,
                                }

                            }

                            if (weapon.hasStats) {
                                newWeapon.stats = stats;
                            }


                            saveWeaponToDatabase(newWeapon);
                            askToCreateAnother();
                        });
                    });
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
                    ])
                    .then((equip) => {
                        const newEquip = {
                            type: equip.type,
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
                            name: 'description',
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