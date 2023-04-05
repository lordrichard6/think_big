const aboutPage = {
    title: `About 
    Paulo Reizinho 
    & Think Big`,
    text: `Dear fellow entrepreneur, 
    I’m Paulo Lopes Reizinho, Founder and Head of ThinkBig. 
    Let’s not beat around the bush here. 
    You’re on this website because you’re hungry to grow your business online. 
    Not hear my life story.`,
    image: "/images/about/about_me_01.png"
}

export default function AboutHeader() {
    return (
        <section className="w-full md:h-[80vh] flex flex-col md:flex-row justify-center items-center px-8 md:px-[200px] mb-20 md:mb-40">
            <div className="">
                <img className="px-6 md:px-0 z-10" src={aboutPage.image} alt="" />
            </div>
            <div className="md:ml-6 mt-4 md:mt-0 z-10">
                <h1 className='text-3xl md:text-5xl font-bold leading-relaxed whitespace-pre-line max-w-[500px] md:mb-16'>{aboutPage.title}</h1>
                <p className='text-secondary mt-4 text-secondary-color max-w-[600px]'>{aboutPage.text}</p>
            </div>
            <div className="background-animation hidden md:flex">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
    );
}