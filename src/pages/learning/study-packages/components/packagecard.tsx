import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ListBenfits from './listbenefits';
import { StudyPackage } from '../../interface';


interface PackageProps {
  package: StudyPackage;
}

const PackageCard: React.FC<PackageProps> = ({ package: pkg }) => {
 

  return (
    <div className="flex flex-col px-2.5 pt-2.5 pb-16 mx-auto w-full border border-gray-200 border-solid bg-gray-50 rounded-[46px] max-md:mt-6 max-md:max-w-full">
    <div className="flex flex-col w-full font-medium leading-none text-neutral-900 max-md:mt-10">
    <Tabs defaultValue="Personal">
<TabsList className="grid w-[60%] grid-cols-3 bg-gray-300 h-16 rounded-full ">
  <TabsTrigger value="Personal" className="rounded-full h-full text-black">
    Personal
  </TabsTrigger>
  <TabsTrigger value="Duo" className="rounded-full h-full text-black">
    Duo
  </TabsTrigger>
  <TabsTrigger value="Group" className="rounded-full h-full text-black">
    Group
  </TabsTrigger>
</TabsList>
<TabsContent value="Personal">
  <ListBenfits pkg={pkg} type={0} />
</TabsContent>
<TabsContent value="Duo">
  <ListBenfits  pkg={pkg} type={1} />
</TabsContent>
<TabsContent value="Group">
  <ListBenfits pkg={pkg} type={2} />
</TabsContent>
</Tabs>

    </div>
  </div>
  );
};

export default PackageCard;