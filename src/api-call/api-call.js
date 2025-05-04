export default async function ApiCall(e) {
    let response = await fetch( `https://dummyjson.com/products/${e}` )
    let data = await response.json()
    return data
}