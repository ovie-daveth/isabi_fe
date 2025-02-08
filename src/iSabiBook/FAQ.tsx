import React, { useState } from "react";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    id: "01",
    question: "What is iSabiBook platform?",
    answer:
      "We strive to develop real-world web solutions that are ideal for small to large projects with bespoke project requirements. web solutions that are ideal for small to large projects with bespoke project requirements.",
  },
  {
    id: "02",
    question: "What is iSabiBook platform?",
    answer:
      "We strive to develop real-world web solutions that are ideal for small to large projects with bespoke project requirements. web solutions that are ideal for small to large.",
  },
  {
    id: "03",
    question: "What is iSabiBook platform?",
    answer:
      "iSabiBook is an innovative e-learning platform designed to provide personalized learning experiences for students across various subjects and levels.",
  },
  {
    id: "04",
    question: "What is iSabiBook platform?",
    answer:
      "Our platform offers a wide range of courses, expert tutors, and interactive learning materials to help you achieve your academic and professional goals.",
  },
  {
    id: "05",
    question: "What is iSabiBook platform?",
    answer:
      "iSabiBook combines cutting-edge technology with proven educational methodologies to create an engaging and effective learning environment for all users.",
  },
];

const FAQItem: React.FC<{
  item: FAQItem;
  isOpen: boolean;
  toggleOpen: () => void;
}> = ({ item, isOpen, toggleOpen }) => {
  return (
    <div
      className={`flex flex-col pb-9 w-full border-b ${
        isOpen ? "border-indigo-600" : "border-neutral-300"
      } max-md:max-w-full`}
    >
      <div className="flex justify-between items-start w-full leading-none max-md:max-w-full">
        <div className="flex flex-wrap flex-1 shrink items-start basis-0 min-w-[240px] max-md:max-w-full">
          <div className="text-2xl font-medium tracking-tight opacity-70 text-neutral-900">
            {item.id}
          </div>
          <div
            className={`flex-1 shrink text-3xl font-semibold tracking-tight basis-0 ${
              isOpen ? "text-indigo-600" : "text-neutral-900"
            } max-md:max-w-full`}
          >
            {item.question}
          </div>
        </div>
        <button
          onClick={toggleOpen}
          aria-expanded={isOpen}
          className="shrink-0 self-stretch my-auto"
        >
          <img
            loading="lazy"
            src={
              isOpen
                ? "https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/fbfa78a5cd48b70df8361d2b4a4f2f1a55abea1986bc63fd04276130171b1ba4?apiKey=e925627fa4404be68784e8320bcd6258&"
                : "https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/17cfd135ddb14daf52cf4787faf61a040396a76937939935eb9fd35487305983?apiKey=e925627fa4404be68784e8320bcd6258&"
            }
            alt={isOpen ? "Close" : "Open"}
            className="object-contain shrink-0 w-6 aspect-square"
          />
        </button>
      </div>
      {isOpen && (
        <div className="mt-5 text-base font-medium leading-6 text-neutral-900 max-md:max-w-full">
          {item.answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>("02");

  const toggleOpen = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="flex flex-col mt-20 w-full max-w-[1290px] max-md:mt-10 max-md:max-w-full">
      {faqData.map((item) => (
        <FAQItem
          key={item.id}
          item={item}
          isOpen={openItem === item.id}
          toggleOpen={() => toggleOpen(item.id)}
        />
      ))}
    </div>
  );
};

export default FAQ;
