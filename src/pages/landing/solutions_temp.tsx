import React from "react";
import SolutionCard from "./solution-card";

const solutionsData = [
  {
    number: "01",
    title: "Unlimited Future",
    description:
      "Infinite horizons await in your journey toward an unlimited future.",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/0a297c177babb66697e52b9acb97403cd4e4d431c2b423353107af6693f05c69?apiKey=e925627fa4404be68784e8320bcd6258&",
  },
  {
    number: "02",
    title: "World Class Quality",
    description:
      "Infinite horizons await in your journey toward an unlimited future.",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/b6c0573caf7bc08acf7f70875f775962fe74dc77a79d512e623c5af06719280b?apiKey=e925627fa4404be68784e8320bcd6258&",
    isHighlighted: true,
  },
  {
    number: "03",
    title: "Financial Advise",
    description:
      "Infinite horizons await in your journey toward an unlimited future.",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/77ec15d572a22c13ceba823918e9330e58cdfa1a14ec219c5a571a76e5c917f3?apiKey=e925627fa4404be68784e8320bcd6258&",
  },
  {
    number: "04",
    title: "Business plan",
    description:
      "Infinite horizons await in your journey toward an unlimited future.",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/0a297c177babb66697e52b9acb97403cd4e4d431c2b423353107af6693f05c69?apiKey=e925627fa4404be68784e8320bcd6258&",
  },
  {
    number: "05",
    title: "Performance idea",
    description:
      "Exemplifying excellence in every detail, setting global quality.",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/679f37fc1ce569b3a648963d571eb410f072d2ebd05cf7b92aa6c489300921b6?apiKey=e925627fa4404be68784e8320bcd6258&",
  },
  {
    number: "06",
    title: "Creative solution",
    description:
      "Start investing early for long-term financial security and growth.",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/77ec15d572a22c13ceba823918e9330e58cdfa1a14ec219c5a571a76e5c917f3?apiKey=e925627fa4404be68784e8320bcd6258&",
  },
];

const  Solutions: React.FC = () => {
  return (
    <div className="mt-16 w-full max-w-[1290px] max-md:max-w-full ">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {solutionsData.map((solution, index) => (
          <div
            key={index}
            className="flex flex-col max-md:ml-0 max-md:w-full"
          >
            <SolutionCard {...solution} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
