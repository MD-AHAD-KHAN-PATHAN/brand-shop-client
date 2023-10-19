import { BsFillStarFill, BsCarFrontFill } from 'react-icons/bs';
import { BiSolidDollarCircle } from 'react-icons/bi';

const Cart = ({ cart }) => {

    const { brand, name, photo, price, title, description, rating, condition } = cart;

    const handleDelete = () => {
        
    }

    return (

        <div className='md:flex'>
            <div className=''>
                <img src={photo} alt="" />
            </div>
            <div className='px-4' >
                <div>
                    <h1 className="md:text-2xl text-xl font-bold md:mt-0 mt-2">{brand}</h1>
                    <h2 className="font-bold my-2">{name}</h2>
                    <i>{title}</i>
                </div>
                <div className='flex justify-between my-2'>
                    <button className='flex items-center py-2 px-4 bg-gray-300'><span className='text-orange-500 mr-2'><BsFillStarFill></BsFillStarFill></span> <span>{rating}</span></button>
                    <button className='flex py-2 px-4 items-center bg-gray-300' ><span className='text-orange-500 mr-2'><BiSolidDollarCircle></BiSolidDollarCircle></span>{price}</button>
                    <button className='flex py-2 px-4 items-center bg-gray-300' ><span className='text-orange-500 mr-2'><BsCarFrontFill></BsCarFrontFill></span>{condition}</button>
                </div>
                <div className='flex justify-end'>
                    <button onClick={handleDelete} className='flex items-center py-2 px-4 bg-orange-400 font-bold text-white rounded-md border-2 border-orange-600'>Delete Car</button>
                </div>
            </div>
        </div>

    );
};

export default Cart;