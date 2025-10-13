import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

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
      <DesktopMenu />
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
