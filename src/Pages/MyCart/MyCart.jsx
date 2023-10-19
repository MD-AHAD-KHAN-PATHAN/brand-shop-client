import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import { useState } from "react";

const MyCart = () => {

    const mycartLodedData = useLoaderData();
    const [mycart, setMycart] = useState(mycartLodedData);

    return (
        <div className="min-h-screen lg:m-20 md:m-8 m-6">
            <h1 className="lg:text-5xl text-3xl font-bold text-center mb-4">My <span className="text-orange-500">Collections</span></h1>
            <div className="flex justify-center"><h1 className="w-20 px-6 py-1 bg-orange-500  mb-10"></h1></div>

            {
                mycart.length > 0 ? <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
                    {
                        mycart?.map(cart => <Cart key={cart._id} cart={cart} mycart={mycart} setMycart={setMycart}></Cart>)
                    }
                </div> : <h1 className="lg:text-5xl md:text-2xl text-lg font-bold h-[80vh] flex items-center justify-center">Your collections are empty</h1>
            }


        </div>
    );
};

export default MyCart;