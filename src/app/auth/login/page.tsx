"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginRequest } from "@/__generated__/api/munsl_sigem_backend/model";
import { schemas } from "@/__generated__/api/munsl_sigem_backend/munsl-sigem-backend-zod-client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel, FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { TriangleAlertIcon } from "lucide-react";

const Page = () => {
  const { theme } = useTheme();

  const router = useRouter();
  const { status } = useSession();
  if (status === "authenticated") {
    router.push("/");
  }

  const [loginError, setLoginError] = useState<string | null>(null);
  const form = useForm<LoginRequest>({
    resolver: zodResolver(schemas.LoginRequest),
  });
  const onSubmit: SubmitHandler<LoginRequest> = async loginRequest => {
    const signInResponse = await signIn("credentials", {
      username: loginRequest.username,
      password: loginRequest.password,
      callbackUrl: "/",
      redirect: false,
    });
    if (!signInResponse?.ok) {
      setLoginError(signInResponse?.error as string);
    }
  };
  const logoSrc = theme === "dark" ? "/sigem-blanco.png" : "/sigem-azul.png";

  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <div className="flex flex-col gap-6">
          <Card className="overflow-hidden">
            <CardContent className="grid p-0 md:grid-cols-2">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="p-6 md:p-8"
                >
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center text-center">
                      <h1 className="text-2xl font-bold">Bienvenido</h1>
                      <p className="text-balance text-muted-foreground">
                        Inicia sesión en tu cuenta SIGEM
                      </p>
                    </div>
                    {loginError && (
                      <Alert variant="default">
                        <TriangleAlertIcon className="h-4 w-4" />
                        <AlertTitle>{loginError}</AlertTitle>
                      </Alert>
                    )}
                    <div className="grid gap-2">
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>CUIT/CUIL (Sin guiones)</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid gap-2">
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <div className="flex items-center">
                              <FormLabel>Contraseña</FormLabel>
                              <Link
                                href="/auth/reset-password"
                                className="ml-auto text-sm underline-offset-2 hover:underline"
                              >
                                Olvidé mi contraseña
                              </Link>
                            </div>
                            <FormControl>
                              <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Iniciar Sesión
                    </Button>
                    <div className="text-center text-sm">
                      ¿No tiene cuenta?{" "}
                      <Link
                        href="/auth/signup"
                        className="underline underline-offset-4"
                      >
                        Crear cuenta aquí
                      </Link>
                    </div>
                  </div>
                </form>
              </Form>

              <div className="flex items-center justify-center p-6 md:p-8">
                <Image
                  src={logoSrc}
                  alt="Image"
                  layout="responsive"
                  width={800}
                  height={600}
                  objectFit="contain"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;