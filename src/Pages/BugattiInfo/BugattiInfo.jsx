import { useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import CarCard from "../CarCard/CarCard";

const BugattiInfo = () => {

    const cars = useLoaderData();

    const photo1 = "https://i.ibb.co/GtM7F1V/tim-meyer-t3vu-JWHY7w-unsplash.jpg";
    const photo2 = "https://i.ibb.co/GtM7F1V/tim-meyer-t3vu-JWHY7w-unsplash.jpg";
    const photo3 = "https://i.ibb.co/GtM7F1V/tim-meyer-t3vu-JWHY7w-unsplash.jpg";

    const photo = {photo1, photo2, photo3}

    
    const title1 = "Bugatti's Future Forward";
    const title2 = "Bugatti's Vision";
    const title3 = "Bugatti's Craftsmanship";
    const description1 = "Bugatti's pioneers the future of automotive technology. Join us as we push the boundaries of speed, power, and design, creating the next generation of performance-driven vehicles.";
    const description2 = "Bugatti's vision transcends conventional boundaries. We fuse luxury and performance, creating a lifestyle where every journey is a testament to sophistication and speed.";
    const description3 = "At Bugatti's, perfection is in the details. Witness the artistry and precision that go into crafting every component, from engines to interiors, ensuring an unrivaled driving experience.";

    const info = { title1, title2, title3, description1, description2, description3 };

    return (
        <div>
            <Slider photo={photo} info={info}></Slider>
            <div className="lg:m-24 md:m-12 m-4 min-h-screen">
                <h1 className="lg:text-5xl text-3xl font-bold text-center mb-4"><span className="text-orange-500">LATEST</span> VEHICLES</h1>
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

export default BugattiInfo;