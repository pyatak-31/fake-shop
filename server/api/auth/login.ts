import { NuxtError } from "nuxt/dist/app/composables";
import { Login } from "~~/type/login.interface";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const body = await readBody(event);

    // if (body.username !== 'mor_2314' || body.password !== '83r5^_') {
    //     sendError(event, createError({
    //         statusCode: 403,
    //         message: 'Не верное имя рольхователя или пароль',
    //         data: {
    //             mes: 'Не верное имя рольхователя или пароль'
    //         }
    //     }));
    // }

    // const data = await $fetch<Login>(`${ config.public.BASE_URL }/auth/login`, {
    //     method: 'POST',
    //     body
    // });
    try {
        const data:any = await $fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword`, {
            method: 'POST',
            // headers: {
            //     Authorization: `Bearer 132`,
            // },
            params: {
                key: config.API_KEY
            },
            body: { ...body, returnSecureToken: true }
        });
        console.log(data);
        
        setCookie(event, 'access-token', data.idToken);
        setCookie(event, 'refresh-token', data.refreshToken);
    
        return data;
    } catch (error) {
        if ((error as NuxtError).statusCode === 400) {
            const err = (error as NuxtError);
            
            console.log(err.data.errors);
            sendError(event, createError({
                statusCode: err.statusCode,
                statusMessage: err.statusMessage, 
                data: {
                    message: 'Не верное имя рольхователя или пароль',
                    // errors: [{
                    //     title: 'title',
                    //     message: 'messaage'
                    // }]
                }
            }));
        }
    }
});
