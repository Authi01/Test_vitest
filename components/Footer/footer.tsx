import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>Email: authiselvi@bounteous.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank">
              <img
                src="https://img.icons8.com/color/48/facebook-new.png"
                alt="Facebook Icon"
                className="icon-image"
              />
            </a>
            <a href="https://twitter.com" target="_blank">
              <img
                src="'https://cdn.builder.io/api/v1/image/assets%2F35682deade6048fbb9c01dc5e90930f1%2F0d294d318234488482675c55a7cf3315',"
                alt="Twittttter Icon"
                className="icon-image"
              />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <img
                src="https://img.icons8.com/color/48/youtube-play.png"
                alt="Instagram Icon"
                className="icon-image"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
