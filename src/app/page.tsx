import SplashCursor from "@/Components/Common/SplashCursor";

export default function Home() {
  return (
    <>
      <SplashCursor />
      <div className="w-full px-[3vw] pt-[5vw] relative z-20 h-[200vh]">
        <h1 className="text-[6.5vw] w-[65%] pt-[5vw] leading-[1.1] capitalize">
          Turning ideas into interactive realities.
        </h1>
      </div>
    </>
  );
}
