import Link from "next/link";
import TextPressure from "./TextPressure";
import ContactButton from "./ContactButton";
import MobileMenu from "./MobileMenu";

const items = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];
const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about" },
  { label: "Services", ariaLabel: "View our services", link: "/services" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];
const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 bg-transparent flex w-full h-[65px] md:h-[5vw] items-center justify-between px-[3vw] pt-[0.5vw]">
      <Link href="/" className="hidden md:block md:w-[12vw]">
        <TextPressure text="TANER ACAR" />
      </Link>
      <div className=" gap-[1vw] hidden md:flex">
        {items.map((item) => (
          <ContactButton key={item.href} text={item.label} link={item.href} />
        ))}
      </div>
      <div className="w-[12vw] hidden md:block">
        <ContactButton image="/images/avatar.png" text={"contact me"} />
      </div>
      <div className="md:hidden">
        <MobileMenu
          isFixed={true}
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen={true}
          colors={["#fff", "#000"]}
          accentColor="#ff6b6b"
        />
      </div>
    </div>
  );
};

export default Navbar;
