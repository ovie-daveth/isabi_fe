import React from 'react';
import PackageCard from './components/packagecard';
import Header from '../components/package-header';

interface StudyPackage {
  title: string;
  description: string;
  price?: string;
  isComingSoon?: boolean;
  features: string[];
}

const studyPackages: StudyPackage[] = [
  {
    title: "SSCE Package",
    description: "Small projects or personal portfolios",
    price: "₦4,000",
    features: [
      "Advanced animations",
      "CMS integration for blogs, portfolios",
      "Up to 10 pages",
      "SEO-friendly structure",
      "Priority email support for faster communication"
    ]
  },
  {
    title: "Nursing Package",
    description: "Small projects or personal portfolios",
    isComingSoon: true,
    features: [
      "Advanced animations",
      "CMS integration for blogs, portfolios",
      "Up to 10 pages",
      "SEO-friendly structure",
      "Priority email support for faster communication"
    ]
  },
  {
    title: "Complete Package",
    description: "Small projects or personal portfolios",
    isComingSoon: true,
    features: [
      "Advanced animations",
      "CMS integration for blogs, portfolios",
      "Up to 10 pages",
      "SEO-friendly structure",
      "Priority email support for faster communication"
    ]
  }
];

const StudyPackages: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col pt-12 bg-white">
      <Header />
      <div className="overflow-hidden px-16 pt-12 pb-28 w-full bg-zinc-100 max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {studyPackages.map((pkg, index) => (
            <PackageCard key={index} package={pkg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyPackages;