import { world, system } from "@minecraft/server";
import { CONFIG } from "./config.js";

const playerAngles = new Map();

export function startAura() {

    system.runInterval(() => {

        if (!CONFIG.aura.enabled) return;

        for (const player of world.getAllPlayers()) {

            if (!player.hasTag("lpv_aura")) continue;

            let angle = playerAngles.get(player.id) ?? 0;

            angle += CONFIG.aura.speed;

            playerAngles.set(player.id, angle);

            const location = player.location;

            const radius = CONFIG.aura.radius;
            const height = CONFIG.aura.height;

            for (let i = 0; i < CONFIG.aura.particles; i++) {

                const a =
                    angle +
                    ((Math.PI * 2) / CONFIG.aura.particles) * i;

                const x = location.x + Math.cos(a) * radius;
                const y = location.y + height;
                const z = location.z + Math.sin(a) * radius;

                player.dimension.spawnParticle(
                    CONFIG.aura.particle,
                    { x, y, z }
                );
            }
        }

    }, CONFIG.aura.interval);
}
