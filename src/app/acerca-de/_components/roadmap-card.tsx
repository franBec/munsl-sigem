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
    title: "Inicialización del Proyecto",
    date: "30/12/2024",
    description:
      "Configuración inicial con Next.js, incluyendo la estructura de la carpeta src y la configuración de Prettier.",
  },
  {
    title: "Implementación del Marco de UI",
    date: "30/12/2024",
    description:
      "Integración de componentes UI de shadcn y soporte para modo oscuro.",
  },
  {
    title: "Diseño Principal y Navegación",
    date: "31/12/2024",
    description:
      "Desarrollado el diseño principal, el menú de la barra lateral y mejorado el logotipo del escudo municipal.",
  },
  {
    title: "Sistema de Autenticación",
    date: "07/01/2025",
    description:
      "Implementación de NextAuth para autenticación de usuarios y funcionalidad de cierre de sesión.",
  },
  {
    title: "Manejo de Errores y Estados de Carga",
    date: "07/01/2025",
    description:
      "Añadidos límites de error y marcadores de carga para una mejor experiencia del usuario.",
  },
  {
    title: "Integración con Backend",
    date: "08/01/2025",
    description:
      "Conexión con la API del backend, implementación de la obtención de versiones y manejo de errores por falta de conexión.",
  },
  {
    title: "Mejoras de UI",
    date: "10/01/2025",
    description:
      "Mejorada la página principal, la sección 'Acerca de' y el componente del escudo municipal. Añadido filtrado a la barra lateral.",
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
