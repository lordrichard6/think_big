import { FcGoogle } from 'react-icons/fc';
import { FaFacebookSquare, FaApple } from 'react-icons/fa';
import LoginInputs from './inputs';
import ThirdPartyLoginBtns from './thirdPartyLoginBtns';
import LoginCardHeader from './loginHeader';

export default function LoginCard() {
    return (
        <div className="relative bg-primary-color max-w-full lg:w-1/2 h-[800px] lg:h-[800px] rounded-3xl flex flex-col lg:flex-row overflow-hidden mx-8">
            <div className="lg:w-1/2 h-full">
                <img className="w-full h-full object-bottom object-cover" src="/images/login.png" alt="" />
            </div>
            <div className="w-full lg:w-1/2 absolute lg:relative flex flex-col justify-center items-center py-8">
                <LoginCardHeader />
                <hr className="text-slate-100 my-10 w-1/2" />
                <LoginInputs />
                <hr className="text-slate-100 my-10 w-1/2" />
                <div className="flex justify-center items-center text-slate-100 mb-10">
                    <hr className="w-2 mx-2" />
                    OR
                    <hr className="w-2 mx-2" />
                </div>
                <ThirdPartyLoginBtns />
            </div>
        </div>
    );
}