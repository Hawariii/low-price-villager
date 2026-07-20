import { world, system } from "@minecraft/server";
import { CONFIG } from "./config.js";

const VILLAGER_TAG = "lpv_villager";
const AURA_TAG = "lpv_aura";
const INIT_TAG = "lpv_initialized";

// ==========================
// Default ON (sekali saja)
// ==========================

world.afterEvents.playerSpawn.subscribe((event) => {

    if (!event.initialSpawn) return;

    const player = event.player;

    if (player.hasTag(INIT_TAG)) return;

    player.addTag(INIT_TAG);
    player.addTag(VILLAGER_TAG);
    player.addTag(AURA_TAG);

});

// ==========================
// Enable
// ==========================

export function enableVillager(player) {

    if (player.hasTag(VILLAGER_TAG)) return;

    player.addTag(VILLAGER_TAG);

    player.sendMessage(CONFIG.messages.villagerOn);

}

// ==========================
// Disable
// ==========================

export function disableVillager(player) {

    if (!player.hasTag(VILLAGER_TAG)) return;

    player.removeTag(VILLAGER_TAG);

    player.removeEffect(CONFIG.villager.effect);

    player.sendMessage(CONFIG.messages.villagerOff);

}

// ==========================
// Status
// ==========================

export function isVillagerEnabled(player) {

    return player.hasTag(VILLAGER_TAG);

}

// ==========================
// Refresh Effect
// ==========================

system.runInterval(() => {

    for (const player of world.getAllPlayers()) {

        if (!player.hasTag(VILLAGER_TAG)) continue;

        player.addEffect(
            CONFIG.villager.effect,
            CONFIG.duration,
            {
                amplifier: CONFIG.villager.amplifier,
                showParticles: CONFIG.villager.showParticles
            }
        );

    }

}, CONFIG.interval);
}, CONFIG.interval);        enableVillager(player);
    }
}
