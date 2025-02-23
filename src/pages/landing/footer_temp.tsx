import Logo from "@/components/atoms/logo";
import React from "react";
import { GrInstagram, GrLinkedin, GrTwitter } from "react-icons/gr";
import { MdFacebook } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="mt-5 w-full max-w-[1290px] max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between mt-5 w-full max-md:max-w-full">
        <div className="text-base font-medium tracking-tight leading-6 text-black text-opacity-60">
          Learning solutions with practical experience. Learning solutions with
          practical experience.
        </div>
        <div className="flex gap-5 self-end mt-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <div className="flex overflow-hidden flex-col w-6 min-h-[24px]">
              <GrInstagram size={16} />
            </div>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <div className="flex overflow-hidden flex-col w-6 min-h-[24px]">
              <GrTwitter size={16} />
            </div>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <div className="flex overflow-hidden flex-col w-6 min-h-[24px]">
              <MdFacebook size={16} />
            </div>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <div className="flex overflow-hidden flex-col w-6 min-h-[24px]">
             <GrLinkedin size={16} />
            </div>
          </a>
        </div>
      </div>
      <div className="flex shrink-0 self-stretch mt-16 h-px border-t border-gray-500 border-opacity-10 max-md:mt-10 max-md:max-w-full" />
      <div className="flex gap-3 self-start mt-11 max-w-full w-[195px] max-md:mt-10">
        
       <Logo />
      </div>
      <div className="flex flex-wrap gap-5 justify-between self-start mt-11 w-full text-base tracking-normal leading-7 max-w-[1293px] max-md:mt-10 max-md:max-w-full">
        <div className="font-medium text-stone-600">
          © Copyright 2025. All Rights Reserved
        </div>
        <nav className="flex gap-7 self-start mt-2.5 font-semibold text-neutral-900">
          <Link to="/contact">Contact</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
