import { BsFillStarFill, BsCarFrontFill } from 'react-icons/bs';
import { BiSolidDollarCircle } from 'react-icons/bi';
const CarCard = ({car}) => {

    const { brand, name, photo, price, title, rating, condition } = car;

    return (
        <div className="">
            <div>
                <img src={photo} alt="" />
                <div className='border-x-2 border-b-2 p-4' >
                    <div>
                        <h1 className="text-2xl font-bold text-center">{brand}</h1>
                        <h2 className="font-bold my-2">{name}</h2>
                        <i>{title}</i>
                    </div>
                    <div className='flex justify-between my-4'>
                        <button className='flex items-center py-2 px-4 bg-gray-300'><span className='text-orange-500 mr-2'><BsFillStarFill></BsFillStarFill></span> <span>{rating}</span></button>
                        <button className='flex py-2 px-4 items-center bg-gray-300' ><span className='text-orange-500 mr-2'><BiSolidDollarCircle></BiSolidDollarCircle></span>{price}</button>
                        <button className='flex py-2 px-4 items-center bg-gray-300' ><span className='text-orange-500 mr-2'><BsCarFrontFill></BsCarFrontFill></span>{condition}</button>
                    </div>
                    <div className='flex justify-between'>
                        <button className='flex items-center py-2 px-4 bg-orange-400 font-bold text-white rounded-md border-2 border-orange-600'>Update</button>
                        <button className='flex items-center py-2 px-4 bg-orange-400 font-bold text-white rounded-md border-2 border-orange-600'>Details</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CarCard;