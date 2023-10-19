
const Slider = ({photo, info}) => {

    const { title1, title2, title3, description1, description2, description3 } = info;

    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full max-h-screen">
                <img src={photo.photo1} className="w-full" />
                <div className="absolute flex justify-around items-center transform -translate-y-1/2 left-5 right-5 top-1/2">

                    <a href="#slide3" className="btn btn-circle">❮</a>

                    <div className="flex justify-center">
                        <div className="md:w-2/3 text-center">
                            <h1 className="text-white lg:text-5xl md:text-3xl text-xl font-extrabold mb-4">{title1}</h1>
                            <i className="text-white">{description1}</i>
                        </div>
                    </div>

                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>

            </div>
            <div id="slide2" className="carousel-item relative w-full max-h-screen">
                <img src={photo.photo2} className="w-full" />
                <div className="absolute flex justify-around items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <div className="flex justify-center">
                        <div className="md:w-2/3 text-center">
                            <h1 className="text-white lg:text-5xl md:text-3xl text-xl font-extrabold mb-4">{title2}</h1>
                            <i className="text-white">{description2}</i>
                        </div>
                    </div>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full max-h-screen">
                <img src={photo.photo3} className="w-full" />
                <div className="absolute flex justify-around items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <div className="flex justify-center">
                        <div className="md:w-2/3 text-center">
                            <h1 className="text-white lg:text-5xl md:text-3xl text-xl font-extrabold mb-4">{title3}</h1>
                            <i className="text-white">{description3}</i>
                        </div>
                    </div>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;