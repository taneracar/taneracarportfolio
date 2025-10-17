import Banner from "@/Components/HomePage/Banner/Banner";
import PageWrapper from "@/Components/Common/PageWrapper";
import SplashCursor from "@/Components/Common/SplashCursor";
import SplashScreen from "@/Components/Common/SplashScreen";
import SvgPath from "@/Components/Common/SvgPath";

export default function Home() {
  return (
    <PageWrapper>
      <SplashScreen />
      <div className="hidden md:block">
        <SplashCursor />
      </div>
      <Banner />
      <SvgPath />
    </PageWrapper>
  );
}
