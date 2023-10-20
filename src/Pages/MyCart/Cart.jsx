import { BsFillStarFill, BsCarFrontFill } from 'react-icons/bs';
import { BiSolidDollarCircle } from 'react-icons/bi';
import Swal from 'sweetalert2';

const Cart = ({ cart, mycart, setMycart }) => {

    const { _id, brand, name, photo, price, title, description, rating, condition } = cart;

    const handleDelete = (_id) => {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://brand-shop-server-ten-kappa.vercel.app/mycart/${_id}`, {
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0) {
                        swalWithBootstrapButtons.fire(
                            'Deleted!',
                            'Your car has been deleted.',
                            'success'
                        )
                        const remaining = mycart.filter( cart => cart._id !== _id);
                        setMycart(remaining);
                    }
                })
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })

    }

    return (

        <div className='grid md:grid-cols-2 shadow-orange-400 shadow-xl overflow-hidden' data-aos="flip-up" data-aos-duration="1000">
            <div className=''>
                <img className='h-full md:rounded-l-lg' src={photo} alt="" />
            </div>
            <div className='px-4 py-4  md:rounded-r-lg' >
                <div>
                    <h1 className="md:text-2xl text-xl font-bold md:mt-0 mt-2">{brand}</h1>
                    <h2 className="font-bold my-2">{name}</h2>
                    <i>{title}</i>
                </div>
                <div className='flex justify-between my-2'>
                    <button className='flex items-center py-2 px-4 bg-base-300'><span className='text-orange-500 mr-2'><BsFillStarFill></BsFillStarFill></span> <span>{rating}</span></button>
                    <button className='flex py-2 px-4 items-center bg-base-300' ><span className='text-orange-500 mr-2'><BiSolidDollarCircle></BiSolidDollarCircle></span>{price}</button>
                    <button className='flex py-2 px-4 items-center bg-base-300' ><span className='text-orange-500 mr-2'><BsCarFrontFill></BsCarFrontFill></span>{condition}</button>
                </div>
                <div className='flex justify-end'>
                    <button onClick={() => handleDelete(_id)} className='flex items-center py-2 px-4 bg-orange-400 font-bold text-white rounded-md border-2 border-orange-600'>Delete Car</button>
                </div>
            </div>
        </div>

    );
};

export default Cart;