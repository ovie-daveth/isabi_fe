import React from "react";
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
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/5785a9a0ae53d9dc239611b040ca6a1cc3159084ea490a6abf72943672e71226?apiKey=e925627fa4404be68784e8320bcd6258&"
                alt="Facebook icon"
                className="object-contain w-full aspect-square"
              />
            </div>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <div className="flex overflow-hidden flex-col w-6 min-h-[24px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/1d1a1d914aaa05b27ccf4d958ded38351693f0c4247e86274c4f08cfda4e0a51?apiKey=e925627fa4404be68784e8320bcd6258&"
                alt="Twitter icon"
                className="object-contain w-full aspect-square"
              />
            </div>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <div className="flex overflow-hidden flex-col w-6 min-h-[24px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/a52c30d95e2732253816710f10950e526c6b4fb57cfdb4784e767d417f61fae0?apiKey=e925627fa4404be68784e8320bcd6258&"
                alt="Instagram icon"
                className="object-contain w-full aspect-square"
              />
            </div>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <div className="flex overflow-hidden flex-col w-6 min-h-[24px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/bc9603b3e09c890b80c7936229c3d391aa01f509bda67ce2ec95ae09782eb881?apiKey=e925627fa4404be68784e8320bcd6258&"
                alt="LinkedIn icon"
                className="object-contain w-full aspect-square"
              />
            </div>
          </a>
        </div>
      </div>
      <div className="flex shrink-0 self-stretch mt-16 h-px border-t border-gray-500 border-opacity-10 max-md:mt-10 max-md:max-w-full" />
      <div className="flex gap-3 self-start mt-11 max-w-full w-[195px] max-md:mt-10">
        <div className="flex gap-2.5 items-start">
          <div className="flex w-9 h-9 bg-indigo-600 min-h-[36px] rounded-[90px]" />
        </div>
        <div className="grow shrink my-auto text-3xl font-semibold tracking-tighter text-neutral-900 w-[140px]">
          iSabiBook
        </div>
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
