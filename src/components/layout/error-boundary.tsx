"use client";

import { ReactNode, useState } from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SigemLogo } from "@/components/logo/sigem-logo";

function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="max-w-2xl mx-auto mt-20">
      <CardHeader className="text-center">
        <SigemLogo/>
        <CardTitle>Sistema Integral de Gestión Municipal</CardTitle>
        <CardDescription>
          Algo salió mal, lamentamos los inconvenientes. Esto es lo que puedes
          hacer:
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end gap-2">
        <Button onClick={resetErrorBoundary} variant="outline">
          Reintentar
        </Button>
        <Button asChild>
          <Link onClick={resetErrorBoundary} href="/">
            Ir al menú principal
          </Link>
        </Button>
      </CardFooter>
      <CardContent>
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              Detalles del error
              {isOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-auto mt-2">
              {error as unknown as string}
            </pre>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}

export function ErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
}
