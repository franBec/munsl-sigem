import React from "react";
import SigemLogo from "@/components/logo/sigem-logo";
import EscudoMunicipal from "@/components/logo/escudo-municipal";

const LoadingPlaceholder: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-sidebar pl-4 border border-sidebar-border hidden sm:block">
        <div className="py-2">
          <EscudoMunicipal />
        </div>
        <div className="space-y-2 mt-2">
          <div className="h-6 w-48 bg-sidebar-accent rounded animate-pulse"></div>
          <div className="space-y-2 justify-items-end mr-12">
            <div className="h-6 w-40 bg-sidebar-accent rounded animate-pulse"></div>
            <div className="h-6 w-40 bg-sidebar-accent rounded animate-pulse"></div>
            <div className="h-6 w-40 bg-sidebar-accent rounded animate-pulse"></div>
          </div>
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="h-6 w-48 bg-sidebar-accent rounded animate-pulse"
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col space-y-6">
        <div className="border border-sidebar-border h-16 flex justify-end items-center">
          <div className="mr-4 h-8 w-48 bg-sidebar-accent rounded animate-pulse"></div>
          <div className="mr-4 h-8 w-8 bg-sidebar-accent rounded animate-pulse"></div>
        </div>

        <div className="text-center px-4 py-10 space-y-12">
          <div>
            <SigemLogo />
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center space-x-2">
              <div className="h-4 w-4 rounded-full bg-primary animate-bounce"></div>
              <div className="h-4 w-4 rounded-full bg-primary animate-bounce delay-75"></div>
              <div className="h-4 w-4 rounded-full bg-primary animate-bounce delay-150"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPlaceholder;
