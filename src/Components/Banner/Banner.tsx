import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full px-[6vw] md:px-[3vw] md:pt-[5vw] relative h-[90vh] md:h-[100vh]">
      <h1 className="text-[10vw] pt-[67vh] leading-[1.2] md:text-[6.5vw] md:w-[65%] md:pt-[5vw] md:leading-[1.1] capitalize relative z-15">
        Turning ideas into interactive realities.
      </h1>
      <Image
        src="/images/taneracar.jpg"
        alt="Taner Acar"
        priority
        width={1080}
        height={1920}
        className="absolute max-md:top-0 md:bottom-0 right-0 -z-10 h-[90vh] md:h-full w-[100vw] md:w-fit object-cover md:object-contain"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/100 via-black/20 to-transparent"></div>
    </div>
  );
};

export default Banner;
