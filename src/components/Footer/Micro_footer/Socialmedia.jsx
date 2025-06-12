import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { SiGoogleplay } from 'react-icons/si';
import { AiFillApple } from 'react-icons/ai';

const Socialmedia = () => {
  return (
    <section className="py-6  ms-10 ">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Icons */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Follow us on</h2>
            <div className="flex space-x-3">
              <a href="#" className="text-pink-600 hover:text-pink-800">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-900">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col me-10 sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 ">
            <a href="#" className="flex items-center bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800 transition text-sm">
              <SiGoogleplay size={20} className="mr-2" />
              <div className="text-left leading-tight">
                <p className="text-[10px]">GET IT ON</p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </a>
            
            <a href="#" className="flex items-center bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800 transition text-sm">
              <AiFillApple size={20} className="mr-2" />
              <div className="text-left leading-tight">
                <p className="text-[10px]">Download on the</p>
                <p className="text-sm font-semibold">App Store</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socialmedia;
