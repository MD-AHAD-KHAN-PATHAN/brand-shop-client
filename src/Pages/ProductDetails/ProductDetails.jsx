import { useLoaderData } from "react-router-dom";
import { BsFillStarFill, BsCarFrontFill } from 'react-icons/bs';
import { BiSolidDollarCircle } from 'react-icons/bi';
import Swal from "sweetalert2";

const ProductDetails = () => {

    const car = useLoaderData();

    const { brand, name, photo, price,title, description, rating, condition } = car;

    const handleClick = () => {
        const addCart = {brand, name, photo, price,title, description, rating, condition}

        fetch('http://localhost:5000/myCar', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCart)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Good Job!',
                        text: 'Your car has been saved',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
        })
    }

    return (
        <div className="min-h-screen lg:m-24 md:m-12 m-4">
            <div>
                <img src={photo} alt="" />
                <div className='mt-6 lg:px-20 md:px-10 px-4' >
                    <div>
                        <h1 className="lg:text-5xl md:text-3xl text-xl font-bold text-center">{brand}</h1>
                        <h2 className="font-bold my-2">{name}</h2>
                        <i>{description}</i>
                    </div>
                    <div className='flex justify-between my-4'>
                        <button className='flex items-center py-2 px-4 bg-gray-300'><span className='text-orange-500 mr-2'><BsFillStarFill></BsFillStarFill></span> <span>{rating}</span></button>
                        <button className='flex py-2 px-4 items-center bg-gray-300' ><span className='text-orange-500 mr-2'><BiSolidDollarCircle></BiSolidDollarCircle></span>{price}</button>
                        <button className='flex py-2 px-4 items-center bg-gray-300' ><span className='text-orange-500 mr-2'><BsCarFrontFill></BsCarFrontFill></span>{condition}</button>
                    </div>
                    <div className='flex justify-end'>
                        <button onClick={handleClick} className='flex items-center py-2 px-4 bg-orange-400 font-bold text-white rounded-md border-2 border-orange-600'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;