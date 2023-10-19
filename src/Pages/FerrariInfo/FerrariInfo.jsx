import { useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import CarCard from "../CarCard/CarCard";

const FerrariInfo = () => {

    const cars = useLoaderData();

    const photo1 = "https://i.ibb.co/Ny34q4P/humberto-portillo-2-Jht-Lm92ans-unsplash.jpg";
    const photo2 = "https://i.ibb.co/BGm9nVH/yuvraj-singh-tm-Ayn-VA-ih-E-unsplash.jpg";
    const photo3 = "https://i.ibb.co/sKsvDw1/joshua-koblin-eq-W1-MPin-EV4-unsplash.jpg";

    const photo = { photo1, photo2, photo3 }

    const title1 = "Ferrari's Future Forward";
    const title2 = "Ferrari's Vision";
    const title3 = "Ferrari's Craftsmanship";
    const description1 = "Ferrari's pioneers the future of automotive technology. Join us as we push the boundaries of speed, power, and design, creating the next generation of performance-driven vehicles.";
    const description2 = "Ferrari's vision transcends conventional boundaries. We fuse luxury and performance, creating a lifestyle where every journey is a testament to sophistication and speed.";
    const description3 = "At Ferrari's, perfection is in the details. Witness the artistry and precision that go into crafting every component, from engines to interiors, ensuring an unrivaled driving experience.";

    const info = { title1, title2, title3, description1, description2, description3 };

    return (

        <div>
            <Slider photo={photo} info={info}></Slider>
            <div className="lg:m-24 md:m-12 m-4 min-h-screen">
                <h1 className="lg:text-5xl text-3xl font-bold text-center mb-8"><span className="text-orange-500">LATEST</span> VEHICLES</h1>
                <div className="flex justify-center"><h1 className="w-20 px-6 py-1 bg-orange-500  mb-10"></h1></div>

                {
                    cars.length > 0 ? <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                        {
                            cars?.map(car => <CarCard key={car._id} car={car}></CarCard>)
                        }
                    </div> : <h1 className="lg:text-5xl md:text-2xl text-lg font-bold h-[80vh] flex items-center justify-center">No products available</h1>
                }

            </div>
        </div>

    );
};

export default FerrariInfo;