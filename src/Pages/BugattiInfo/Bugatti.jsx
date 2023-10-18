
const Bugatti = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full max-h-screen">
                <img src="https://i.ibb.co/GtM7F1V/tim-meyer-t3vu-JWHY7w-unsplash.jpg" className="w-full" />
                <div className="absolute flex justify-around items-center transform -translate-y-1/2 left-5 right-5 top-1/2">

                    <a href="#slide3" className="btn btn-circle">❮</a>

                    <div className="flex justify-center">
                        <div className="w-2/3 text-center">
                            <h1 className="text-white text-5xl font-extrabold mb-4">Bugatti's Future Forward</h1>
                            <i className="text-white">Bugatti pioneers the future of automotive technology. Join us as we push the boundaries of speed, power, and design, creating the next generation of performance-driven vehicles.</i>
                        </div>
                    </div>
                    
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>

            </div>
            <div id="slide2" className="carousel-item relative w-full max-h-screen">
                <img src="https://i.ibb.co/VvQWDDY/velito-xd-I8d-Bx1-SA8-unsplash.jpg" className="w-full" />
                <div className="absolute flex justify-around items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <div className="flex justify-center">
                        <div className="w-2/3 text-center">
                            <h1 className="text-white text-5xl font-extrabold mb-4">Bugatti's Vision</h1>
                            <i className="text-white">Bugatti's vision transcends conventional boundaries. We fuse luxury and performance, creating a lifestyle where every journey is a testament to sophistication and speed.</i>
                        </div>
                    </div>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full max-h-screen">
                <img src="https://i.ibb.co/s6G0JhK/eugene-chystiakov-Bm-OTZ0-Dqc-k-unsplash.jpg" className="w-full" />
                <div className="absolute flex justify-around items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <div className="flex justify-center">
                        <div className="w-2/3 text-center">
                            <h1 className="text-white text-5xl font-extrabold mb-4">Bugatti's Craftsmanship</h1>
                            <i className="text-white">At Bugatti, perfection is in the details. Witness the artistry and precision that go into crafting every component, from engines to interiors, ensuring an unrivaled driving experience.</i>
                        </div>
                    </div>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Bugatti;