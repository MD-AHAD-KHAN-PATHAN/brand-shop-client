
const Header = () => {
    return (
        <div className="relative">
            <div>
                <img className="max-h-screen w-full" src="https://i.ibb.co/hM9L252/hakon-sataoen-W1-PF7ll-Lx-Mc-unsplash.jpg" alt="" />
            </div>

            <div className="absolute bottom-1/2 flex justify-center w-full mx-auto">
                <div>
                    <p className="text-white font-bold lg:text-xl text-sm mb-4">BUY OR SELL YOUR VEHICLES</p>
                    <h1 className="lg:text-6xl md:text-4xl text-xl font-bold text-white">Welcome to Your <span className="text-orange-500">AutoVerse</span> Haven</h1>
                    <h3 className="text-white font-bold md:text-lg text-sm mt-4">Where Performance Meets Elegance</h3>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="text-white absolute md:bottom-20 bottom-6 z-10">
                    <button className="px-4 py-2 font-bold border-white hover:bg-orange-600 border-2">VIEW MORE</button>
                </div>
            </div>



        </div>
    );
};

export default Header;