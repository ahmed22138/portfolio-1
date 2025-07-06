import Img from 'next/image';




export default function Hero() {
    return (
      <div className="mt-12  ">
       <div className=" grid md:grid-cols-2 items-center gap-8 max-w-5xl max-md:max-w-md mx-auto ">
  <div className="max-md:order-1 max-md:text-center">
    <h2 className="md:text-4xl text-3xl md:leading-10 font-bold text-white mb-4">
     Welcome to My <span className='text-black'>\Portfolio Website.</span>
    </h2>
    <p className="mt-4 text-base text-slate-600 leading-relaxed">
     Hello I&apos;m Ahmed Malik And I am a Full Stack Developer. I have a passion for creating dynamic and responsive web applications that provide an exceptional user experience. With expertise in both front-end and sanity cms i used back-end technologies, I strive to build efficient and scalable solutions that meet the needs of users and businesses alike. & become the Professional Developer.
    </p>
    <div className="mt-12 flex flex-wrap max-md:justify-center gap-4">
      <a
        href="javascript:void(0);"
        className="px-6 py-3 text-base font-semibold text-white bg-black rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#f032e6] focus:outline-none focus:ring-opacity-50"
      >
        Explore Our Menu
      </a>
      <a
        href="javascript:void(0);"
        className="px-6 py-3 text-base font-semibold text-white border border-b-black rounded-full hover:text-white hover:bg-black transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#f032e6] focus:outline-none focus:ring-opacity-50"
      >
        Order Now
      </a>
    </div>
  </div>
 <div className="md:h-[250px]">
  <Img
    src="https://readymadeui.com/hotel-img.webp"
    className="w-full h-full object-cover rounded-lg shadow-xl"
    alt="hero-img"
    width={"1000"}
    height={"1000"}
  />
</div>

</div>
</div>

    )
}