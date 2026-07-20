export const CONFIG = {

    // =========================
    // General
    // =========================

    toggleItem: "minecraft:stick",

    interval: 20,

    duration: 300,

    // =========================
    // Villager
    // =========================

    villager: {
        effect: "minecraft:village_hero",
        amplifier: 255,
        showParticles: false
    },

    // =========================
    // Aura
    // =========================

    aura: {
        particle: "minecraft:enchanting_table_particle",

        interval: 1,

        particles: 8,

        radius: 0.85,

        height: 1,

        speed: 0.12
    },

    // =========================
    // Menu
    // =========================

    menu: {

        title: "§6Low Price Villager",

        body: "§7Select a feature to toggle.",

        buttons: {

            villager: "§eToggle Villager Discount",

            aura: "§dToggle Enchant Aura",

            close: "§7Close"

        }

    },

    // =========================
    // Messages
    // =========================

    messages: {

        villagerOn: "§a+ Villager Discount Enabled",

        villagerOff: "§c-Villager Discount Disabled",

        auraOn: "§a+ Enchant Aura Enabled",

        auraOff: "§c- Enchant Aura Disabled"

    }

};
