"use client";

import { useContext } from "react";
import { StoreContext } from "@/app/context";

const OrderDetails = () => {
  const { cartData } = useContext(StoreContext);

  const booksToBuy = cartData.filter((book) => {
    return book.type === "Buy";
  });

  const priceToBuy = booksToBuy.reduce(
    (accumulator, book) => accumulator + book.sellPrice,
    0
  );

  const booksToRent = cartData.filter((book) => {
    return book.type === "Rent";
  });

  const priceToRent = booksToRent.reduce(
    (accumulator, book) => accumulator + book.rentPrice,
    0
  );

  return (
    <div className="w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 lg:ml-4 xl:ml-4 2xl:ml-4 lg:mr-4 xl:mr-4 2xl:mr-4">
      <h2 className="text-2xl pb-4">Order Details</h2>
      {
        <ul>
          <li>
            Buying {booksToBuy.length} book(s) for{" "}
            <strong>{priceToBuy} INR </strong>
          </li>
          <li>
            Renting {booksToRent.length} book(s) for{" "}
            <strong>{priceToRent} INR </strong>
          </li>
          <li></li>
        </ul>
      }
    </div>
  );
};

export default OrderDetails;
