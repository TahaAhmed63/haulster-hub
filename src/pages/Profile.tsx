
import React from "react";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileTabs from "@/components/profile/ProfileTabs";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <ProfileHeader />
      
      <main className="container mx-auto px-4 md:px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <ProfileTabs />
        </div>
      </main>
    </div>
  );
};

export default Profile;
