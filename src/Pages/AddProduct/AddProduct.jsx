import Swal from 'sweetalert2'

const AddProduct = () => {


    const handleSubmit = e => {
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

        console.log(carDetails)

        fetch('http://localhost:5000/car', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(carDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Good Job!',
                        text: 'Your car details has been saved',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })
    }

    return (

        <div className="bg-base-200 lg:p-20 md:p-10 p-4">
            <h1 className="text-5xl font-bold text-center mb-4">Add <span className='text-orange-500'>New</span> Car</h1>
            <div className="flex justify-center"><h1 className="w-20 px-6 py-1 bg-orange-500 mb-10"></h1></div>

            <form onSubmit={handleSubmit}>
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" placeholder="Enter Brand name" className="input w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Car Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Enter car name" className="input w-full" required/>
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Car Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Enter coffee supplier" className="input w-full" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="price" placeholder="Enter car price" className="input w-full" required/>
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" placeholder="Enter car title" className="input w-full" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Condition</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="condition" placeholder="Enter car condition" className="input w-full" required/>
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Enter car description" className="input w-full" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="rating" placeholder="Enter car rating" className="input w-full" required/>
                        </label>
                    </div>
                </div>
                <div>
                    <div className="mt-6">
                        <input type="submit" value="Add Car" className="py-2 font-bold w-full bg-base-300 border-2 border-base-500 cursor-pointer" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;