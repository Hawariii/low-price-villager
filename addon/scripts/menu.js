import { ActionFormData } from "@minecraft/server-ui";

export function openMenu(player, villagerEnabled, auraEnabled) {

    const form = new ActionFormData();

    form.title("§6Low Price Villager");

    form.body(
`§fCurrent Status

§a🟢 Villager Discount
${villagerEnabled ? "§aEnabled" : "§cDisabled"}

§d✨ Enchant Aura
${auraEnabled ? "§aEnabled" : "§cDisabled"}

§8────────────────────`
    );

    form.button("§eToggle Villager Discount");
    form.button("§dToggle Enchant Aura");
    form.button("§7Close");

    return form.show(player);
}            case 0:
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
