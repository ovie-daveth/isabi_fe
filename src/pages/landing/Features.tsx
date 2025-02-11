import React from "react";
import FeatureCard from "./FeatureCard";

const featuresData = [
  {
    number: "01",
    title: "Qualified tutors",
    description: "Achieve your academic goals with expertly crafted resources",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/47562c3315c6bbc276f9bcdf0f5a8218c1c4cfd64d3ce6f3295c7443cf2f6d11?apiKey=e925627fa4404be68784e8320bcd6258&",
  },
  {
    number: "02",
    title: "Award winning",
    description: "Achieve your academic goals with expertly crafted resources",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/40081968f29fa360bdf482e5cb722b1d0e4e58dc7e28698146e76e5fb4dc29cf?apiKey=e925627fa4404be68784e8320bcd6258&",
    isHighlighted: true,
  },
  {
    number: "03",
    title: "Help any time",
    description: "Achieve your academic goals with expertly crafted resources",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/899bbbcb81ba47a6135416a677e5b7d7487b617db3669693192679690f636767?apiKey=e925627fa4404be68784e8320bcd6258&",
  },
  {
    number: "04",
    title: "Latest curriculum",
    description: "Achieve your academic goals with expertly crafted resources",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/a328466b35d4cb8eef81cb184c4085f7619c0c9cf5304f3bc221ff2eb7bc4731?apiKey=e925627fa4404be68784e8320bcd6258&",
  },
];

const Features: React.FC = () => {
  return (
    <div className="py-10 rounded-3xl flex flex-col px-20 pb-32 mt-24 w-full bg-neutral-100 max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
      <div className="z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center mt-0 min-h-[249px]">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
