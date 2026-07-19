import { ActionFormData } from "@minecraft/server-ui";
import { CONFIG } from "./config.js";
import { toggleVillager } from "./effects.js";
import { toggleAura } from "./particles.js";

export function openMenu(player) {

    const villagerStatus = player.hasTag(CONFIG.tags.villager)
        ? "§aEnabled"
        : "§cDisabled";

    const auraStatus = player.hasTag(CONFIG.tags.aura)
        ? "§aEnabled"
        : "§cDisabled";

    const form = new ActionFormData()
        .title("§6Low Price Villager")
        .body(
`§fCurrent Status

🟢 Villager Discount
${villagerStatus}

✨ Enchant Aura
${auraStatus}

§8────────────────────`
        )
        .button("§eToggle Villager Discount")
        .button("§dToggle Enchant Aura")
        .button("§7Close");

    form.show(player).then((result) => {
        if (result.canceled) return;

        switch (result.selection) {
            case 0:
                toggleVillager(player);
                break;

            case 1:
                toggleAura(player);
                break;

            case 2:
                return;
        }
    });
}
