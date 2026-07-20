import { world, system } from "@minecraft/server";
import { CONFIG } from "./config.js";

const TAG = "lpv_aura";

// ==========================
// Enable
// ==========================

export function enableAura(player) {

    if (player.hasTag(TAG)) return;

    player.addTag(TAG);

    player.sendMessage(CONFIG.messages.auraOn);

}

// ==========================
// Disable
// ==========================

export function disableAura(player) {

    if (!player.hasTag(TAG)) return;

    player.removeTag(TAG);

    player.sendMessage(CONFIG.messages.auraOff);

}

// ==========================
// Status
// ==========================

export function isAuraEnabled(player) {

    return player.hasTag(TAG);

}

// ==========================
// Random Aura
// ==========================

system.runInterval(() => {

    for (const player of world.getAllPlayers()) {

        if (!player.hasTag(TAG)) continue;

        const { x, y, z } = player.location;

        // Spawn 3 particle setiap interval
        for (let i = 0; i < 3; i++) {

            const px = x + (Math.random() - 0.5) * 1.6;
            const py = y + 0.3 + Math.random() * 1.5;
            const pz = z + (Math.random() - 0.5) * 1.6;

            player.runCommand(
                `particle ${CONFIG.aura.particle} ${px} ${py} ${pz}`
            );

        }

    }

}, CONFIG.aura.interval);        for (let i = 0; i < CONFIG.aura.particles; i++) {

            const angle =
                rotation +
                (Math.PI * 2 / CONFIG.aura.particles) * i;

            const px = x + Math.cos(angle) * CONFIG.aura.radius;
            const py = y + CONFIG.aura.height;
            const pz = z + Math.sin(angle) * CONFIG.aura.radius;

            player.dimension.runCommand(
                `particle ${CONFIG.aura.particle} ${px} ${py} ${pz}`
            );
        }

    }

}, CONFIG.aura.interval);                player.dimension.spawnParticle(
                    CONFIG.aura.particle,
                    { x, y, z }
                );
            }
        }

    }, CONFIG.aura.interval);
}
