import { useSelector } from "react-redux";
import { RootState } from "@/context/store";
import PackageCard from "./components/packagecard";
import StudentLayout from "../_layout";
import { StudyPackage } from "../interface";
import { StartJourney } from "../subjects/page";

const generateStudyPackages = (
  titles: string[],
  groupNames: string[],
  basePrice: number,
  isComingSoonTitles: string[] = []
): StudyPackage[] => {
  return titles.map((title, index) => ({
    title,
    group: groupNames.map((name, i) => ({
      name,
      description: `Small projects or ${name} portfolios`,
      price: `₦${(basePrice * (i + 1)).toLocaleString()}`,
      features: [
        "Advanced animations",
        "CMS integration",
        `Up to ${10 + i * 2} pages`,
        "SEO-friendly structure",
        "Priority email support",
      ],
    })),
    isComingSoon: isComingSoonTitles.includes(title) ? true : undefined,
  }));
};

const studyPackages: StudyPackage[] = generateStudyPackages(
  ["SSCE Package", "Nursing Package", "Complete Package"],
  ["personal", "Duo", "Group"],
  4000,
  ["Nursing Package", "Complete Package"]
);

const StudyPackages = () => {
  const activeTab = useSelector((state: RootState) => state.navigation.activeTab);

  return (
    <StudentLayout>
      <div className="overflow-hidden xl:px-16 sm:px-5 md:pt-12 pb-28 w-full max-md:pb-24 max-md:max-w-full">
        {activeTab === 1 && (
          <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 max-md:flex-col">
            {studyPackages.map((pkg, index) => (
              <PackageCard key={index} package={pkg} />
            ))}
          </div>
        )}
        {activeTab === 2 && <StartJourney />}
        {activeTab === 3 && <h2>Study History - Coming Soon</h2>}
      </div>
    </StudentLayout>
  );
};

export default StudyPackages;
