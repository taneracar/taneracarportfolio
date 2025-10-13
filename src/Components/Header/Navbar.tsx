import Link from "next/link";
import TextPressure from "./TextPressure";
import PillNav from "./Menu";
import ContactButton from "./ContactButton";

const Navbar = () => {
  return (
    <div className="fixed z-10 top-0 left-0 flex w-full h-[5vw] items-center justify-between px-[3vw] pt-[0.5vw]">
      <Link href="/" className="w-[12vw]">
        <TextPressure text="TANER ACAR" />
      </Link>
      <div className="">
        <PillNav
          items={[
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Contact", href: "/contact" },
          ]}
          activeHref="/"
          className="flex gap-4"
          ease="power2.easeOut"
          baseColor="#ffffff"
          pillColor="#000000"
          hoveredPillTextColor="#000000"
          pillTextColor="#ffffff"
        />
      </div>
      <div className="w-[12vw]">
        <ContactButton/>
      </div>
    </div>
  );
};

export default Navbar;
