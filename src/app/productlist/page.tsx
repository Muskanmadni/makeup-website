"use client";
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Suspense } from 'react';

interface Product {
  _id: string;
  imageURL: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
  features: string;
}

export default function ProductList() {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <ProductContent />
    </Suspense>
  );
}

function ProductContent() {
  const searchParams = useSearchParams();
  const [quantity, setQuantity] = useState<number>(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    try {
      const productParam = searchParams.get('product');
      if (productParam) {
        const parsedProduct = JSON.parse(productParam);
        setProduct(parsedProduct);
      }
    } catch (err) {
      setError('Error loading product data');
      console.error('Error parsing product:', err);
    }
  }, [searchParams]);

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
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

  if (error) return <div className="text-red-500 p-4">{error}</div>;
  if (!product) return <div className="p-4">Loading product details...</div>;

  return (
    <section className="flex justify-center items-center p-6">
      <Card className="flex flex-col md:flex-row w-full max-w-5xl shadow-lg rounded-lg overflow-hidden">
        <CardHeader className="w-full md:w-1/2 p-4 bg-gray-100 flex justify-center items-center">
          {product.imageURL && (
            <Image
              width={350}
              height={400}
              src={product.imageURL}
              alt="Product image"
              className="w-full h-auto object-cover rounded-lg"
            />
          )}
        </CardHeader>
        <div className="flex flex-col w-full md:w-1/2 p-6">
          <CardTitle className="text-2xl font-bold text-gray-900 mb-4">{product.name}</CardTitle>
          <p className="text-lg text-gray-700 font-semibold mb-2">Rs {product.price}</p>
          <CardDescription className="text-gray-600 text-sm mb-4">
            <h2 className="font-semibold">Description</h2>
            <p className="mt-2">{product.description}</p>
          </CardDescription>
          <div className="flex items-center mb-4">
            <label htmlFor="quantity" className="mr-4 text-lg font-medium text-gray-800">Quantity:</label>
            <button onClick={() => handleQuantityChange(-1)} className="px-3 py-1 border rounded-md">-</button>
            <span className="mx-3 text-lg">{quantity}</span>
            <button onClick={() => handleQuantityChange(1)} className="px-3 py-1 border rounded-md">+</button>
          </div>
          <CardDescription className="text-gray-600 text-sm mb-6">
            <strong>Features:</strong> {product.features}
          </CardDescription>
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="w-full md:w-auto px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Card>
    </section>
  );
}
