export interface PackageGroup {
    name: string;
    description: string;
    price: string;
    features: string[];
  }
  
  export interface StudyPackage {
    title: string;
    group: PackageGroup[];
    isComingSoon?: boolean;
  }