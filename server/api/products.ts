export default defineEventHandler(async (event) => {
    // const data = useQuery(event);
    const b = await readBody(event);
    
    const data = await $fetch('https://fakestoreapi.com/products');
    console.log('here');
    return data;
});
