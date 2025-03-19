
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Upload } from "lucide-react";
import { Link } from "react-router-dom";

const ProfileHeader = () => {
  return (
    <>
      <header className="border-b border-border">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center">
          <Link to="/dashboard" className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>
      </header>
      
      <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-6 mb-8">
        <Avatar className="w-24 h-24 border-4 border-background">
          <AvatarImage src="" alt="User avatar" />
          <AvatarFallback className="text-2xl bg-primary text-primary-foreground">JD</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold">John Doe</h1>
          <p className="text-muted-foreground">Shipper • Member since May 2023</p>
        </div>
        
        <Button className="md:self-end">
          <Upload className="mr-2 h-4 w-4" />
          Change Photo
        </Button>
      </div>
    </>
  );
};

export default ProfileHeader;
