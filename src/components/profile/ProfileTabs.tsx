
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalInfoTab from "./PersonalInfoTab";
import BusinessDetailsTab from "./BusinessDetailsTab";
import PreferencesTab from "./PreferencesTab";

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("personal");
  
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="mb-8">
        <TabsTrigger value="personal">Personal Info</TabsTrigger>
        <TabsTrigger value="business">Business Details</TabsTrigger>
        <TabsTrigger value="preferences">Preferences</TabsTrigger>
      </TabsList>
      
      <TabsContent value="personal" className="animate-fade-in">
        <PersonalInfoTab />
      </TabsContent>
      
      <TabsContent value="business" className="animate-fade-in">
        <BusinessDetailsTab />
      </TabsContent>
      
      <TabsContent value="preferences" className="animate-fade-in">
        <PreferencesTab />
      </TabsContent>
    </Tabs>
  );
};

export default ProfileTabs;
