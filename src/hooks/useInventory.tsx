import { usePlayer } from "../utils/playerContext";
import Item from "../classes/item/item";
export const useInventory = () => {
  const { player, setPlayer } = usePlayer();

  const addItem = (item: Item) => {
    if (!player) return;
    setPlayer({
      ...player,
      inventory: [...player.inventory, item]
    });
  };

  const addGold = (amount: number) => {
    if (!player) return;
    setPlayer({
      ...player,
      gold: player.gold + amount
    });
  };

  const removeItem = (itemIndex: number) => {
    if (!player) return;
    const newInventory = player.inventory.filter((_: any, index: any) => index !== itemIndex);
    setPlayer({
      ...player,
      inventory: newInventory
    });
  };

  return { addItem, addGold, removeItem };
};