import { CONFIG } from "./config.js";

export function enableVillager(player) {
    if (!player.hasTag(CONFIG.tags.villager)) {
        player.addTag(CONFIG.tags.villager);
    }

    player.runCommand(
        `effect @s ${CONFIG.villager.effect} ${CONFIG.villager.duration} ${CONFIG.villager.amplifier} ${CONFIG.villager.hideParticles}`
    );

    player.onScreenDisplay.setActionBar(CONFIG.messages.villagerOn);
}

export function disableVillager(player) {
    player.removeTag(CONFIG.tags.villager);

    player.runCommand(
        `effect @s clear ${CONFIG.villager.effect}`
    );

    player.onScreenDisplay.setActionBar(CONFIG.messages.villagerOff);
}

export function applyVillager(player) {
    if (!player.hasTag(CONFIG.tags.villager)) return;

    player.runCommand(
        `effect @s ${CONFIG.villager.effect} ${CONFIG.villager.duration} ${CONFIG.villager.amplifier} ${CONFIG.villager.hideParticles}`
    );
}

export function toggleVillager(player) {
    if (player.hasTag(CONFIG.tags.villager)) {
        disableVillager(player);
    } else {
        enableVillager(player);
    }
}
