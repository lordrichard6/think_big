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
        <section className="h-[80vh] flex justify-center items-center px-[200px] mb-40 background-animation">
            <img className="h-fit z-10" src={aboutPage.image} alt="" />
            <div className="ml-6 z-10">
                <h1 className='text-5xl font-bold leading-relaxed whitespace-pre-line max-w-[500px] mb-16'>{aboutPage.title}</h1>
                <p className='text-secondary mt-4 text-secondary-color max-w-[600px]'>{aboutPage.text}</p>
            </div>
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
        </section>
    );
}