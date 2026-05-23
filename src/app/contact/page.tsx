import type { Metadata } from "next";
import ContactPageClient from "@/components/ContactPageClient";
import "./style.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Mile High Production. Reach out for collaborations, inquiries, and business opportunities.",
};

export default function ContactPage(): React.JSX.Element {
  return <ContactPageClient />;
}
