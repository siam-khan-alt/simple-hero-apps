
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import err from '../../assets/error-404.png'
import { Link } from 'react-router';

const ErrorHandle = () => {
    return (
        <div className='flex flex-col'>
            <Navbar></Navbar>
            <div className='text-center  p-4 sm:p-12 md:p-16 lg:p-20 bg-gray-200 flex-1 min-h-screen '>
                <img src={err} alt="" className='mx-auto' />
            <h1 className='text-5xl text-center'>Oops, page not found!</h1>
            <p className='text-[#627382] mt-2 mb-4 '>The page you are looking for is not available.</p>
            <Link to={'/'}><button className='btn text-white  bg-gradient-to-br from-[#632EE3] to-[#9F62F2]'>Back Now</button></Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorHandle;