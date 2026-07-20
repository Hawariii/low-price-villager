import { world, system } from "@minecraft/server";
import { CONFIG } from "./config.js";

const TAG = "lpv_villager";

// ==========================
// Enable
// ==========================

export function enableVillager(player) {

    if (player.hasTag(TAG)) return;

    player.addTag(TAG);

    player.sendMessage(CONFIG.messages.villagerOn);
}

// ==========================
// Disable
// ==========================

export function disableVillager(player) {

    if (!player.hasTag(TAG)) return;

    player.removeTag(TAG);

    player.removeEffect(CONFIG.villager.effect);

    player.sendMessage(CONFIG.messages.villagerOff);
}

// ==========================
// Status
// ==========================

export function isVillagerEnabled(player) {

    return player.hasTag(TAG);

}

// ==========================
// Refresh Effect
// ==========================

system.runInterval(() => {

    for (const player of world.getAllPlayers()) {

        if (!player.hasTag(TAG)) continue;

        player.addEffect(
            CONFIG.villager.effect,
            CONFIG.duration,
            {
                amplifier: CONFIG.villager.amplifier,
                showParticles: CONFIG.villager.showParticles
            }
        );
    }

}, CONFIG.interval);        enableVillager(player);
    }
}
