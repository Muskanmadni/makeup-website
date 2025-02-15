"use client"
import { useEffect, useState } from "react";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";


import { useRouter } from "next/navigation";
import Checkout from "@/actions/Checkout";





interface Product {
  _id: string;
  imageURL: string;
  name: string;
  price: number;
  description: string;
  quantity: number; // Optional, defaults to 1
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [showForm, setShowForm] = useState(false);


  const router = useRouter();

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment:"",
  });

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    console.log(e)
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value })


  }



  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const parsedCart = JSON.parse(cart);
      setCartItems(parsedCart);
      calculateTotalPrice(parsedCart);
    }
  }, []);

  const calculateTotalPrice = (items: Product[]) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const handleRemoveItem = (productId: string) => {
    const updatedCart = cartItems.filter((item) => item._id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotalPrice(updatedCart);
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    const updatedCart = cartItems.map((item) => {
      if (item._id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotalPrice(updatedCart);
  };

  const handleCheckout = () => {
    
    Checkout(cartItems, customerInfo)
    router.push("/pageorder");
  }



  return (
    <div className="bg-gray-200 w-full px-4 sm:px-10 lg:px-40 pt-10 pb-16 h-auto text-custom-purple">
      <h1 className="text-2xl sm:text-3xl text-center lg:text-left">Your Shopping Cart</h1>
      <h1 className="text-lg font-semibold mt-9">Products</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (

          <div key={item._id} className="flex justify-between items-center mb-4 border-2 p-4">

            <div className="items-center grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10">
              <div className="">

                <Image src={item.imageURL} alt={item.name} width={500} height={500} className="w-20 h-20 sm:w-28 sm:h-28" ></Image>
                <p className="font-semibold">{item.name}</p>
                <p>Price per unit: Rs {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: Rs {item.price * item.quantity}</p>
              </div>
            </div>
            <button onClick={() => handleRemoveItem(item._id)} className="text-red-500 font-medium text-sm ml-4">
              Remove
            </button>
          </div>
        ))
      ) : (
        <p className="text-center mt-10">Your cart is empty!</p>
      )}
      {cartItems.length > 0 && (
        <h2 className="text-xl font-bold mt-4">Total Amount: Rs {totalPrice}</h2>
      )}
      <div>
        <button onClick={() => setShowForm(true)} className="bg-[#2A254B] text-white py-2 px-12 mt-4">CheckOut</button>
        {showForm &&
          <div className="text-center text-black h-[550px] font-bold ">
            <h2 className="text-xl font-bold mt-4">Customer Information</h2>
            <div className="mb-8 mt-10">
              <label>Name</label>
              <input
                type="text"
                name="name"
                required
                onChange={handleInputChange}
                className="w-full h-10 text-black"
                value={customerInfo.name}
              />
            </div>

            <div className="mb-8">
              <label>Contact</label>
              <input
                type="text"
                name="phone"
                required
                onChange={handleInputChange}
                className="w-full h-10"
                value={customerInfo.phone}
              />
            </div>

            <div className="mb-8">
              <label>Email</label>
              <input
                type="email"
                name="email"
                required
                value={customerInfo.email}
                onChange={handleInputChange}
                className="w-full h-10"


              />
            </div>
            <div>
              <label>Address</label>
              <input
                type="text"
                name="address"
                required
                value={customerInfo.address}
                onChange={handleInputChange}
                className="w-full h-10"
              />
            </div>
            <div className="mb-8 mt-10 flex-col flex ">
              <label>Payment Methods</label>
              <select className=" w-64" name="payment" required onChange={handleInputChange} value={customerInfo.payment}>
                <option value="cash">Cash on Delivery</option>
              </select>

            </div>
            <div>
              <button
                onClick={handleCheckout}
                className="bg-[#2A254B] text-white py-2 px-12 mt-4">
                submit Order
              </button>
            </div>

          </div>
        }
      </div>
    </div>

  );
}
export default Cart;


