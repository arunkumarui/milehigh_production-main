import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Mile High Production — our story, mission, and the passionate team behind our cinematic vision.",
};

export default function AboutPage(): React.JSX.Element {
  return (
    <ComingSoon
      pageTitle="About Us"
      pageSubtitle="Discover the story behind Mile High Production. Our about page is coming soon with our journey, vision, and the creative minds that drive us."
    />
  );
}
