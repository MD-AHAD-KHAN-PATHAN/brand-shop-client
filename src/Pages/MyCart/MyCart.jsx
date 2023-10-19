import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";

const MyCart = () => {

    const mycart = useLoaderData()
    console.log(mycart.length);
    return (
        <div className="min-h-screen lg:m-20 md:m-8 m-4">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                {
                    mycart?.map(cart => <Cart key={cart._id} cart={cart}></Cart>)
                }
            </div>

        </div>
    );
};

export default MyCart;