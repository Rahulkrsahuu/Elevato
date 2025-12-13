import { StreamChat } from "stream-chat";
import { ENV } from "./env.js";

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
    console.log("STREAM_API_KEY or STREAME_API_SECRET is missing");
}

export const chatClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertSteameUser = async(userData) => {          //upsert => use because use of upsert means i want to work update and create both;
    try {
        await chatClient.upsertUser(userData)
        console.log("Stream user upserted successfully:", userData);
    } catch (error) {
        console.log("Error upserting Stream user:", error)
    }
};

export const deleteSteameUser = async(userId) => {          //upsert => use because use of upsert means i want to work update and create both;
    try {
        await chatClient.deleteUser(userId);
        console.log("Stream user deleted successfully:", userId);
    } catch (error) {
        console.log("Error deleteing the Stream user:", error)
    }
};

// todo: add another method to generateToken