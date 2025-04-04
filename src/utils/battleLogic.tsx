
import { useGame } from "./gameContext";
import { usePlayer } from "./playerContext";
// import { Player } from "../classes/character/player/players";
// import { Enemy } from "../classes/character/enemy/enemy";
import { Weapon } from "../classes/item/weapons";
export const useBattle = () => {
  const { enemy, setEnemy, setNarration } = useGame();
  const { player, setPlayer } = usePlayer();

  const playerAttack = () => {
    if (!enemy) return;
    const weapon = player.inventory.find(item => item instanceof Weapon)
    let damage = 0
    if (!weapon) {
        damage = (player.strength - enemy.defense) * ( 1 + Math.random()/2)
        console.log(damage)
    } else if (weapon) {
        damage = (player.strength + weapon.damage - enemy.defense) * (1 + Math.random() * .5)
    }
    setEnemy({ ...enemy, health: enemy.health - damage });
    setNarration(`You dealt ${damage} damage to the ${enemy.name}.`);
  };

  const enemyAttack = () => {
    if (!enemy) return;
    const damage = (enemy.strength - player.defense) * (1 + Math.random()/2)
    setPlayer({...player, health: player.health - damage})
    setNarration(`The enemy ${enemy.name} dealt ${damage} damage to you!`)
  }

  const flee = () => {

    if (player.agility > enemy?.agility!) {
        setEnemy(null)
    }
    const successChance = Math.random();
    if (successChance > 0.5) {
      setNarration("You successfully fled the battle!");
      setEnemy(null); // End the battle
    } else {
      setNarration("You failed to flee!");
    }
  };

  const useItem = (itemName: string) => {
    if (!player) return;
    if (itemName === "Potion") {
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
    } else if (enemy?.agility! == player.agility) {
        const speedTieBreak = Math.random()
        turns = speedTieBreak > .5 ? ["enemy", "player"] : ["player", "enemy"]
    }
    return turns
  }

  const executeTurnOrder = () => {
   const turns = determineTurnOrder()
   let currentTurnIndex = 0
   const executeNextTurn = () => {
    if (currentTurnIndex >= turns.length) {
        // All turns for this round are complete
        console.log("Round complete!");
        return;
      }
      
      const currentTurn = turns[currentTurnIndex]
      
      if (currentTurn === "player") {
          playerAttack();
          if (enemy?.health! <= 0) {
              setEnemy(null);
              console.log("Enemy killed!");
              return; // End the battle
            }
        } else if (currentTurn === "enemy") {
            enemyAttack();
            if (player.health <= 0) {
                console.log("You died!");
                return; // End the battle
            }
        }
        
        currentTurnIndex++
        setTimeout(executeNextTurn, 2000)
    }
    executeNextTurn()
  }
 
 
 
  return { determineTurnOrder, executeTurnOrder, playerAttack, enemyAttack, flee, useItem };
};