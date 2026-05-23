import type { Metadata } from "next";
// import ComingSoon from "@/components/ComingSoon";
import Slider from "@/components/home/Slider";
import AboutStudio from "@/components/home/AboutStudio";
import StartTdy from "@/components/home/StartTdy";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Mile High Production — a premier film production and distribution company crafting cinematic masterpieces.",
};

export default function HomePage(): React.JSX.Element {
  return (
    <>
      {/* <ComingSoon
        pageTitle="Home"
        pageSubtitle="Welcome to Mile High Production. We're preparing something cinematic for you. Our home page is currently under development."
      /> */}

      <Slider />
      <AboutStudio />
      <StartTdy />
    </>

  );
}
