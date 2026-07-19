import { system, world } from "@minecraft/server";
import { CONFIG } from "./config.js";

export function enableAura(player) {
    if (!player.hasTag(CONFIG.tags.aura)) {
        player.addTag(CONFIG.tags.aura);
    }

    player.onScreenDisplay.setActionBar(CONFIG.messages.auraOn);
}

export function disableAura(player) {
    player.removeTag(CONFIG.tags.aura);
    player.onScreenDisplay.setActionBar(CONFIG.messages.auraOff);
}

export function toggleAura(player) {
    if (player.hasTag(CONFIG.tags.aura)) {
        disableAura(player);
    } else {
        enableAura(player);
    }
}

system.runInterval(() => {
    for (const player of world.getAllPlayers()) {

        if (!player.hasTag(CONFIG.tags.aura)) continue;

        const { x, y, z } = player.location;

        player.dimension.runCommand(
            `particle ${CONFIG.aura.particle} ${x} ${y + CONFIG.aura.yOffset} ${z}`
        );
    }
}, CONFIG.aura.interval);
