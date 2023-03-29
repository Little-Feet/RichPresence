import dotenv from "dotenv";

dotenv.config()

const CLIENT_ID = process.env.CLIENT_ID;

if (!CLIENT_ID) throw new Error("Missing environment variable");

interface Environment {
    CLIENT_ID: string;
}

const Config: Environment = {
    CLIENT_ID,
}

export default Config;