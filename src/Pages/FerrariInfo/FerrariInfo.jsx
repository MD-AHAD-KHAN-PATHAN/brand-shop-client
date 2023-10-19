import { useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import CarCard from "../CarCard/CarCard";

const FerrariInfo = () => {

    const cars = useLoaderData();

    const photo1 = "https://i.ibb.co/sKsvDw1/joshua-koblin-eq-W1-MPin-EV4-unsplash.jpg";
    const photo2 = "https://i.ibb.co/sKsvDw1/joshua-koblin-eq-W1-MPin-EV4-unsplash.jpg";
    const photo3 = "https://i.ibb.co/sKsvDw1/joshua-koblin-eq-W1-MPin-EV4-unsplash.jpg";

    const photo = { photo1, photo2, photo3 }

    return (

        <div>
            <Slider photo={photo}></Slider>
            <div className="lg:m-24 md:m-12 m-4 min-h-screen">
                <h1 className="lg:text-5xl md:text-3xl text-xl font-bold text-center mb-8">LATEST VEHICLES ON SALE</h1>
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