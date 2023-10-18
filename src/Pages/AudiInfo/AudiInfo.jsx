import { useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import CarCard from "../CarCard/CarCard";

const AudiInfo = () => {
    const cars = useLoaderData();

    const photo1 = "https://i.ibb.co/VvQWDDY/velito-xd-I8d-Bx1-SA8-unsplash.jpg";
    const photo2 = "https://i.ibb.co/VvQWDDY/velito-xd-I8d-Bx1-SA8-unsplash.jpg";
    const photo3 = "https://i.ibb.co/VvQWDDY/velito-xd-I8d-Bx1-SA8-unsplash.jpg";

    const photo = {photo1, photo2, photo3}

    return (

        <div>
            <Slider photo={photo}></Slider>
            <div className="m-24 min-h-screen">
                <h1 className="text-5xl font-bold text-center mb-8">LATEST VEHICLES ON SALE</h1>
                <div className="grid grid-cols-3 gap-4">
                    {
                        cars?.map(car => <CarCard key={car._id} car={car}></CarCard>)
                    }
                </div>
            </div>
        </div>

    );
};

export default AudiInfo;