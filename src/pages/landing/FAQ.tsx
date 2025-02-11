import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

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
    <div className="w-full max-w-2xl mx-auto mt-10">
      <Accordion type="single" collapsible>
        {faqData.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>
              {item.question}
              <ChevronDown className="ml-auto h-5 w-5" />
            </AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
