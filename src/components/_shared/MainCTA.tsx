import { FaSmile } from 'react-icons/fa';
import { Link } from "react-router-dom";

export default function MainCTAComponent({ buttonText, color, link }: { buttonText: string, color: string, link: string }) {
    return (
        <button className={`w-fit ${color} text-secondary-color text-2xl md:text-3xl font-bold rounded-2xl px-12 md:px-14 py-8 md:py-10 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition ease-in-out delay-50`}>
            <Link className='flex items-center' to={link}>
                <FaSmile />
                <p className='ml-4'>{buttonText}</p>
            </Link>
        </button>
    );
}