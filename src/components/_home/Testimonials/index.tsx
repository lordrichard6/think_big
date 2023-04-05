interface testimonial {
  image: string;
  text: string;
}

const title = "What our clients are Saying..."
const text01 = '“Lucas is a young guy who TAKES ACTION! They say you’re the average of the 5 people you spend the most time with, and Lucas is definitely a guy worth investing your time into…”'
const text02 = '"This entrepreneur course is fantastic! It provided practical insights, engaging content, and a clear roadmap to success. Highly recommended!"'
const text03 = '"This course is incredibly valuable. The practical approach and expert instruction have already improved my business performance. Highly recommended."'
const testimonials: testimonial[] = [
  {
    image: "/images/home/test_01.png",
    text: text01
  },
  {
    image: "/images/home/test_02.png",
    text: text02
  },
  {
    image: "/images/home/test_03.png",
    text: text03
  },
]

export default function TestimonialsComponent() {
  return (
    <section className="relative w-full h-[900px]">
      <div className="skewed" />
      <div className="relative text-slate-100 px-[200px] pt-20">
        <h1 className='text-5xl font-bold text-center'>{title}</h1>
        <div className="w-full flex justify-center items-start mt-10">
          {testimonials.map((item, i) => {
            return (
              <div key={i} className="flex flex-col justify-center items-center w-[280px]">
                <div className="w-[200px] h-[200px] rounded-full bg-slate-100 p-1">
                  <img className='w-full h-full rounded-full' src={item.image} alt="" />
                </div>
                <p className='text-primary mx-10 mt-4'>{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}