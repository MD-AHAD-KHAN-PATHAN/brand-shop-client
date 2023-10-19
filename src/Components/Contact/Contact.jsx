import { MdMarkEmailRead, MdCall, MdOutlineFacebook } from 'react-icons/md';
import { AiFillInstagram, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

const Contact = () => {


    return (

        <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="" data-aos="fade-up" data-aos-duration="1500">
                <h1 className="text-4xl font-bold">Contact Information</h1>
                <p className="font-bold my-6 flex items-center gap-2"><span className='text-orange-400'><MdMarkEmailRead></MdMarkEmailRead></span>abcd@gmail.com</p>
                <p className='flex gap-2 items-center'><span className='text-orange-400'><MdCall></MdCall></span>+088 3729 4848</p>
                <div className='flex gap-4 text-3xl text-orange-400 mt-6'>

                    <a href=""><MdOutlineFacebook></MdOutlineFacebook></a>
                    <a href=""><AiFillInstagram></AiFillInstagram></a>
                    <a href=""><AiFillLinkedin></AiFillLinkedin></a>
                    <a href=""><AiFillTwitterCircle></AiFillTwitterCircle></a>              
                    
                </div>
            </div>
            <div className='md:mt-0 mt-6' data-aos="fade-up" data-aos-duration="2000">

                <form>
                    <input className="w-full p-4 border-2 hover:shadow-xl border-orange-400 rounded-md" type="name" name="name" placeholder="Enter Your Full Name" />
                    <br />
                    <input className="w-full p-4 border-2 hover:shadow-xl border-orange-400 rounded-md my-6" type="email" name="email" placeholder="Enter Your Email" />
                    <br />
                    <textarea className="w-full p-4 border-2 hover:shadow-xl border-orange-400 rounded-md" name="text" id="" cols="20" rows="5" placeholder="Your Message"></textarea>
                    <div className="flex justify-center mt-8">
                        <input className="border-2 py-2 px-4 rounded-md text-orange-400 border-orange-400 font-bold hover:text-white hover:bg-orange-500 cursor-pointer" type="submit" value="Send Message" />
                    </div>
                </form>


            </div>
        </div>
    );
};

export default Contact;