"use client";
import ContactSection from "@/app/components/ContactSection";
import {
  ChatIcon,
  EmailIcon,
  TwitterIcon,
} from "@/app/components/icons/ContactIcons";
import SectionHeading from "../components/SectionHeading";

const contacts = [
  {
    id: 1,
    icon: <ChatIcon />,
    text: "Need an ASAP answer? Contact us via chat, 24/7! For existing furniture orders, please call us.",
    buttonText: "Chat With Us",
    buttonLink: "#",
  },
  {
    id: 2,
    icon: <EmailIcon />,
    text: `You can text us at 800-309-2622 – or click on the “text us” link below on your mobile device. Please allow the system to acknowledge a simple greeting (even “Hi” will do!) before providing your question/order details. Consent is not required for any purchase. Message and data rates may apply. Text messaging may not be available via all carriers.`,
    buttonText: "Text Us",
    buttonLink: "sms:+923000000000",
  },
  {
    id: 3,
    icon: <TwitterIcon />,
    text: (
      <>
        To send us a private or direct message, like{" "}
        <span className="underline decoration-[#C9A84C] hover:decoration-[#DD8560] cursor-pointer">
          Facebook
        </span>{" "}
        or follow us on{" "}
        <span className="underline decoration-[#C9A84C] hover:decoration-[#DD8560] cursor-pointer">
          Twitter
        </span>
        . We’ll get back to you ASAP. Please include your name, order number,
        and email address for a faster response!
      </>
    ),
    buttonText: "Follow Us",
    buttonLink: "https://twitter.com",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen font-[Tenor_Sans] font-normal px-2.5  md:px-4 lg:px-5 pt-4 md:pt-5 lg:pt-6 xl:pt-7 2xl:pt-8 3xl:pt-10   ">
      <div className="px-4 md:px-10 lg:px-20 xl:px-36 2xl:px-56 pt-10 md:pt-14 lg:pt-16 pb-16 md:pb-20">
        {/* Heading */}

        <SectionHeading title={"   contact us"} />

        {/* Contact Sections */}
        <div className="flex flex-col gap-10 md:gap-12 lg:gap-14">
          {contacts.map((contact, index) => (
            <ContactSection
              key={contact.id}
              icon={contact.icon}
              text={contact.text}
              buttonText={contact.buttonText}
              buttonLink={contact.buttonLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
