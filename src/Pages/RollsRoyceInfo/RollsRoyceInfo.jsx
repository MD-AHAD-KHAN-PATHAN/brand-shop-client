import { useLoaderData } from "react-router-dom";
import CarCard from "../CarCard/CarCard";
import Slider from "../Slider/Slider";

const RollsRoyceInfo = () => {

   const cars = useLoaderData();

    const photo1 = "https://i.ibb.co/fDzQxTs/stevosdisposable-38-A4-i-0q-Ag-unsplash.jpg";
    const photo2 = "https://i.ibb.co/fDzQxTs/stevosdisposable-38-A4-i-0q-Ag-unsplash.jpg";
    const photo3 = "https://i.ibb.co/fDzQxTs/stevosdisposable-38-A4-i-0q-Ag-unsplash.jpg";

    const photo = {photo1, photo2, photo3}

    const title1 = "Rolls-Royce Future Forward";
    const title2 = "Rolls-Royce Vision";
    const title3 = "Rolls-Royce Craftsmanship";
    const description1 = "Rolls-Royce pioneers the future of automotive technology. Join us as we push the boundaries of speed, power, and design, creating the next generation of performance-driven vehicles.";
    const description2 = "Rolls-Royce vision transcends conventional boundaries. We fuse luxury and performance, creating a lifestyle where every journey is a testament to sophistication and speed.";
    const description3 = "At Rolls-Royce, perfection is in the details. Witness the artistry and precision that go into crafting every component, from engines to interiors, ensuring an unrivaled driving experience.";

    const info = { title1, title2, title3, description1, description2, description3 };

    return (

        <div>
            <Slider photo={photo} info={info}></Slider>
            <div className="lg:m-24 md:m-12 m-4 min-h-screen">
                <h1 className="lg:text-5xl text-3xl font-bold text-center mb-4">LATEST <span className="text-orange-500">VEHICLES</span></h1>
                <div className="flex justify-center"><h1 className="w-20 px-6 py-1 bg-orange-500  mb-10"></h1></div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    {
                        cars?.map(car => <CarCard key={car._id} car={car}></CarCard>)
                    }
                </div>
            </div>
        </div>

    );
};

export default RollsRoyceInfo;