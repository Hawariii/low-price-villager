import { world } from "@minecraft/server";

import { CONFIG } from "./config.js";
import { openMenu } from "./menu.js";
import { applyVillager } from "./effects.js";

// Buka menu saat menggunakan stick
world.afterEvents.itemUse.subscribe((event) => {
    const player = event.source;
    const item = event.itemStack;

    if (!player || !item) return;

    if (item.typeId !== CONFIG.menuItem) return;

    openMenu(player);
});

// Saat player respawn / join
world.afterEvents.playerSpawn.subscribe((event) => {
    const player = event.player;

    applyVillager(player);
});
