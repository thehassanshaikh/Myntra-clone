import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../Context/ApiContext";
import SingleCart from "../SingleCart/SingleCart";

export const Cart = () => {
    const { getCart } = useContext(ApiContext);

    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const totalPrice = getCart.reduce(
            (total, { price }) => total + price,
            0
        );
        setCartTotal(totalPrice);
    }, [getCart]);

    return (
        <section className="cart-section">
            <div className="h-screen bg-gray-100 pt-20">
                <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3">
                        {getCart?.map((cartitem, index) => (
                            <SingleCart key={index} cartitem={cartitem} />
                        ))}
                    </div>

                    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                        <div className="mb-2 flex justify-between">
                            <p className="text-gray-700">Subtotal</p>
                            <p className="text-gray-700">${cartTotal.toFixed(2)}</p>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between">
                            <p className="text-lg font-bold">Total</p>
                            <div className="">
                                <p className="mb-1 text-lg font-bold">
                                    ${cartTotal.toFixed(2)} USD
                                </p>
                                <p className="text-sm text-gray-700">including VAT</p>
                            </div>
                        </div>
                        <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                            Check out
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
