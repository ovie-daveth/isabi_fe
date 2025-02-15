import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import CardHeader from "./card-header";

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
      "We strive to develop real-world web solutions that are ideal for small to large projects with bespoke project requirements.",
  },
  {
    id: "02",
    question: "How does iSabiBook work?",
    answer:
      "iSabiBook is an innovative e-learning platform designed to provide personalized learning experiences for students across various subjects and levels.",
  },
  {
    id: "03",
    question: "What courses are available?",
    answer:
      "Our platform offers a wide range of courses, expert tutors, and interactive learning materials to help you achieve your academic and professional goals.",
  },
  {
    id: "04",
    question: "Why choose iSabiBook?",
    answer:
      "iSabiBook combines cutting-edge technology with proven educational methodologies to create an engaging and effective learning environment for all users.",
  },
];

const FAQ: React.FC = () => {
  return (
    <div className="w-full mx-auto mt-10">
    <div className="flex items-start flex-col gap-10 my-12">
      <CardHeader />
      <h1 className="lg:text-7xl text-4xl font-semibold tracking-tighter lg:leading-[60px] max-lg:max-w-full max-md:text-4xl max-md:leading-10 w-[50%]">Our answers to common questions asked</h1>
    </div>
      <Accordion type="single" collapsible>
        {faqData.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="flex items-center justify-between w-full">
              <h1 className="text-2xl font-bold mr-auto">{item.id}</h1>
              <h1 className="lg:text-3xl text-xl data-[state=open]:text-blue-500">
              {item.question}
              </h1>
              <ChevronDown className="ml-auto h-5 w-5 data-[state=open]:text-blue-500" />
            </AccordionTrigger>
            <AccordionContent className="mx-auto flex items-start text-left w-[30%] justify-center">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
