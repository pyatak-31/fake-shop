export default defineEventHandler(async (event) => {
    // const data = useQuery(event);
    const body = await readBody(event);
    
    const data = await $fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        body
    });
    return data;
});
