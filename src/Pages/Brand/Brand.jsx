import { Link } from "react-router-dom";

const Brand = ({ brand }) => {

    return (

        <Link to={`/${brand.route}`}>
            <div className="relative">
                <div className="">
                    <img className="w-full" src={brand.image} alt="" />
                </div>
                <div className=" absolute lg:bottom-20 bottom-4 text-white lg:p-6 md-p-4 p-2">

                    <h1 className="text-4xl font-bold">{brand.brand}</h1>
                    <i className="font-semibold text-justify">{brand.description}</i>
                </div>
            </div>
        </Link>
    );
};

export default Brand;