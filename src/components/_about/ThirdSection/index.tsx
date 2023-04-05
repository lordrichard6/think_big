import MainCTAComponent from "../../_shared/MainCTA"

const aboutPage = {
    text: `Instead, you can work with our team to help you with ALL OF THIS for a fraction of the cost (and you don’t have all the headaches of building and staffing a team).
    We are not your typical marketing consulting company. We help businesses, large and small, to dominate their industries online by implementing “ahead of the curve” online marketing strategies with an aim to double sales.
    We know that for every happy client we have, they’re going to refer 1, 2, 5+ of their friends.
    In other words, your growth is OUR growth.
    And our rapid success is proof in itself that what we do for businesses like yours works.
    Our “ROI-focused” digital marketing is SO ruthlessly effective…
    That this year we’ll spend hundreds of thousands of dollars on our own marketing.
    Because we don’t just talk about doing this for clients.
    We actually DO IT. Every day. For our own business.
    Working with us is — and I’m not bragging when I say this — probably the smartest way to make your marketing budget work for your business.
    Interested in learning more?
    Click the button below and get in touch. I look forward to hearing from you!`,
    image: '/images/about/about_me_03.png',
    btn: "Learn More"
}

export default function AboutThirdSection() {
    return (
        <section className="flex flex-col items-center z-10 px-[200px] mt-24">
            <div className="flex mb-16">
                <img className="max-w-[460px] h-fit" src={aboutPage.image} alt="" />
                <p className='text-secondary text-secondary-color mt-4 ml-10'>{aboutPage.text}</p>
            </div>
            <MainCTAComponent color="bg-primary-color" buttonText={aboutPage.btn} link="/signin" />
        </section>
    );
}