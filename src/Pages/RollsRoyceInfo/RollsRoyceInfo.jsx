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
            <div className="lg:m-24 md:m-12 m-4 min-h-screen">
                <h1 className="lg:text-5xl md:text-3xl text-xl font-bold text-center mb-8">LATEST VEHICLES ON SALE</h1>
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