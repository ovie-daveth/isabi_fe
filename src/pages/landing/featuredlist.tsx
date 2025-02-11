import React from 'react';

interface Feature {
  text: string;
}

const features: Feature[] = [
  { text: "Advanced animations" },
  { text: "CMS integration for blogs, portfolios, or dynamic content" },
  { text: "Up to 10 pages" },
  { text: "SEO-friendly structure" },
  { text: "Priority email support for faster communication" }
];

const FeatureList: React.FC = () => {
  return (
    <div className="flex flex-col self-center mt-12 max-w-full font-semibold leading-none text-neutral-900 w-[428px] max-md:mt-10">
      <div className="text-sm tracking-tighter max-md:max-w-full">
        Everything in the Standard Plan, plus:
      </div>
      <div className="flex flex-col items-start mt-6 w-full text-base tracking-tighter max-md:max-w-full">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-3 mt-3.5 max-w-full w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/2bc786a952b4f5acf20f1ce2c8a00861349dd604bc04f338b063d8e6a4fccbc6?apiKey=e925627fa4404be68784e8320bcd6258&"
              alt=""
              className="object-contain shrink-0 w-5 aspect-square"
            />
            <div className="flex-auto">{feature.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureList;