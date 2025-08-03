
import { usePlayer } from "../utils/playerContext";
import { useGame } from "../utils/gameContext";
// import { Player } from "../classes/character/player/players";
// import { Enemy } from "../classes/character/enemy/enemy";
// import { Weapon } from "../classes/item/weapons";
// import Item from "../classes/item/item";
// import { Player } from "../classes/character/player/players";
export const useBattle = () => {
  const { enemy, setEnemy, setNarration, setBattle } = useGame();
  const { player, setPlayer } = usePlayer();

  const flee = () => {

    if (player.agility > enemy?.agility!) {
      setEnemy(null)
      setBattle(false)
      setNarration('You successfully fled the battle!')
    } else {
      const successChance = Math.random();
      if (successChance > 0.5) {
        setNarration("You successfully fled the battle!");
        setEnemy(null); // End the battle
        setBattle(false)
        console.log(enemy)
      } else {
        setNarration("You failed to flee!");
      }
    }
  };

  const useItem = (item: any) => {
    if (!player) return;
    if (item.name === "Potion") {
      setPlayer({
        ...player,
        health: Math.min(player.maxHealth, player.health + 50),
      });
      setNarration("You used a Potion and restored 50 health.");
    } else {
      setNarration("Item not recognized.");
    }
  };

  const determineTurnOrder = () => {
    let turns: string[] = []
    if (enemy?.agility! > player.agility) {
      turns = ["enemy", "player"]
    } else if (enemy?.agility! < player.agility) {
      turns = ["player", "enemy"]
    } else if (enemy?.agility! === player.agility) {
      const speedTieBreak = Math.random()
      turns = speedTieBreak > .5 ? ["enemy", "player"] : ["player", "enemy"]
    }
    return turns
  }

  const isPlayerFaster = () => {
    if (!enemy) return true;
    if (player.agility > enemy.agility) return true;
    if (player.agility < enemy.agility) return false;
    // Tie - random
    return Math.random() > 0.5;
  };

  const playerAttack = (useSkill = false) => {
    if (!enemy) return;

    // If enemy is faster, they attack first!
    if (!isPlayerFaster()) {
      setNarration(`The ${enemy.name} is faster and strikes first!`);
      setTimeout(() => {
        enemyAttack();
        // Then player attacks after enemy
        setTimeout(() => {
          executePlayerAttack(useSkill);
        }, 1500);
      }, 1000);
    } else {
      // Player is faster - attack normally
      executePlayerAttack(useSkill);
      // Enemy counter-attacks
      setTimeout(() => {
        enemyAttack();
      }, 1500);
    }

    if (player.currentSkillCooldown > 0) {
      setPlayer({ ...player, currentSkillCooldown: player.currentSkillCooldown-- })
    }
  };

  const changeEnemyStatus = (effect: string | null) => {
    setEnemy({ ...enemy, status: effect })
  }

  // const changePlayerStatus = (effect: string | null) => {
  //   setPlayer({... player, status: effect})
  // }
  const executePlayerAttack = (skillUsed: boolean) => {


    if (!enemy) return;
    const weapon = player.equippedWeapon;
    let damage = 0
    let heal = 0
    let effects = []
    let newStatus = null
    const skill = weapon.skill

    if (player.equippedWeapon === null) {
      damage = Math.max(1, player.strength - enemy.defense)
      const newEnemyHealth = enemy.health - damage
      setEnemy({ ...enemy, health: newEnemyHealth })
      setNarration(`You desperately punch for ${damage} damage!`)
      if (newEnemyHealth <= 0) {
        setNarration(`You defeated the ${enemy.name}!`);
        setEnemy(null);
        setBattle(false);
      }

    } else {

      // TODO: Implement skill logic
      if (weapon.passiveEffect) effects.push({ type: weapon.passiveEffect.type, power: weapon.passiveEffect.power })
      if (skillUsed) {
        // Get weapon skill and change effect to effect
        setPlayer({ ...player, currentSkillCooldown: weapon.skill.cooldown })
        effects.push(skill.effect)
      } else {
        damage = weapon?.damage + player.strength - enemy.defense
      }
      // Calculate damage or heal
      effects.forEach(effect => {

        switch (effect) {
          case 'heal':
            heal = skill.basePower
            break;
          case 'powerStrike':
            damage = (weapon?.damage + player.strength) * (1 + skill.basePower / 100) - enemy.defense
            break;
          case 'armorPierce':
            damage = weapon?.damage + player.strength - (enemy.defense - skill.basePower)
            break;
        }
      })
      if (effects.includes('lifesteal')) {
        heal += Math.floor(damage * (weapon.passiveEffect.power / 100)); // Lifesteal percentage
      }


      const newEnemyHealth = enemy.health - damage;


      if (damage === 0 && heal > 0) {
        setPlayer({ ...player, health: player.health + heal })
        setNarration(`You restored ${heal} health!`)
      } else if (damage > 0 && heal === 0) {
        setEnemy({ ...enemy, health: newEnemyHealth })
        setNarration(`You dealt ${damage} damage to the ${enemy.name}!`);
      } else if (damage > 0 && heal > 0) {
        setPlayer({ ...player, health: player.health + heal })
        setEnemy({ ...enemy, health: newEnemyHealth })
      }

      if (newStatus !== null) {
        changeEnemyStatus(newStatus)
      }

      if (newEnemyHealth <= 0) {
        setNarration(`You defeated the ${enemy.name}!`);
        setEnemy(null);
        setBattle(false);
      }
    };
  }

  const enemyAttack = () => {
    if (!enemy || !player) return;

    const damage = Math.floor((enemy.strength - player.defense) * (1 + Math.random() * 0.5));
    const finalDamage = Math.max(1, damage);

    const newPlayerHealth = player.health - finalDamage;
    setPlayer({ ...player, health: newPlayerHealth });
    setNarration(`The ${enemy.name} dealt ${finalDamage} damage to you!`);

    if (newPlayerHealth <= 0) {
      setNarration("You died!");
      setBattle(false);
    }
  };
  return { determineTurnOrder, playerAttack, enemyAttack, flee, useItem };
}



