export default defineEventHandler(async (event) => {
    // const data = useQuery(event);
    // const b = await readBody(event);
    // if (true) {
    //     return sendError(event, createError({
    //         statusCode: 400,
    //         statusMessage: 'hop'
    //     }))
    // }
    const data = await $fetch('https://fakestoreapi.com/products');
    return data;
});
