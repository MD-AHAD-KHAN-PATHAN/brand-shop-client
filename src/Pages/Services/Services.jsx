import { SiAffinitydesigner } from 'react-icons/si';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { MdTipsAndUpdates } from 'react-icons/md';
import { BiSolidStore, BiSolidNetworkChart, BiSolidCar } from 'react-icons/bi';

const Services = () => {

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-20'>
            <div className='text-center hover:shadow-orange-500 hover:shadow-xl p-4'>
                <a href="" className='flex justify-center text-orange-500 text-7xl'><SiAffinitydesigner></SiAffinitydesigner></a>
                <h1 className='text-2xl font-bold my-4'>Custom Bespoke Interiors</h1>
                <i>Make your supercar truly unique with our Custom Bespoke Interiors service. Choose from a wide range of premium materials, colors, and designs to create a cabin that reflects your personal style and taste.</i>
            </div>
            <div className='text-center hover:shadow-orange-500 hover:shadow-xl p-4'>
                <a href="" className='flex justify-center text-orange-500 text-7xl'><FaChalkboardTeacher></FaChalkboardTeacher></a>
                <h1 className='text-2xl font-bold my-4'>Personal Vehicle Consultant</h1>
                <i>Benefit from a dedicated Personal Vehicle Consultant who will guide you through every aspect of your supercar journey. From purchase decisions to maintenance schedules, your consultant is there to provide expert advice and support.</i>
            </div>
            <div className='text-center hover:shadow-orange-500 hover:shadow-xl p-4'>
                <a href="" className='flex justify-center text-orange-500 text-7xl'><MdTipsAndUpdates></MdTipsAndUpdates></a>
                <h1 className='text-2xl font-bold my-4'>Aero Kit Installations</h1>
                <i>Enhance your supercar's aerodynamics and visual appeal with our Aero Kit Installations. Our experts will install custom-designed aerodynamic components to optimize downforce and style.</i>
            </div>
            <div className='text-center hover:shadow-orange-500 hover:shadow-xl p-4'>
                <a href="" className='flex justify-center text-orange-500 text-7xl'><BiSolidStore></BiSolidStore></a>
                <h1 className='text-2xl font-bold my-4'>Valet and Storage Services</h1>
                <i>Entrust your supercar to our secure valet and storage services. We provide climate-controlled storage facilities, regular maintenance, and on-demand delivery so that your prized possession is always ready to drive.</i>
            </div>
            <div className='text-center hover:shadow-orange-500 hover:shadow-xl p-4'>
                <a href="" className='flex justify-center text-orange-500 text-7xl'><BiSolidNetworkChart></BiSolidNetworkChart></a>
                <h1 className='text-2xl font-bold my-4'>Carbon Fiber Bodywork</h1>
                <i>Elevate your supercar's aesthetics and performance with Carbon Fiber Bodywork Upgrades. Our artisans will craft lightweight, high-quality carbon fiber components to enhance your vehicle's style and reduce weight.</i>
            </div>
            <div className='text-center hover:shadow-orange-500 hover:shadow-xl p-4'>
                <a href="" className='flex justify-center text-orange-500 text-7xl'><BiSolidCar></BiSolidCar></a>
                <h1 className='text-2xl font-bold my-4'>Vehicle Trade-in</h1>
                <i>If you're looking to upgrade to a newer model or simply want to explore a different supercar from our brand, our Vehicle Trade-in service makes the process seamless.</i>
            </div>
        </div>
    );
};

export default Services;