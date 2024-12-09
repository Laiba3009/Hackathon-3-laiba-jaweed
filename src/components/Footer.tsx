import * as React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { TiSocialYoutubeCircular } from "react-icons/ti";

const Footer = () => {
  const getHelpLinks = [
    "Order Status",
    "Delivery",
    "Returns",
    "Payment Options",
    "Contact Us On Nike.com Inquiries",
    "Contact Us On All Other Inquiries",
  ];

  const aboutLinks = ["News", "Careers", "Investors", "Sustainability"];

  const mainLinks = [
    "Find A Store",
    "Become A Member",
    "Sign Up for Email",
    "Send Us Feedback",
    "Student Discounts",
  ];

  const footerLinks = [
    "Guides",
    "Terms of Sale",
    "Terms of Use",
    "Nike Privacy Policy",
  ];

  return (
    <footer className="flex flex-col bg-neutral-900 p-10 text-white">
      {/* Main Footer Content */}
      <div className="flex flex-wrap gap-10 w-full">
        {/* Main Links */}
        <div className="w-[29%]">
          <nav className="flex flex-col text-xs">
            <h2 className="uppercase tracking-wide mb-4">Main Links</h2>
            {mainLinks.map((link, index) => (
              <a key={index} href="#" className="mt-2 hover:text-gray-400">
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Get Help Links */}
        <div className="w-[51%]">
          <nav className="flex flex-col text-xs">
            <h2 className="uppercase tracking-wide mb-4">Get Help</h2>
            {getHelpLinks.map((link, index) => (
              <a key={index} href="#" className="mt-2 hover:text-gray-400">
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* About Nike Links */}
        <div className="w-[20%]">
          <nav className="flex flex-col text-xs">
            <h2 className="uppercase tracking-wide mb-4">About Nike</h2>
            {aboutLinks.map((link, index) => (
              <a key={index} href="#" className="mt-2 hover:text-gray-400">
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Nike Logo */}
        <div className="w-[337px] flex justify-start">
          <img
            loading="lazy"
            src="/assets/nike.png"
            alt="Nike logo"
            className="object-contain w-full"
          />
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex justify-between items-center mt-14">
        {/* Country Info and Copyright */}
        <div className="flex items-center text-xs">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/afe336cc16b84f5e88f05eaaebfef4fd/2c3cf51a60dcad8155a1c35df68f880049064af1bef7db01392ef898da56d0bb?apiKey=afe336cc16b84f5e88f05eaaebfef4fd&"
            alt="India location icon"
            className="w-[18px] mr-2"
          />
          <span>India</span>
        </div>
        <div className="text-xs text-zinc-500">
          © 2023 Nike, Inc. All Rights Reserved
        </div>

        {/* Legal Links */}
        <nav className="flex gap- text-xs text-right text-zinc-500">

                 <div  className="flex justify-between  items-center  hover:text-white focus:text-white focus:outline-none">
                 <span><FaTwitter
                   className="w-[30px] h-[30px] pr-2"/></span>
                 <span><FaFacebook className="w-[30px] h-[30px] pr-2"/></span>

                 <span><TiSocialYoutubeCircular className="w-[30px] h-[30px] pr-2"/></span>

                 <span><ImInstagram className="w-[30px] h-[30px] pr-2"/></span>

</div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
