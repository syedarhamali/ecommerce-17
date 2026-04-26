// 'use client'
// import { useEffect, useState } from "react"

// export default function ProductPage() {
//     const [products, setProducts] = useState([])

//     useEffect(() => {
//         (async () => {
//             const response = await fetch('https://dummyjson.com/products')
//             const { products: productsData } = await response.json()
//             setProducts(productsData)
//         })()
//     }, [])

//     return (
//         <div>
//             <h1>Products</h1>
//             <div className="flex flex-wrap gap-4">
//             {products?.map(() => {
//                 return (
//                     <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border hover:shadow-xl transition">

//                         <div className="relative">
//                             <img
//                                 src="https://via.placeholder.com/400x300"
//                                 alt="Essence Mascara"
//                                 className="w-full h-56 object-cover"
//                             />

//                             <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
//                                 7% OFF
//                             </span>

//                             <span className="absolute top-3 right-3 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
//                                 Low Stock
//                             </span>
//                         </div>

//                         <div className="p-4 space-y-3">

//                             <h2 className="text-lg font-semibold text-gray-800">
//                                 Essence Mascara Lash Princess
//                             </h2>

//                             <p className="text-sm text-gray-500">
//                                 Brand: <span className="font-medium">Essence</span>
//                             </p>

//                             <div className="flex items-center gap-2">
//                                 <span className="text-yellow-500">★★★★★</span>
//                                 <span className="text-sm text-gray-600">(4.94)</span>
//                             </div>

//                             <div className="flex items-center gap-2">
//                                 <span className="text-xl font-bold text-green-600">$9.99</span>
//                                 <span className="text-sm line-through text-gray-400">$10.75</span>
//                             </div>

//                             <p className="text-sm text-gray-600 line-clamp-2">
//                                 The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.
//                             </p>

//                             <div className="border-t pt-2">
//                                 <p className="text-xs text-gray-500 italic">
//                                     "Very satisfied!" - Scarlett Wright
//                                 </p>
//                             </div>

//                             <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
//                                 Add to Cart
//                             </button>

//                         </div>
//                     </div>
//                 )
//             })}
//             </div>

//         </div>
//     )
// }


export default async function ProductPage() {
    const response = await fetch('http://localhost:3000/api/login')
    const {products} = await response.json()
    return (
        <div>
            <h1>Products</h1>
            <div className="flex flex-wrap gap-4">
                {products?.map(() => {
                    return (
                        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border hover:shadow-xl transition">

                            <div className="relative">
                                <img
                                    src="https:via.placeholder.com/400x300"
                                    alt="Essence Mascara"
                                    className="w-full h-56 object-cover"
                                />

                                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                    7% OFF
                                </span>

                                <span className="absolute top-3 right-3 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                                    Low Stock
                                </span>
                            </div>

                            <div className="p-4 space-y-3">

                                <h2 className="text-lg font-semibold text-gray-800">
                                    Essence Mascara Lash Princess
                                </h2>

                                <p className="text-sm text-gray-500">
                                    Brand: <span className="font-medium">Essence</span>
                                </p>

                                <div className="flex items-center gap-2">
                                    <span className="text-yellow-500">★★★★★</span>
                                    <span className="text-sm text-gray-600">(4.94)</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-bold text-green-600">$9.99</span>
                                    <span className="text-sm line-through text-gray-400">$10.75</span>
                                </div>

                                <p className="text-sm text-gray-600 line-clamp-2">
                                    The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.
                                </p>

                                <div className="border-t pt-2">
                                    <p className="text-xs text-gray-500 italic">
                                        "Very satisfied!" - Scarlett Wright
                                    </p>
                                </div>

                                <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                                    Add to Cart
                                </button>

                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}