
import { usePlayer } from "../utils/playerContext";
import { useGame } from "../utils/gameContext";
// import { Player } from "../classes/character/player/players";
// import { Enemy } from "../classes/character/enemy/enemy";
import { Weapon } from "../classes/item/weapons";
import Item from "../classes/item/item";
export const useBattle = () => {
  const { enemy, setEnemy, setNarration, setBattle } = useGame();
  const { player, setPlayer } = usePlayer();

  const flee = () => {

    if (player.agility > enemy?.agility!) {
      setEnemy(null)
    } else {
      const successChance = Math.random();
      if (successChance > 0.5) {
        setNarration("You successfully fled the battle!");
        setEnemy(null); // End the battle
        setBattle(false)
      } else {
        setNarration("You failed to flee!");
      }
    }
  };

  const useItem = (item: Item) => {
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

  const playerAttack = () => {
    if (!enemy) return;

    // If enemy is faster, they attack first!
    if (!isPlayerFaster()) {
      setNarration(`The ${enemy.name} is faster and strikes first!`);
      setTimeout(() => {
        enemyAttack();
        // Then player attacks after enemy
        setTimeout(() => {
          executePlayerAttack();
        }, 1500);
      }, 1000);
    } else {
      // Player is faster - attack normally
      executePlayerAttack();
      // Enemy counter-attacks
      setTimeout(() => {
        enemyAttack();
      }, 1500);
    }
  };

  const executePlayerAttack = () => {
    if (!enemy) return;
    
    const weapon = player.inventory.find(item => item instanceof Weapon);
    let damage = Math.floor((player.strength + (weapon?.damage || 0) - enemy.defense) * (1 + Math.random() * 0.5));
    damage = Math.max(1, damage);

    const newEnemyHealth = enemy.health - damage;
    setEnemy({ ...enemy, health: newEnemyHealth });
    setNarration(`You dealt ${damage} damage to the ${enemy.name}!`);

    if (newEnemyHealth <= 0) {
      setNarration(`You defeated the ${enemy.name}!`);
      setEnemy(null);
      setBattle(false);
    }
  };

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



