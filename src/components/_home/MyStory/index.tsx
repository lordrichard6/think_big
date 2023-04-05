import MainCTAComponent from '../../_shared/MainCTA';

const title = '"What I Learned After Spending $6,700,000+ on Facebook and Google Ads For Clients..."'
const author = 'From Paulo Reizinho'
const date = 'March 22, 2023'
const buttonText = "Learn more"
const myAvatar = "/images/home/home_me_01.png"
const text = `I first discovered the power of digital advertising 2 years ago.
At the time, I was working a typical 9-5 office job. I didn’t hate it, but I didn’t love it either.
I felt like I had a lot more to contribute to the world than sitting at a desk all day, doing work that I didn’t particularly enjoy.
I had been poking my head into the world of “online marketing” and entrepreneurship for a while, but had never really gone anywhere or made any real money with it.
I wanted to build something of myself – something that would give me real freedom in my life.
Freedom to make the money I wanted to make. Freedom to spend my time on the things I found enjoyable and fulfilling.
I knew I definitely did not want to work a 9-5 job forever, but I had no idea how I was going to support myself if I quit.
Until one day, a lightbulb went off in my head.
It happened when I was sitting in on a meeting with the marketing team. They had just hired a digital marketing agency to run Facebook and Google Ads for their products and services.
During that meeting, I learned that the company I was working for was spending $250,000 per MONTH on Facebook and Google Ads.
And, to manage it, they were paying this marketing agency 8% of their ad spend to help them manage and scale it.
I remember sitting there, mind completely blown at how much money was being thrown into these platforms…
And, I remember doing the math and realizing this marketing agency was getting paid $20,000 per MONTH for their services.
$20,000 per month. $240,000 per year. Just for managing Facebook and Google Ad campaigns.
That was the moment when everything changed for me.
I realized that if I could learn the skills of digital advertising, I could finally achieve the freedom that I was so desperately after in my life.
And, more importantly, I realized why I wasn’t fulfilled at my office job. It was because I wasn’t on a path that allowed me to GROW into achieving the lifestyle I wanted.
Like I said, I had known for a long time I wanted to build something of my own.
And now – I finally knew exactly what to build.`

export default function MyStoryComponent() {
  return (
    <section className="h-full flex flex-col justify-center items-center px-[260px]">
      <h1 className='text-5xl font-bold text-secondary-color text-center max-w-[860px] mt-16'>{title}</h1>
      <div className="bg-primary-color rounded-2xl py-16 px-16 my-20 max-w-[1040px]">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[280px] h-[280px] rounded-full bg-secondary-color p-1 mb-6">
            <img className='w-full h-full rounded-full' src={myAvatar} alt="" />
          </div>
          <div className="text-secondary-color text-2xl text-center mb-4">
            <h2 className='font-bold'>{author}</h2>
            <h2>{date}</h2>
          </div>
          <p className='text-primary text-slate-100 mx-10 mt-4 mb-6'>{text}</p>
          <MainCTAComponent color="bg-slate-100" buttonText={buttonText} link="/about" />
        </div>
      </div>
    </section>
  );
}