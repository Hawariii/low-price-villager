import { world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

import { CONFIG } from "./config.js";

import {
    enableVillager,
    disableVillager,
    isVillagerEnabled
} from "./effects.js";

import {
    enableAura,
    disableAura,
    isAuraEnabled
} from "./particles.js";

function openMenu(player) {

    const villager = isVillagerEnabled(player);
    const aura = isAuraEnabled(player);

    const form = new ActionFormData()
        .title(CONFIG.menu.title)
        .body(
`§fCurrent Status

§a🟢 Villager Discount
${villager ? "§aEnabled" : "§cDisabled"}

§d✨ Enchant Aura
${aura ? "§aEnabled" : "§cDisabled"}

§8────────────────────`
        )
        .button(CONFIG.menu.buttons.villager)
        .button(CONFIG.menu.buttons.aura)
        .button(CONFIG.menu.buttons.close);

    form.show(player).then(result => {

        if (result.canceled) return;

        switch (result.selection) {

            case 0:

                villager
                    ? disableVillager(player)
                    : enableVillager(player);

                openMenu(player);

                break;

            case 1:

                aura
                    ? disableAura(player)
                    : enableAura(player);

                openMenu(player);

                break;

            case 2:

                return;

        }

    });

}

world.afterEvents.itemUse.subscribe(event => {

    const player = event.source;
    const item = event.itemStack;

    if (!item) return;

    if (item.typeId !== CONFIG.toggleItem) return;

    openMenu(player);

});    openMenu(player);

});    });
}
