import Contact from "../../Components/Contact/Contact";
import Header from "../../Components/Header/Header";
import Brand from "../Brand/Brand";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="m-28">
                <Brand></Brand>
                <Contact></Contact>
            </div>
        </div>

    );
};

export default Home;