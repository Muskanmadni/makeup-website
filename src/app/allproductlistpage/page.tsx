'use client'
import { CeramicProducts } from "@/components/ceramicproduct"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Suspense } from "react"

interface Product {
  _id: string;
  imageURL: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
  features: string;
}

export default function AllProductListPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductContent />
    </Suspense>
  )
}

function ProductContent() {
  const searchParams = useSearchParams()
  const [quantity, setQuantity] = useState<number>(1);
  const [product, setProduct] = useState<Product | null>(null)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter();

  useEffect(() => {
    try {
      const productParam = searchParams.get('product')
      if (productParam) {
        setProduct(JSON.parse(productParam))
      }
    } catch (err) {
      setError('Error loading product')
      console.error('Error parsing product:', err)
    }
  }, [searchParams])

  const handleQuantityIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleQuantityDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleAddToCart = () => {
    if (product) {
      const cart = localStorage.getItem("cart") || "[]";
      const cartItems: Product[] = JSON.parse(cart);
      const existingItemIndex = cartItems.findIndex((item) => item._id === product._id);

      if (existingItemIndex > -1) {
        cartItems[existingItemIndex].quantity += quantity;
      } else {
        cartItems.push({ ...product, quantity });
      }
      localStorage.setItem("cart", JSON.stringify(cartItems));
      router.push("/cart");
    }
  };

  if (error) return <div className="text-red-500 p-4">{error}</div>
  if (!product) return <div className="p-4">Loading...</div>

  return (
    <section className="flex justify-center p-4">
      <Card className="flex flex-col md:flex-row gap-8 items-center w-full max-w-4xl p-6 shadow-lg rounded-xl">
        <CardHeader className="w-full md:w-1/2">
          {product.imageURL && (
            <Image width={305} height={375} src={product.imageURL} alt="Product Image" className="w-full h-auto object-cover rounded-lg" />
          )}
        </CardHeader>
        <div className="flex flex-col md:w-1/2 space-y-4">
          <CardTitle className="text-2xl font-semibold">{product.name}</CardTitle>
          <p className="text-lg font-medium">Rs{product.price}</p>
          <CardDescription className="text-gray-600">
            <h1 className="font-semibold">Description</h1>
            <p>{product.description}</p>
          </CardDescription>
          <div className="flex items-center space-x-4">
            <label htmlFor="quantity" className="text-lg font-medium">Quantity:</label>
            <button onClick={handleQuantityDecrease} className="px-3 py-1 border rounded-md">-</button>
            <span className="px-3 py-1 border rounded-md">{quantity}</span>
            <button onClick={handleQuantityIncrease} className="px-3 py-1 border rounded-md">+</button>
          </div>
          <CardDescription className="text-gray-600">Features:{product.features}</CardDescription>
          <button onClick={handleAddToCart} className="w-full md:w-40 py-2 bg-[#2A254B] text-white rounded-lg hover:bg-[#1F1A37] transition-all">
            Add to cart
          </button>
        </div>
      </Card>
    </section>
  )
}
