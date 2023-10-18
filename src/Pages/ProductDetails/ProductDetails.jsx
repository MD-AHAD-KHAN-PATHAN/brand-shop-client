import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {

    const car = useLoaderData();

    console.log(car);

    return (
        <div className="min-h-screen">
            
        </div>
    );
};

export default ProductDetails;