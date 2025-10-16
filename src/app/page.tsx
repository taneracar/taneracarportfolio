import Banner from "@/Components/Banner/Banner";
import PageWrapper from "@/Components/Common/PageWrapper";
import SplashCursor from "@/Components/Common/SplashCursor";
import SplashScreen from "@/Components/Common/SplashScreen";

export default function Home() {
  return (
    <PageWrapper>
      <SplashScreen />
      <SplashCursor />
      <Banner />
    </PageWrapper>
  );
}
