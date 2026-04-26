export const dynamic = 'force-static'
 
export async function GET() {
  const res = await fetch('https://dummyjson.com/products')
  const {products} = await res.json()
 
  return Response.json({ products })
}