import { Client } from "discord-rpc";
import { setActivity } from "./Functions";

export const ClientReady = (client: Client) => {
    console.log(`Connected to ${client.user?.username}#${client.user?.discriminator}`);

    setActivity(client);
}