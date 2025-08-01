



import { useState } from "react";
// import { useEffect } from "react";

import WeaponsData from '../utils/data/weapons-database.json'
import ConsumablesData from '../utils/data/consumables-database.json'
import EquipablesData from '../utils/data/equipables-database.json'
import EnemiesData from '../utils/data/enemies-database.json'
import LootData from '../utils/data/enemyloot-database.json'


export const SpriteGallery = () => {

    type Tabs = 'enemies' | 'npcs' | 'weapons' | 'consumables' | 'equipables' | 'loot'
    const [currentTab, setCurrentTab] = useState<Tabs>('enemies')

    const getCurrentData = () => {
        switch(currentTab) {
            case 'enemies': return EnemiesData;
            case 'weapons': return WeaponsData;
            case 'equipables': return EquipablesData;
            case 'consumables': return ConsumablesData;
            case 'loot': return LootData
        }
    }
    return (
        <div>
            {/* Tab buttons */}
            <div>
                {(['enemies', 'weapons', 'consumables', 'equipables', 'loot'] as Tabs[]).map(tab => (
                    <button 
                        key={tab}
                        onClick={() => setCurrentTab(tab)}
                        style={{ 
                            backgroundColor: currentTab === tab ? '#4a90e2' : '#555',
                            color: 'white',
                            padding: '10px',
                            margin: '5px'
                        }}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            {/* Sprite Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
                {getCurrentData()?.map((item: any, index: number) => (
                    <div key={index} style={{ backgroundColor: '#3a3a3a', padding: '15px', borderRadius: '8px', color: 'lightgray' }}>
                        <img 
                            src={item.sprite} 
                            alt={item.name}
                            style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '96px', height: '96px', imageRendering: 'pixelated' }}
                        />
                        <h3>{item.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );



}