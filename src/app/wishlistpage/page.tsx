"use client"
;
import { useState , useEffect } from "react";
import Image from "next/image";

interface Product {
    _id: string;
    imageURL: string;
    name: string;
    price: number;
}

export default function Wishlist(){
    const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      try {
        const parsedWishlist: Product[] = JSON.parse(storedWishlist);
        setWishlist(parsedWishlist);
      } catch (error) {
        console.error("Error parsing wishlist from localStorage:", error);
        setWishlist([]); // Reset to an empty array if parsing fails
      }
    }
  }, [])
  const handleRemoveItem = (productId: string) => {
    const updatedwishlist = wishlist.filter((item) =>item._id = productId);
    setWishlist(updatedwishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedwishlist));
    setWishlist(updatedwishlist);
    
  };
    
    return(
        <div className="bg-gray-200 w-full px-4 sm:px-10 lg:px-40 pt-10 pb-16 h-auto text-custom-purple">
      <h1 className="text-2xl sm:text-3xl text-center lg:text-left">Your Wishlist</h1>
      {wishlist.length > 0 ? (
        wishlist.map((item) => (

          <div key={item._id} className="flex flex-row justify-between items-center mb-4 border-2 p-4">

            <div className="items-center grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10">
              <div className="">
                <Image src={item.imageURL} alt={item.name} width={200} height={200} className="w-20 h-20 sm:w-28 sm:h-28"></Image>
                <p className="font-semibold">{item.name}</p>
                <p>{item.price}</p>
              </div>
            </div>
            <button onClick={() => handleRemoveItem(item._id)} className="text-red-500 font-medium text-sm ml-4">
              Remove
            </button>
          </div>
        ))
      ) : (
        <p className="text-center">Your wishlist is empty.</p>
      )}
 
    </div>
    )

}