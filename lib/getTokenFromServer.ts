import { headers } from "next/headers";
import { auth } from "./auth";

export const getTokenFromServer = async() => {
    const tokenData = await auth.api.getToken({
        headers: await headers()
    });

    const token = typeof tokenData === 'string' ? tokenData : tokenData?.token;

    return token;
}