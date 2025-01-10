import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { menu, MenuHandler } from "@/components/layout/sidebar/menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

export function TramitesSinCuentaCard() {
  const items = new MenuHandler(menu).getTramitesItems();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-6 w-6" />
          Trámites sin cuenta
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Es posible realizar los siguientes trámites sin contar con una cuenta
          SIGEM:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(item =>
            item.urls.map((url, index) => (
              <Link href={url.url} key={index} className="block">
                <Alert className="cursor-pointer hover:bg-muted transition-colors">
                  {item.icon && <item.icon className="h-4 w-4" />}
                  <AlertTitle>
                    <strong>{item.title}</strong>
                  </AlertTitle>
                  <AlertDescription>{url.title}</AlertDescription>
                </Alert>
              </Link>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}
