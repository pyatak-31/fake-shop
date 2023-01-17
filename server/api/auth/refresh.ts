export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const body = await readBody(event);
    
    const data:any = await $fetch(`https://securetoken.googleapis.com/v1/token`, {
        method: 'POST',
       
        params: {
            key: config.API_KEY
        },
        body: { ...body, grant_type: 'refresh_token' }
    });

    setCookie(event, config.public.ACCESS_TOKEN, data.id_token);
    setCookie(event, config.public.REFRESH_TOKEN, data.refresh_token);
    
    return { [config.public.ACCESS_TOKEN]:  data.access_token, user_id: data.user_id};
});
