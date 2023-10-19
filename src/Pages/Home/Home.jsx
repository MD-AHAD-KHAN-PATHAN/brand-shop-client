import { useLoaderData } from "react-router-dom";
import Contact from "../../Components/Contact/Contact";
import Header from "../../Components/Header/Header";
import Brand from "../Brand/Brand";

const Home = () => {

    const brandName = useLoaderData();

    return (
        <div>
            <Header></Header>
            <div className="lg:m-28 md:m-12 m-6">
                <div className="grid md:grid-cols-2 gap-4 mb-20">
                    {
                        brandName?.map((brand) => <Brand key={brand.id} brand={brand}></Brand>)
                    }
                </div>

                <Contact></Contact>
            </div>
        </div>

    );
};

export default Home;