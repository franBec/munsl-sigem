"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ChevronDown, ChevronUp } from "lucide-react";

const milestones: {
  title: string;
  date: string;
  description: string;
}[] = [
  {
    title: "Project Initialization",
    date: "30/12/2024",
    description:
      "Initial setup with Next.js, including src folder structure and Prettier configuration.",
  },
  {
    title: "UI Framework Implementation",
    date: "30/12/2024",
    description:
      "Integrated shadcn UI components and implemented dark mode support.",
  },
  {
    title: "Core Layout and Navigation",
    date: "31/12/2024",
    description:
      "Developed the main layout, sidebar menu, and improved the municipal shield logo.",
  },
  {
    title: "Authentication System",
    date: "07/01/2025",
    description:
      "Implemented NextAuth for user authentication and sign-out functionality.",
  },
  {
    title: "Error Handling and Loading States",
    date: "07/01/2025",
    description:
      "Added error boundaries and loading placeholders for better user experience.",
  },
  {
    title: "Backend Integration",
    date: "08/01/2025",
    description:
      "Connected to backend API, implemented version fetching and error handling for no connection.",
  },
  {
    title: "UI Enhancements",
    date: "Today",
    description:
      "Improved home page, about section, and municipal shield component. Added filtering to the sidebar.",
  },
];

const Roadmap = () => {
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
              Details
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
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
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
export default Roadmap;
