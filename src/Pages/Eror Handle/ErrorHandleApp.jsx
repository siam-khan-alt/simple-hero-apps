import React from 'react';
import apperror from '../../assets/App-Error.png'
import { Link } from 'react-router';
const ErrorHandleApp = () => {
    return (
        <div>
            <div className="  min-w-screen min-h-screen items-center justify-center text-center grid gap-4 p-4 sm:p-12 md:p-16 lg:p-20 ">
                        <div><img src={apperror} alt="" /></div>
                        <div>
                            <h1 className='font-bold text-5xl'>OPPS!! APP NOT FOUND</h1>
                        <p className='text-[#627382] mt-2'>The App you are requesting is not found on our system.  please try another apps</p>
                        </div>

                        <Link to={'/apps'}><button className='btn text-white  bg-gradient-to-br from-[#632EE3] to-[#9F62F2]'>Show All apps</button></Link>
                     </div>
        </div>
    );
};

export default ErrorHandleApp;