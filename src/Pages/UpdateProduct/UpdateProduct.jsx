import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateProduct = () => {

    const carLodedData = useLoaderData();
    

    const { _id, brand, name, photo, price, title, condition, description, rating } = carLodedData;
    

    const handleUpdate = e => {

        e.preventDefault();

        const form = e.target;
        const brand = form.brand.value.toUpperCase();
        const name = form.name.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const title = form.title.value;
        const condition = form.condition.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const carDetails = { brand, name, photo, price, title, condition, description, rating }

        fetch(`https://brand-shop-server-ten-kappa.vercel.app/car/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(carDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Good Job!',
                        text: 'Your car details updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })
    }

    return (
        <div className="bg-base-200 lg:p-20 md:p-12 p-4">
            <h1 className="lg:text-5xl text-3xl font-bold text-center mb-4"><span className='text-orange-500'>Update</span> Information</h1>
            <div className="flex justify-center"><h1 className="w-20 px-6 py-1 bg-orange-500 mb-10"></h1></div>

            <form onSubmit={handleUpdate}>
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2" data-aos="fade-right" data-aos-duration="1000">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" defaultValue={brand} placeholder="Enter Brand name" className="input w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2" data-aos="fade-left" data-aos-duration="1000">
                        <label className="label">
                            <span className="label-text">Car Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Enter car name" className="input w-full" required />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2" data-aos="fade-right" data-aos-duration="1000">
                        <label className="label">
                            <span className="label-text">Car Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} placeholder="Enter coffee supplier" className="input w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2" data-aos="fade-left" data-aos-duration="1000">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="price" defaultValue={price} placeholder="Enter car price" className="input w-full" required />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2" data-aos="fade-right" data-aos-duration="1000">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" defaultValue={title} placeholder="Enter car title" className="input w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2" data-aos="fade-left" data-aos-duration="1000">
                        <label className="label">
                            <span className="label-text">Condition</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="condition" defaultValue={condition} placeholder="Enter car condition" className="input w-full" required />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2" data-aos="fade-right" data-aos-duration="1000">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" defaultValue={description} placeholder="Enter car description" className="input w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2" data-aos="fade-left" data-aos-duration="1000">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="rating" defaultValue={rating} placeholder="Enter car rating" className="input w-full" required />
                        </label>
                    </div>
                </div>
                <div>
                    <div className="mt-6">
                        <input type="submit" value="Update Car" className="py-2 font-bold w-full bg-base-300 border-2 border-base-500 cursor-pointer" data-aos="fade-up"/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;