const aboutPage = {
    text: `If you are interested in that (and I’m flattered, really), then go here.
    But here’s the short version…
    I started Think Big a little over 2 years ago from my college dorm room with less than $50 in my bank account.
    Since then, we’ve grown from a tiny bedroom operation to a full-fledge digital marketing empire and are aiming to be the largest provider of digital marketing consulting and training on Facebook and YouTube Ads in the United States within the next 3 years.
    This isn’t some unreachable, fantasy-goal. We fully expect to hit this benchmark, as long as we keep recruiting top-notch talent and providing unrivaled results for our clients.
    …Because when you work with us, you are literally plugging into our kick-ass team of digital strategists, marketers, designers, and developers to help you reach your growth goals.
    To staff your business up with this kind of expertise it would literally cost you $180,000+ per year in overheads (average salary of $60k x 3 team members).`,
    image: "/images/about/about_me_02.png"
}

export default function AboutSecondSection() {
    return (
        <section className="relative w-full flex justify-center md:h-[980px]">
            <div className="skewed" />
            <div className="flex flex-col md:flex-row justify-center z-10 px-8 mb-10 md:px-[200px]">
                <p className='order-2 md:order-1 text-secondary text-slate-100 md:mr-6 my-6 max-w-[560px]'>{aboutPage.text}</p>
                <img className="order-1 md:order-2 w-[460px] h-fit mt-12" src={aboutPage.image} alt="" />
            </div>
        </section>
    );
}