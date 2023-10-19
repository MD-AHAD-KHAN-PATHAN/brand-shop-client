import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import { useState } from "react";

const MyCart = () => {

    const mycartLodedData = useLoaderData();
    const [mycart, setMycart] = useState(mycartLodedData);

    return (
        <div className="min-h-screen lg:m-20 md:m-8 m-6">
            <h1 className="lg:text-5xl md:text-3xl text-xl font-bold text-center mb-8">My <span className="text-orange-500">Collections</span></h1>
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