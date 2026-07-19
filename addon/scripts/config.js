export const CONFIG = {
    // Item untuk membuka menu
    menuItem: "minecraft:stick",

    // Tags
    tags: {
        villager: "lpv:villager",
        aura: "lpv:aura"
    },

    // Hero of the Village
    villager: {
        effect: "village_hero",
        duration: "infinite",
        amplifier: 255,
        hideParticles: true
    },

    // Aura
    aura: {
        particle: "minecraft:enchanting_table_particle",
        interval: 5,
        yOffset: 1.0
    },

    // UI
    ui: {
        title: "§6Low Price Villager",
        body: "Select a feature to toggle."
    },

    // Messages
    messages: {
        villagerOn: "§a + Villager Discount Enabled",
        villagerOff: "§c - Villager Discount Disabled",
        auraOn: "§a + Enchant Aura Enabled",
        auraOff: "§c - Enchant Aura Disabled"
    }
};
