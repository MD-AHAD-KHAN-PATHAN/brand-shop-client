import { useLoaderData } from "react-router-dom";
import Contact from "../../Components/Contact/Contact";
import Header from "../../Components/Header/Header";
import Brand from "../Brand/Brand";
import Services from "../Services/Services";

const Home = () => {

    const brandName = useLoaderData();

    return (
        <div>
            <Header></Header>
            <div className="lg:m-28 md:m-12 m-6">
                <h1 className="lg:text-5xl text-3xl font-bold text-center mb-4"><span className="text-orange-500">Brand</span> Collections</h1>
                <div className="flex justify-center"><h1 className="w-20 px-6 py-1 bg-orange-500  mb-10"></h1></div>

                <div className="grid md:grid-cols-2 gap-4 mb-20">
                    {
                        brandName?.map((brand) => <Brand key={brand.id} brand={brand}></Brand>)
                    }
                </div>

                <h1 className="lg:text-5xl text-3xl font-bold text-center mb-4">Our <span className="text-orange-500">Services</span></h1>
                <div className="flex justify-center"><h1 className="w-20 px-6 py-1 bg-orange-500  mb-10"></h1></div>
                <Services></Services>

                <h1 className="lg:text-5xl text-3xl font-bold text-center mb-4"><span className="text-orange-500">Contact</span> Form</h1>
                <div className="flex justify-center"><h1 className="w-20 px-6 py-1 bg-orange-500  mb-10"></h1></div>
                <Contact></Contact>
            </div>
        </div>

    );
};

export default Home;