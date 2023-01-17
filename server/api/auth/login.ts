import { LoginResponseData } from "~~/type/auth.interface";
import { sendResError } from "~~/use/sendResError";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const body = await readBody(event);

    try {
        const data = await $fetch<LoginResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword`, {
            method: 'POST',
            params: {
                key: config.API_KEY
            },
            body: { ...body, returnSecureToken: true }
        });
        
        setCookie(event, config.public.ACCESS_TOKEN, data.idToken);
        setCookie(event, config.public.REFRESH_TOKEN, data.refreshToken);
    
        return data;
    } catch (error) {
        sendResError(event, error);
    }
});
