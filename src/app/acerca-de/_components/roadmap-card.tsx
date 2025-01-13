"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const milestones: {
  title: string;
  date: string;
  description: string;
}[] = [
  {
    title: "Initial Project Setup",
    date: "2024-12-30",
    description:
      "Established the project with Next.js for frontend and Spring Boot for backend. Initial commits included layouts, dark mode, and basic configurations.",
  },
  {
    title: "Error Handling and Logging",
    date: "2025-01-06",
    description:
      "Implemented error boundaries in frontend and enhanced backend logging with sanitization.",
  },
  {
    title: "User Authentication Features",
    date: "2025-01-07",
    description:
      "Integrated NextAuth for frontend authentication. Introduced JWT.",
  },
  {
    title: "Backend API Improvements",
    date: "2025-01-08",
    description:
      "Improved CORS configuration, and added version management workflows.",
  },
  {
    title: "UI/UX Updates and State Management",
    date: "2025-01-08",
    description:
      "Filtering functionality in the sidebar. Introduced state management for important features.",
  },
  {
    title: "Version Management and Deployment",
    date: "2025-01-08",
    description:
      "Automated versioning workflow for the backend using GitHub Actions. Released initial stable backend versions with updated README documentation.",
  },
  {
    title: "Documentation and Code Quality",
    date: "2025-01-08",
    description:
      "Updated backend and frontend README files, prettified OpenAPI specifications, and addressed several linting and type errors in the codebase.",
  },
  {
    title: "Frontend Enhancements and Responsiveness",
    date: "2025-01-10",
    description:
      "Improved responsive design across various pages like 'acerca-de', implemented home cards, and added a roadmap feature.",
  },
];

const RoadmapCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Roadmap</CardTitle>
      </CardHeader>
      <CardContent>
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="space-y-4"
        >
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              Detalles
              {isOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {milestones.map((milestone, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {milestone.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{milestone.date}</div>
                    <p className="text-xs text-muted-foreground mt-2">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
};
export default RoadmapCard;
