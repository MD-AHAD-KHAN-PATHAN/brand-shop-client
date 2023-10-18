import { Link } from "react-router-dom";

const Brand = () => {

    return (

        <div className="grid md:grid-cols-2 gap-4 mb-20">
            <Link to="/bugattiInfo">
                <div className="relative">
                    <div className="">
                        <img className="w-full" src="https://i.ibb.co/GtM7F1V/tim-meyer-t3vu-JWHY7w-unsplash.jpg" alt="" />
                    </div>
                    <div className=" absolute md:bottom-20 bottom-4 text-white md:p-6 p-2">

                        <h1 className="text-4xl font-bold">Bugatti</h1>
                        <i className="font-semibold text-justify">Bugatti is a French manufacturer famous for its ultra-high-performance hypercars, including the Bugatti Veyron and Chiron, which are known for their incredible speed and engineering.</i>
                    </div>
                </div>
            </Link>

            <Link to="/audiInfo">
                <div className="relative">
                    <div className="">
                        <img className="w-full" src="https://i.ibb.co/VvQWDDY/velito-xd-I8d-Bx1-SA8-unsplash.jpg" alt="" />
                    </div>
                    <div className=" absolute md:bottom-20 bottom-4 text-white md:p-6 p-2">

                        <h1 className="text-4xl font-bold">Audi</h1>
                        <i className="font-semibold text-justify">Audi is a German luxury automobile manufacturer renowned for its high-quality, well-engineered vehicles that combine performance, advanced technology, and elegant design. </i>
                    </div>
                </div>
            </Link>

            <Link to="/bmwInfo">
                <div className="relative">
                    <div className="">
                        <img className="w-full" src="https://i.ibb.co/s6G0JhK/eugene-chystiakov-Bm-OTZ0-Dqc-k-unsplash.jpg" alt="" />
                    </div>
                    <div className=" absolute md:bottom-20 bottom-4 text-white md:p-6 p-2">

                        <h1 className="text-4xl font-bold">BMW</h1>
                        <i className="font-semibold text-justify">BMW, or Bayerische Motoren Werke AG, is a German luxury automobile and motorcycle manufacturer renowned for its premium vehicles with a focus on driving performance, precision engineering, and distinctive design</i>
                    </div>
                </div>
            </Link>

            <Link to="/lamborghiniInfo">
                <div className="relative">
                    <div className="">
                        <img className="w-full" src="https://i.ibb.co/0XkPBPy/b-mat-an-gelo-GEje-GPz3v-WA-unsplash.jpg" alt="" />
                    </div>
                    <div className=" absolute md:bottom-20 bottom-4 text-white md:p-6 p-2">

                        <h1 className="text-4xl font-bold">Lamborghini</h1>
                        <i className="font-semibold text-justify">Lamborghini is an Italian luxury sports car manufacturer famous for producing high-performance, exotic, and visually striking supercars. Founded in 1963, Lamborghini has become synonymous with prestige and speed.</i>
                    </div>
                </div>
            </Link>

            <Link to="/ferrariInfo">
                <div className="relative">
                    <div className="">
                        <img className="w-full" src="https://i.ibb.co/sKsvDw1/joshua-koblin-eq-W1-MPin-EV4-unsplash.jpg" alt="" />
                    </div>
                    <div className=" absolute md:bottom-20 bottom-4 text-white md:p-6 p-2">

                        <h1 className="text-4xl font-bold">Ferrari </h1>
                        <i className="font-semibold text-justify">Ferrari is a prestigious Italian sports car manufacturer celebrated for producing high-performance, iconic supercars. which feature exquisite design, extraordinary speed, and a powerful V12 engine.</i>
                    </div>
                </div>
            </Link>

            <Link to="/rollsroyceInfo">
                <div className="relative">
                    <div className="">
                        <img className="w-full" src="https://i.ibb.co/fDzQxTs/stevosdisposable-38-A4-i-0q-Ag-unsplash.jpg" alt="" />
                    </div>
                    <div className=" absolute md:bottom-20 bottom-4 text-white md:p-6 p-2">

                        <h1 className="text-4xl font-bold">Rolls-Royce</h1>
                        <i className="font-semibold text-justify">Rolls-Royce, a British luxury brand, is renowned for its opulent and handcrafted vehicles, such as the Rolls-Royce Phantom and Cullinan SUV, offering the utmost in luxury and comfort.</i>
                    </div>
                </div>
            </Link>



        </div>
    );
};

export default Brand;