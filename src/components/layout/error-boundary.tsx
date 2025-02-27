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

export function ErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
}

function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: unknown;
  resetErrorBoundary: () => void;
}) {
  return (
    <Card className="max-w-2xl mx-auto mt-20">
      <CardHeader className="text-center">
        <SigemLogo />
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
        <ErrorDetails error={error} />
      </CardContent>
    </Card>
  );
}

export function ErrorDetails({ error }: { error: unknown }) {
  const [isOpen, setIsOpen] = useState(false);

  let errorCollapsibleContent: string;
  if (typeof error === "string") {
    errorCollapsibleContent = error;
  } else {
    errorCollapsibleContent = JSON.stringify(error, null, 2);
  }

  return (
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
          {errorCollapsibleContent}
        </pre>
      </CollapsibleContent>
    </Collapsible>
  );
}
