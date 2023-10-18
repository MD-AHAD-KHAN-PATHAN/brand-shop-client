import { useLoaderData } from "react-router-dom";
import CarCard from "../CarCard/CarCard";
import Slider from "../Slider/Slider";

const RollsRoyceInfo = () => {

   const cars = useLoaderData();

    const photo1 = "https://i.ibb.co/fDzQxTs/stevosdisposable-38-A4-i-0q-Ag-unsplash.jpg";
    const photo2 = "https://i.ibb.co/fDzQxTs/stevosdisposable-38-A4-i-0q-Ag-unsplash.jpg";
    const photo3 = "https://i.ibb.co/fDzQxTs/stevosdisposable-38-A4-i-0q-Ag-unsplash.jpg";

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

export default RollsRoyceInfo;