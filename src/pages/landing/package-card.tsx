import React from "react";
import FeatureList from "./featuredlist";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomButton from "@/components/atoms/button";
import PaymentStatement from "./payment-statement"

const PackageCard: React.FC = () => {
  return (
    <div className="flex flex-col px-2.5 pt-2.5 pb-16 mx-auto w-full border border-gray-200 border-solid bg-neutral-100 rounded-[46px] max-md:mt-6 max-md:max-w-full">
      <div className="flex flex-col w-full font-medium leading-none text-neutral-900 max-md:mt-10">
      <Tabs defaultValue="Standard">
  <TabsList className="grid w-full grid-cols-3 bg-gray-300 h-16 rounded-full">
    <TabsTrigger value="Standard" className="rounded-full h-full text-black">
      Standard
    </TabsTrigger>
    <TabsTrigger value="Pro" className="rounded-full h-full text-black">
      Pro
    </TabsTrigger>
    <TabsTrigger value="Premium" className="rounded-full h-full text-black">
      Premium
    </TabsTrigger>
  </TabsList>
  <TabsContent value="Standard">
    <PaymentStatement title={"Standard"} />
  </TabsContent>
  <TabsContent value="Pro">
    <PaymentStatement title={"Pro"} />
  </TabsContent>
  <TabsContent value="Premium">
    <PaymentStatement title={"Premium"} />
  </TabsContent>
</Tabs>

      </div>
    </div>
  );
};

export default PackageCard;

{
  /* <div className="self-start mt-10 text-4xl font-semibold tracking-tighter">
Standard
</div>
<div className="mt-6 text-lg tracking-tight leading-snug">
Small projects or personal portfolios
</div>
<button className="gap-4 self-start py-5 pr-1 pl-7 mt-10 text-lg font-semibold tracking-tighter text-center text-white bg-indigo-600 min-h-[58px] rounded-[100px] max-md:pl-5">
Get Started
</button>
 <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
 <div className="flex gap-0.5 self-stretch my-auto whitespace-nowrap text-neutral-900 max-md:mt-10">
   <div className="grow text-3xl font-semibold tracking-tighter leading-none text-right">
     ₦4,000
   </div>
   <div className="self-start mt-4 text-lg font-medium tracking-tight leading-none">
     /month
   </div>
 </div>
</div> */
}
