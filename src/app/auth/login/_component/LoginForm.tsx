"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { LoginRequest } from "@/__generated__/api/munsl_sigem_backend/model";
import { schemas } from "@/__generated__/api/munsl_sigem_backend/munsl-sigem-backend-zod-client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { TriangleAlertIcon } from "lucide-react";
import Link from "next/link";
import { UNAUTHORIZED_ERROR_MESSAGE } from "../../../../../next-auth-session-user";
import { useErrorBoundary } from "react-error-boundary";
import { Input } from "@/components/ui/input";

const LoginForm = () => {
  const router = useRouter();
  const [loginError, setLoginError] = useState<string | null>(null);
  const { showBoundary } = useErrorBoundary();

  const form = useForm<LoginRequest>({
    resolver: zodResolver(schemas.LoginRequest),
  });

  const onSubmit: SubmitHandler<LoginRequest> = async loginRequest => {
    setLoginError(null);
    const signInResponse = await signIn("credentials", {
      username: loginRequest.username,
      password: loginRequest.password,
      redirect: false,
    });

    if (signInResponse?.ok) {
      router.push("/");
    } else if (signInResponse?.error === UNAUTHORIZED_ERROR_MESSAGE) {
      setLoginError(UNAUTHORIZED_ERROR_MESSAGE);
    } else {
      showBoundary(signInResponse?.error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-8">
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
            <Link href="/auth/signup" className="underline underline-offset-4">
              Crear cuenta aquí
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
