import { Client } from "discord-rpc";

export function setActivity(client: Client) {
    if (!client) throw new Error("No client available");

    client.setActivity({
        details: "Passionate about learning new things 📑",
        state: "Studying in IT, Programming & Cybersecurity 💻",
        startTimestamp: Date.now(),
        largeImageKey: "littlefeet",
        largeImageText: "LittleFeet",
        instance: false,
        buttons: [
            {
                label: "Discord 🐧",
                url: "https://discord.gg/eY8KSEyvm9"
            },
            {
                label: "GitHub 🐱",
                url: "https://github.com/Little-Feet"
            }
        ]
    })
}