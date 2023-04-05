import MainCTAComponent from '../../_shared/MainCTA';

const title = "Put your Ideas in action and become a successful entrepreneur"
const text = "Do you want to learn the digital advertising secrets we teach to our 8-figure clients? Click the button below to get access to our exclusive free training."
const buttonText = "Join NOW!"

export default function HeaderComponent() {
    return (
        <header className="h-screen flex flex-col justify-center items-center bg-home-bg bg-center bg-cover px-8 md:px-[200px] text-center">
            <h1 className='text-3xl md:text-5xl font-bold md:max-w-[860px]'>{title}</h1>
            <h2 className='text-xl md:text-2xl md:leading-relaxed text-secondary-color my-12 md:my-20 max-w-[700px]'>{text}</h2>
            <MainCTAComponent color="bg-primary-color" buttonText={buttonText} link=""/>
        </header>
    );
}