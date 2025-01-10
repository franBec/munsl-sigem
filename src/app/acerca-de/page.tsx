import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import SystemInfoCard from "@/app/acerca-de/_components/system-info-card";
import RoadmapCard from "@/app/acerca-de/_components/roadmap-card";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 space-y-12">
      <h1 className="text-4xl font-bold tracking-tight">Acerca del proyecto</h1>

      <div className="w-full max-w-3xl space-y-8 overflow-x-hidden">
        <SystemInfoCard />
        <Card>
          <CardHeader>
            <CardTitle>Objetivo del Proyecto</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Este proyecto es un <strong>MVP (Producto Mínimo Viable)</strong>{" "}
              de una posible reescritura del sistema{" "}
              <a
                href="https://sigem.sanluislaciudad.gob.ar/"
                className="text-blue-600 hover:underline"
              >
                SIGEM
              </a>
              .
            </p>
            <p className="mb-4">
              El objetivo principal es crear una representación fiel del
              funcionamiento actual de SIGEM mientras se sientan las bases para
              una futura modernización. Este MVP forma parte de la primera fase
              de una serie de mejoras planificadas, que incluyen:
            </p>
            <ol className="list-decimal list-inside mb-4">
              <li className="mb-2">
                <strong>Migración de la lógica de negocio:</strong>
                <ul className="list-disc list-inside ml-6">
                  <li>De Java 8 a Java 21.</li>
                  <li>
                    Abandonar el monolito basado en{" "}
                    <a
                      href="https://grails.org/"
                      className="text-blue-600 hover:underline"
                    >
                      Grails
                    </a>
                    .
                  </li>
                  <li>
                    Adoptar una arquitectura separada de frontend (Next.js 14) y
                    backend (Groovy Spring Boot 3).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Prioridad en la representación actual:</strong>
                <ul className="list-disc list-inside ml-6">
                  <li>
                    Dado el alcance y la complejidad de esta transición, el
                    objetivo inicial es replicar el comportamiento actual de
                    manera fiel.
                  </li>
                  <li>
                    Algunas &#34;mejores prácticas&#34; no se implementarán en
                    esta etapa debido a limitaciones de tiempo y compatibilidad.
                  </li>
                </ul>
              </li>
            </ol>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Limitaciones</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>
                Este proyecto es un MVP y no refleja el estado final de la
                modernización planificada.
              </li>
              <li>
                Algunas prácticas y estructuras heredadas han sido mantenidas
                para garantizar una transición gradual.
              </li>
            </ul>
          </CardContent>
        </Card>
        <RoadmapCard />
      </div>
    </div>
  );
}
