import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ListBenfits from './listbenefits';
import { StudyPackage } from '../../interface';


interface PackageProps {
  package: StudyPackage;
}

const PackageCard: React.FC<PackageProps> = ({ package: pkg }) => {
 

  return (
    <div className="flex flex-col px-1 pt-1 mx-auto w-full border border-gray-200 border-solid rounded-[46px] max-md:mt-6 max-md:max-w-full bg-zinc-100">
    <div className='bg-white rounded-[46px]'>
    <Tabs defaultValue="Personal">
<TabsList className="grid xl:w-[60%] lg:w-[80%] grid-cols-3  h-16 rounded-full mt-10 mb-16 mx-10 my-10">
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