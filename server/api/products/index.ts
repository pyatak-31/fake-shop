export default defineEventHandler(async (event) => {
    // const data = useQuery(event);
    // const b = await readBody(event);
    // if (true) {
    //     return sendError(event, createError({
    //         statusCode: 400,
    //         statusMessage: 'hop'
    //     }))
    // }
    try {
        const data = await $fetch('https://fakestoreapi.com/products');
        return data;
        
    } catch (error: any) {
        return sendError(event, createError({
            statusCode: error.response.status,
            statusMessage: error.response.statusText
        }));
    }
});
