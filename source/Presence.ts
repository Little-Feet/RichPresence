import Config from "./Config";
import { ClientReady } from "./Events";
import RichPresence from "discord-rpc";
const clientId = Config.CLIENT_ID;
const client = new RichPresence.Client({ transport: "ipc" });

client.on("ready", async () => await ClientReady(client));

client.login({ clientId }).catch(error => console.error(error));