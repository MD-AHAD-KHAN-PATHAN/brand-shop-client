import Contact from "../../Components/Contact/Contact";
import Header from "../../Components/Header/Header";
import Brand from "../Brand/Brand";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="lg:m-28 md:m-12 m-6">
                <Brand></Brand>
                <Contact></Contact>
            </div>
        </div>

    );
};

export default Home;