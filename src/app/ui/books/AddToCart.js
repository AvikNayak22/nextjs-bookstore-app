"use client";

import { useContext } from "react";

import { StoreContext } from "@/app/context";

import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";

const AddToCart = ({ book }) => {
  const { cartData, setCartData } = useContext(StoreContext);
  const handleCart = (e, reason) => {
    e.preventDefault();
    console.log(book);

    const newData = { ...book, type: reason };
    setCartData([...cartData, newData]);
    console.log(cartData);
    toast.success(`Added ${book.title} to the Cart`, {
      autoClose: 1000,
    });
  };

  return (
    <div className="flex gap-1 justify-around mt-5 border-t-2 p-1">
      <button
        className="bg-orange-500  hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md"
        onClick={(event) => handleCart(event, "Buy")}
      >
        <ShoppingCartIcon className="w-5 mr-0.5 inline" /> to Buy
      </button>
      <button
        className="bg-orange-500  hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md"
        onClick={(event) => handleCart(event, "Rent")}
      >
        <ShoppingCartIcon className="w-5 mr-0.5 inline" /> to Rent
      </button>
    </div>
  );
};

export default AddToCart;
