"use client";
import { useState, useEffect } from 'react';
import Image from "next/image"
import Link from "next/link"

import headerImage from "@/images/products/productlistingpageHeader.jpg"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductData} from "@/sanity/sanity.query";
import { CategoryData } from '@/sanity/sanity.query';


interface CategoryData {
  name:string;
  slug:string;
  price:number;
  imageURL:string;
  
}

interface ProductData {
    _id: string;
    imageURL: string;
    name:string
    price: number;
    description:string;
    category:string| { name: string; slug: string; };
    
}

export default function ProductList() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductData[]>([]);
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [filters, setFilters] = useState({ category: "", price: "", })

  // Fetch products and categories on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await ProductData(); // Fetch products from Sanity
        const categoryData = await CategoryData(); // Fetch categories from Sanity
        setProducts(productData);
        setFilteredProducts(productData); // Initialize filtered products
        setCategories(categoryData); // Populate categories dynamically
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Filter products whenever filters change
  useEffect(() => {
    let filtered = [...products];
    console.log("Filters:", filters);

    // Filter by category (ensure you're comparing the category.slug if it's an object)
    if (filters.category) {
      console.log("Applying category filter:", filters.category);
      filtered = filtered.filter((product) => {
        if (typeof product.category === "string") {
          return product.category === filters.category;
        } else if (product.category && typeof product.category === "object") {
          return product.category.slug === filters.category; // Compare slugs
        }
        return false;
      });
    }

    // Sort by price
    if (filters.price === "low-to-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.price === "high-to-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
    console.log("Filtered products:", filtered); // Debug filtered products
  }, [filters, products]);

  // Handlers for filter changes
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Category selected:", event.target.value);
    setFilters((prev) => ({ ...prev, category: event.target.value }));
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev) => ({ ...prev, price: event.target.value }));
  };

  const handleFilterReset = () => {
    setFilters({ category: "", price: "", });
  };

  return (
    <div>
      {/* Header Image */}
      <div className="relative w-full h-[200px]">
        <Image src={headerImage} alt="image" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 flex items-center justify-start sm:justify-center md:justify-center lg:justify-start">
          <h1 className="text-white text-4xl">Our Products</h1>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between bg-gray-100 px-4 py-3 mb-6 rounded-lg ">
        {/* Category Filter */}
        <div className=" items-center lg:block md:block xl:block hidden">
          <label className="mr-2 text-sm font-medium">Category:</label>
          <select
            value={filters.category}
            onChange={handleCategoryChange}
            className="border border-gray-300 rounded px-3 py-1 text-sm"
          >
            <option value="">All</option>
            {categories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Price Filter */}
        <div className="flex items-center">
          <label className="mr-2 text-sm font-medium">Price:</label>
          <select
            value={filters.price}
            onChange={handlePriceChange}
            className="border border-gray-300 rounded px-3 py-1 text-sm"
          >
            <option value="">All</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>

        {/* Clear Filters Button */}
        <button
          onClick={handleFilterReset}
          className="bg-gray-300 px-4 py-1 rounded text-sm font-medium text-gray-700 hover:bg-gray-400"
        >
          Clear Filters
        </button>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:ml-0 text-justify gap-4">
        {filteredProducts.map((product) => (
          <Link
            key={product._id}
            href={{
              pathname: "/allproductlistpage",
              query: { product: JSON.stringify(product) },
            }}
          >
            <Card className="h-[200px] w-[200px] xl:mb-[300px] md:mb-[200px] lg:mb-[200px] mb-[300px] border-none text-justify">
              <CardHeader className="xl:w-[300px] lg:w-[250px] md:w-[250px] w-[300px]">
                {product.imageURL && (
                  <Image
                    width={305}
                    height={375}
                    src={product.imageURL}
                    alt="image"
                    className="xl:h-[300px] lg:h-[200px] md:h-[200px]"
                  />
                )}
              </CardHeader>
              <CardTitle>
                <p className="ml-6 text-base ">{product.name}</p>
              </CardTitle>
              <CardDescription className="my-4 md:my-6 hidden">
                {product.description}
              </CardDescription>
              <CardFooter>
                <p>${product.price}</p>
                
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>

      {/* View Products Button */}
      <div className="my-10 flex justify-center items-center pt-[100px]">
        <Link href="/productListing">
          <button className="bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]">
            View Products
          </button>
        </Link>
      </div>
    </div>
  );
}

