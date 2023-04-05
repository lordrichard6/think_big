import { FcGoogle } from 'react-icons/fc';
import { FaFacebookSquare, FaApple } from 'react-icons/fa';

export default function ThirdPartyLoginBtns() {
    return (
        <div className="flex flex-col lg:flex-row">
            <button className='flex justify-center items-center rounded-xl py-4 px-4 my-2 mx-2 bg-slate-100'><FcGoogle className='text-2xl mr-2' />Sign in with Google</button>
            <div className="flex">
                <button className='w-1/2 flex justify-center items-center rounded-xl py-4 px-4 my-2 mx-2 bg-slate-100'><FaFacebookSquare className='text-2xl text-sky-700' /></button>
                <button className='w-1/2 flex justify-center items-center rounded-xl py-4 px-4 my-2 mx-2 bg-slate-100'><FaApple className='text-2xl' /></button>
            </div>
        </div>
    );
}